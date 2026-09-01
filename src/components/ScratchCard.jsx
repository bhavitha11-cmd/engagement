import { useRef, useEffect, useState, useCallback } from 'react';

export default function ScratchCard({ children, width = 300, height = 95, onComplete }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratched, setScratched] = useState(false);
  const lastPointRef = useRef(null);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // Classic rich gold foil gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#B38728');
    gradient.addColorStop(0.2, '#FBF5B7');
    gradient.addColorStop(0.45, '#DAA520');
    gradient.addColorStop(0.7, '#AA771C');
    gradient.addColorStop(0.85, '#FBF5B7');
    gradient.addColorStop(1, '#8B6210');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle metallic stipple foil texture
    for (let i = 0; i < 350; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.18)' : 'rgba(74, 34, 8, 0.08)';
      ctx.fillRect(rx, ry, 1.5, 1.5);
    }

    // Classic double gold border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(6, 6, width - 12, height - 12);

    ctx.strokeStyle = 'rgba(139, 98, 16, 0.35)';
    ctx.lineWidth = 1;
    ctx.strokeRect(9, 9, width - 18, height - 18);

    // Clean luxury typography: "SCRATCH TO REVEAL"
    ctx.fillStyle = '#3d1c05';
    ctx.font = '600 11px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 1;
    ctx.fillText('SCRATCH TO REVEAL DATE', width / 2, height / 2);
    ctx.shadowColor = 'transparent';
  }, [width, height]);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if (e.touches && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const eraseLine = (from, to) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 32;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  const checkScratchPercentage = () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas || scratched) return;
      const ctx = canvas.getContext('2d');
      const imgData = ctx.getImageData(0, 0, width, height);
      const pixels = imgData.data;
      let clearCount = 0;

      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] < 128) {
          clearCount++;
        }
      }

      const totalSampled = pixels.length / 16;
      const percent = (clearCount / totalSampled) * 100;

      if (percent >= 38 && !scratched) {
        setScratched(true);
        if (onComplete) {
          onComplete();
        }
      }
    } catch (e) {
      console.log('Scratch check:', e);
    }
  };

  const handleStart = (e) => {
    if (scratched) return;
    setIsDrawing(true);
    const coords = getCoordinates(e);
    lastPointRef.current = coords;
    eraseLine(coords, coords);
  };

  const handleMove = (e) => {
    if (!isDrawing || scratched) return;
    const coords = getCoordinates(e);
    if (lastPointRef.current) {
      eraseLine(lastPointRef.current, coords);
    }
    lastPointRef.current = coords;
    checkScratchPercentage();
  };

  const handleEnd = () => {
    setIsDrawing(false);
    lastPointRef.current = null;
    checkScratchPercentage();
  };

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        margin: '0 auto',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(74, 34, 8, 0.12)',
        userSelect: 'none',
      }}
    >
      {/* Content to reveal */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #fffdfa 0%, #f7efe4 100%)',
          border: '1.5px solid rgba(201, 148, 42, 0.35)',
          borderRadius: '14px',
          zIndex: 1,
          boxShadow: 'inset 0 0 15px rgba(201, 148, 42, 0.06)',
        }}
      >
        {children}
      </div>

      {/* Canvas scratch layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          borderRadius: '14px',
          opacity: scratched ? 0 : 1,
          pointerEvents: scratched ? 'none' : 'auto',
          transition: 'opacity 0.6s ease',
          touchAction: 'none',
          cursor: 'crosshair',
        }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      />
    </div>
  );
}

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSlide() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay:', err);
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 14) {
      videoRef.current.pause();
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Direct Video - No poster image to prevent any static image opening */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
          background: '#000',
        }}
      >
        <source src="/couple.mp4" type="video/mp4" />
      </video>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
          marginBottom: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '3px',
            color: 'rgba(255, 255, 255, 0.85)',
            textTransform: 'uppercase',
            textShadow: '0 2px 6px rgba(0,0,0,0.7)',
          }}
        >
          Scroll Down
        </span>
        <span
          style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '1rem',
            lineHeight: '1',
            textShadow: '0 2px 6px rgba(0,0,0,0.7)',
          }}
        >
          ⌄
        </span>
      </motion.div>
    </section>
  );
}

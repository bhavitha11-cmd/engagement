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
        height: '100dvh',
        minHeight: '100svh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: '#fdf8f0',
      }}
    >
      {/* Edge-to-Edge Fullscreen Video */}
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
          objectPosition: 'center center',
          zIndex: 1,
        }}
      >
        <source src="/couple.mp4" type="video/mp4" />
      </video>

      {/* Floating Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.6, 1, 0.6], y: [0, 4, 0] }}
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
          background: 'rgba(26, 8, 0, 0.45)',
          backdropFilter: 'blur(8px)',
          padding: '6px 18px',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.62rem',
            letterSpacing: '2.5px',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: '600',
          }}
        >
          Scroll Down
        </span>
        <span
          style={{
            color: 'var(--gold-light)',
            fontSize: '0.85rem',
            lineHeight: '1',
          }}
        >
          ⌄
        </span>
      </motion.div>
    </section>
  );
}

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
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#fdf8f0', // Exact match with the video background
      }}
    >
      {/* Video fully contained so bells, couple, and temple have full breathing room */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '100dvh',
          objectFit: 'contain',
          objectPosition: 'center center',
          zIndex: 1,
          display: 'block',
        }}
      >
        <source src="/couple.mp4" type="video/mp4" />
      </video>

      {/* Minimalist discreet scroll indicator placed right at bottom without blocking the couple */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '8px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.52rem',
            letterSpacing: '2px',
            color: 'var(--text-medium)',
            textTransform: 'uppercase',
            fontWeight: '600',
            opacity: 0.75,
            textShadow: '0 1px 3px rgba(255, 255, 255, 0.9)',
          }}
        >
          Scroll
        </span>
        <span
          style={{
            color: 'var(--gold-dark)',
            fontSize: '0.85rem',
            lineHeight: '0.9',
            textShadow: '0 1px 3px rgba(255, 255, 255, 0.9)',
          }}
        >
          ⌄
        </span>
      </motion.div>
    </section>
  );
}

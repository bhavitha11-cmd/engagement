import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSlide() {
  const videoRef = useRef(null);
  const wasScrolledAwayRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch((err) => {
        console.log('Video autoplay:', err);
      });
    }

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const threshold = window.innerHeight * 0.35;

      if (scrollY > threshold) {
        wasScrolledAwayRef.current = true;
      } else if (scrollY <= 60 && wasScrolledAwayRef.current) {
        wasScrolledAwayRef.current = false;
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 14) {
      videoRef.current.pause();
    }
  };

  const handleReplayClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      onClick={handleReplayClick}
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '100svh',
        maxHeight: '100dvh',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: '#f7f5e9',
        cursor: 'pointer',
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
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
          objectPosition: 'center 45%',
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
          marginBottom: '20px',
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
          maxWidth: 'calc(100% - 32px)',
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

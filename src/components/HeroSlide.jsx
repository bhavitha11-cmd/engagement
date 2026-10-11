import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSlide() {
  const videoRef = useRef(null);
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch((err) => {
        console.log('Video autoplay:', err);
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const totalDuration = video.duration || 15.1;
    if (video.currentTime >= totalDuration - 0.35) {
      video.pause();
      setVideoFinished(true);
    }
  };

  const handleEnded = () => {
    setVideoFinished(true);
  };

  const handleScrollDown = (e) => {
    e.stopPropagation();
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
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
        background: '#fdf8f0',
      }}
    >
      {/* Seamless Background Template - Fills full screen */}
      <img
        src="/hero_bg.webp"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
        }}
      />

      {/* Main Video Overlay - Fits 100% uncropped */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
          zIndex: 1,
        }}
      >
        <source src="/couple.mp4" type="video/mp4" />
      </video>

      {/* Floating Scroll Down Prompt - Only appears after video has finished playing */}
      <AnimatePresence>
        {videoFinished && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onClick={handleScrollDown}
            style={{
              position: 'relative',
              zIndex: 2,
              marginBottom: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              cursor: 'pointer',
              background: 'rgba(26, 8, 0, 0.52)',
              backdropFilter: 'blur(8px)',
              padding: '8px 22px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 18px rgba(0,0,0,0.28)',
              maxWidth: 'calc(100% - 32px)',
            }}
          >
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.64rem',
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
                  fontSize: '0.88rem',
                  lineHeight: '1',
                }}
              >
                ⌄
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

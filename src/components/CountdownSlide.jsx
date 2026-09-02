import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { scaleIn } from '../animations';
import ScratchCard from './ScratchCard';

export default function CountdownSlide() {
  const [isScratched, setIsScratched] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown('2026-11-15T09:55:00');

  const handleScratchComplete = () => {
    setTimeout(() => {
      setIsScratched(true);
    }, 1000);
  };

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '40px 16px',
      }}
    >
      {/* Lotus & Mandala Theme Background */}
      <img
        src="/lotus_bg.jpg"
        alt="Lotus Theme Background"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 1,
        }}
      />

      {/* Gentle translucent wash ensuring crisp text readability while preserving lotus artwork */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 45%, rgba(253, 248, 240, 0.4) 0%, rgba(253, 248, 240, 0.1) 100%)',
          zIndex: 1.5,
          pointerEvents: 'none',
        }}
      />

      {/* Main Content Container centered in the middle */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '360px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Save the Date Header */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.9rem',
            color: 'var(--gold-dark)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '6px',
            fontWeight: '600',
          }}
        >
          Save the Date
        </span>

        {/* Scratch Card Section - Bigger and Centered */}
        <div style={{ width: '100%', marginTop: '8px', marginBottom: '14px' }}>
          {!isScratched && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: 'var(--font-classic)',
                fontSize: '0.95rem',
                color: 'var(--text-medium)',
                fontStyle: 'italic',
                marginBottom: '12px',
              }}
            >
              Scratch the card to reveal the date
            </motion.p>
          )}

          <ScratchCard width={330} height={118} onComplete={handleScratchComplete}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.55rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                letterSpacing: '1px',
              }}
            >
              15 November 2026
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                color: 'var(--gold-dark)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginTop: '6px',
                fontWeight: '600',
              }}
            >
              Sunday • 9:55 AM onwards
            </span>
          </ScratchCard>
        </div>

        {/* Countdown Timer (Revealed only after scratching) */}
        <AnimatePresence>
          {isScratched && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '4px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '2.2rem',
                  color: 'var(--text-dark)',
                  fontWeight: 'normal',
                  lineHeight: '1.1',
                  marginBottom: '10px',
                }}
              >
                The Countdown Begins
              </h2>

              {/* Countdown Grid (Frosted Glass Card) */}
              <div
                style={{
                  width: '100%',
                  padding: '12px 8px',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(201, 148, 42, 0.25)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(74, 34, 8, 0.06)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '8px',
                  }}
                >
                  {timeUnits.map((unit, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.08 }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.88)',
                        padding: '12px 2px',
                        borderRadius: '10px',
                        border: '1px solid rgba(201, 148, 42, 0.18)',
                        boxShadow: '0 2px 8px rgba(74, 34, 8, 0.03)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.65rem',
                          fontWeight: '600',
                          color: 'var(--gold-dark)',
                          lineHeight: '1.1',
                          marginBottom: '2px',
                        }}
                      >
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.52rem',
                          color: 'var(--text-medium)',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          fontWeight: '600',
                        }}
                      >
                        {unit.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

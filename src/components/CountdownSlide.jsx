import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { fadeUp, scaleIn } from '../animations';
import ScratchCard from './ScratchCard';

export default function CountdownSlide() {
  const [isScratched, setIsScratched] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown('2026-11-15T09:55:00');

  const handleScratchComplete = () => {
    setTimeout(() => {
      setIsScratched(true);
    }, 1000); // 1-second delay so the guest can see the revealed date first
  };

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Mins', value: minutes },
    { label: 'Secs', value: seconds },
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
        padding: '32px 20px',
      }}
    >
      {/* Background image */}
      <img
        src="/couple2.png"
        alt="Countdown Background"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* Light elegant frosted veil over background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(253, 248, 240, 0.45) 0%, rgba(253, 248, 240, 0.7) 100%)',
          backdropFilter: 'blur(2px)',
          zIndex: 1.5,
        }}
      />

      {/* Main Content Container */}
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
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            color: 'var(--gold-dark)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '8px',
            fontWeight: '600',
          }}
        >
          Save the Date
        </span>

        {/* Scratch Card Section */}
        <div style={{ width: '100%', marginTop: '12px', marginBottom: '20px' }}>
          {!isScratched && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                color: 'var(--text-medium)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px',
                fontWeight: '600',
              }}
            >
              Scratch to Reveal Date & Countdown
            </motion.p>
          )}

          <ScratchCard width={300} height={95} onComplete={handleScratchComplete}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
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
                fontSize: '0.65rem',
                color: 'var(--gold-dark)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginTop: '4px',
                fontWeight: '600',
              }}
            >
              9:55 AM onwards
            </span>
          </ScratchCard>
        </div>

        {/* Countdown Timer (Revealed only after scratching) */}
        <AnimatePresence>
          {isScratched && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '12px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '2.6rem',
                  color: 'var(--text-dark)',
                  fontWeight: 'normal',
                  lineHeight: '1.1',
                  marginBottom: '16px',
                }}
              >
                Counting Down...
              </h2>

              {/* Countdown Grid (Frosted Glass Card) */}
              <div
                style={{
                  width: '100%',
                  padding: '16px 12px',
                  background: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(201, 148, 42, 0.25)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(74, 34, 8, 0.08)',
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
                      transition={{ delay: index * 0.1 }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.85)',
                        padding: '12px 2px',
                        borderRadius: '12px',
                        border: '1px solid rgba(201, 148, 42, 0.2)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.7rem',
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
                          fontSize: '0.55rem',
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

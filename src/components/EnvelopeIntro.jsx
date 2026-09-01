import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false);

  const handleTap = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      onComplete();
    }, 1400);
  };

  return (
    <motion.div
      onClick={handleTap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(ellipse at center, #fffdfa 0%, #f6eee2 60%, #e9decb 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 99999,
        padding: '24px',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Soft Ambient Golden Dust in Background */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0.15,
            y: Math.random() * 200 - 100,
            x: Math.random() * 260 - 130,
          }}
          animate={{
            opacity: [0.15, 0.5, 0.15],
            y: ['-8px', '8px', '-8px'],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'var(--gold)',
            boxShadow: '0 0 8px rgba(201, 148, 42, 0.4)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Header / Title */}
      <motion.div
        animate={opened ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '32px' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.75rem',
            letterSpacing: '4px',
            color: 'var(--gold-dark)',
            textTransform: 'uppercase',
            fontWeight: '600',
            display: 'block',
            marginBottom: '6px',
          }}
        >
          ॥ శ్రీరస్తు ॥
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            letterSpacing: '4px',
            color: 'var(--text-medium)',
            textTransform: 'uppercase',
            fontWeight: '500',
            marginBottom: '8px',
          }}
        >
          Royal Invitation
        </h3>
        <div
          style={{
            width: '45px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            margin: '0 auto',
          }}
        />
      </motion.div>

      {/* 3D Interactive Royal Envelope Container */}
      <motion.div
        animate={
          opened
            ? { scale: [1, 1.02, 1.06], opacity: [1, 1, 0] }
            : { y: [0, -6, 0] }
        }
        transition={
          opened
            ? { duration: 1.3, ease: 'easeInOut' }
            : { repeat: Infinity, duration: 3.2, ease: 'easeInOut' }
        }
        style={{
          position: 'relative',
          width: '320px',
          height: '210px',
          perspective: '1000px',
        }}
      >
        {/* Envelope Outer Shadow */}
        <div
          style={{
            position: 'absolute',
            inset: '10px 15px -10px 15px',
            background: 'rgba(74, 34, 8, 0.15)',
            filter: 'blur(16px)',
            borderRadius: '16px',
            zIndex: 0,
          }}
        />

        {/* Envelope Back Base */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(145deg, #fdf9f2 0%, #f4ebd9 100%)',
            borderRadius: '14px',
            border: '1.5px solid rgba(201, 148, 42, 0.35)',
            boxShadow: 'inset 0 0 20px rgba(201, 148, 42, 0.08)',
            zIndex: 1,
          }}
        />

        {/* Inner Card that slides out when opened */}
        <motion.div
          animate={
            opened
              ? { y: -95, opacity: 1 }
              : { y: 0, opacity: 0.95 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            inset: '12px 16px',
            background: 'linear-gradient(135deg, #fffdfa 0%, #f8efe3 100%)',
            borderRadius: '10px',
            border: '1px solid rgba(201, 148, 42, 0.45)',
            boxShadow: '0 4px 15px rgba(74, 34, 8, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.55rem',
              letterSpacing: '2.5px',
              color: 'var(--gold-dark)',
              textTransform: 'uppercase',
              fontWeight: '600',
              marginBottom: '4px',
            }}
          >
            The Engagement of
          </span>
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '2.1rem',
              color: 'var(--text-dark)',
              lineHeight: '1.1',
            }}
          >
            Bhavitha & Raja
          </span>
        </motion.div>

        {/* Envelope Pocket (Front bottom triangles) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '14px',
            overflow: 'hidden',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          {/* Left Pocket Flap */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '105px 0 105px 160px',
              borderColor: 'transparent transparent transparent #ede2d2',
              filter: 'drop-shadow(2px 0 4px rgba(74, 34, 8, 0.04))',
            }}
          />
          {/* Right Pocket Flap */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '105px 160px 105px 0',
              borderColor: 'transparent #ede2d2 transparent transparent',
              filter: 'drop-shadow(-2px 0 4px rgba(74, 34, 8, 0.04))',
            }}
          />
          {/* Bottom Pocket Flap */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '0 160px 115px 160px',
              borderColor: 'transparent transparent #f7eddc transparent',
              filter: 'drop-shadow(0 -3px 8px rgba(74, 34, 8, 0.06))',
            }}
          />
        </div>

        {/* Envelope Top Triangular Flap (Folds Open in 3D) */}
        <motion.div
          animate={
            opened
              ? { rotateX: 180, zIndex: 1 }
              : { rotateX: 0, zIndex: 4 }
          }
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '115px 160px 0 160px',
            borderColor: '#f3e6d5 transparent transparent transparent',
            transformOrigin: 'top center',
            filter: 'drop-shadow(0 4px 8px rgba(74, 34, 8, 0.1))',
          }}
        />

        {/* Royal Gold Wax Seal */}
        <AnimatePresence>
          {!opened && (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: [1, 1.04, 1] }}
              exit={{ scale: 0.2, opacity: 0 }}
              transition={{
                scale: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
                exit: { duration: 0.3 },
              }}
              style={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #fff0b8 0%, #c9942a 55%, #7a4e00 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 6px 20px rgba(74, 34, 8, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
              }}
            >
              {/* Inner Embossed Ring */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 245, 220, 0.65)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: '#3d1c05',
                    letterSpacing: '1px',
                    textShadow: '0 1px 1px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  B & R
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tap Instruction Button */}
      <motion.div
        animate={
          opened
            ? { opacity: 0, y: 15 }
            : { opacity: [0.75, 1, 0.75], y: [0, 3, 0] }
        }
        transition={
          opened
            ? { duration: 0.3 }
            : { repeat: Infinity, duration: 2.2, ease: 'easeInOut' }
        }
        style={{
          marginTop: '42px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(201, 148, 42, 0.12) 0%, rgba(201, 148, 42, 0.04) 100%)',
            border: '1px solid rgba(201, 148, 42, 0.3)',
            padding: '10px 24px',
            borderRadius: '24px',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '3px',
              color: 'var(--text-medium)',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          >
            Tap to Open Invitation
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

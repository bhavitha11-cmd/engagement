import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false);

  const handleTap = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      onComplete();
    }, 1250);
  };

  return (
    <motion.div
      onClick={handleTap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 45%, #fffdfa 0%, #fbf5ea 40%, #f4ebd9 75%, #eae0cb 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 99999,
        padding: '24px 16px',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Soft Ambient Golden Dust floating in background */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0.2,
            y: Math.random() * 200 - 100,
            x: Math.random() * 260 - 130,
          }}
          animate={{
            opacity: [0.2, 0.65, 0.2],
            y: ['-10px', '10px', '-10px'],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5 + i * 0.8,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'var(--gold)',
            boxShadow: '0 0 10px rgba(201, 148, 42, 0.5)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Golden Burst Particles on Tap */}
      <AnimatePresence>
        {opened && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1px',
              height: '1px',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            {[...Array(16)].map((_, i) => {
              const angle = (i / 16) * 2 * Math.PI;
              const distance = 80 + (i % 3) * 45;
              const tx = Math.cos(angle) * distance;
              const ty = Math.sin(angle) * distance;
              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, scale: 0.4, opacity: 1 }}
                  animate={{
                    x: tx,
                    y: ty,
                    scale: [0.4, 1.4, 0],
                    opacity: [1, 0.85, 0],
                  }}
                  transition={{ duration: 1.0, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #fff7d6 0%, #d4a037 70%, #875c12 100%)',
                    boxShadow: '0 0 12px rgba(212, 160, 55, 0.9)',
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Top Header: Sacred Invocation ॥ శ్రీరస్తు ॥ */}
      <motion.div
        animate={
          opened
            ? { opacity: 0, y: -20, transition: { duration: 0.45 } }
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginBottom: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/envelope_header.webp"
          alt="॥ శ్రీరస్తు ॥"
          style={{
            height: '36px',
            maxWidth: '180px',
            objectFit: 'contain',
            display: 'block',
            filter: 'drop-shadow(0 1px 3px rgba(74, 34, 8, 0.12))',
          }}
        />
      </motion.div>

      {/* Centerpiece: Royal Luxury Ivory Envelope */}
      <motion.div
        animate={
          opened
            ? {
                scale: [1, 1.04, 1.1],
                opacity: [1, 1, 0],
                y: -18,
              }
            : {
                y: [0, -6, 0],
              }
        }
        transition={
          opened
            ? { duration: 1.15, ease: [0.38, 0.05, 0.22, 1] }
            : { repeat: Infinity, duration: 3.6, ease: 'easeInOut' }
        }
        whileHover={{ scale: opened ? 1 : 1.015 }}
        whileTap={{ scale: 0.985 }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '430px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/envelope_card.webp"
          alt="Royal Wedding Envelope - Bhavitha & Raja"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '48vh',
            objectFit: 'contain',
            display: 'block',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 16px 32px rgba(74, 34, 8, 0.14))',
          }}
        />

        {/* Subtle radial golden glow over wax seal when hovering / idle */}
        <motion.div
          animate={
            opened
              ? { scale: [1, 2.4], opacity: [0.6, 0] }
              : { opacity: [0.25, 0.65, 0.25], scale: [0.95, 1.08, 0.95] }
          }
          transition={
            opened
              ? { duration: 0.7 }
              : { repeat: Infinity, duration: 2.8, ease: 'easeInOut' }
          }
          style={{
            position: 'absolute',
            top: '49%',
            left: '52.6%',
            transform: 'translate(-50%, -50%)',
            width: '78px',
            height: '78px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 230, 140, 0.45) 0%, rgba(201, 148, 42, 0.2) 50%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* Bottom Button: Tap to Open Invitation */}
      <motion.div
        animate={
          opened
            ? { opacity: 0, y: 15, transition: { duration: 0.35 } }
            : {
                opacity: [0.88, 1, 0.88],
                y: [0, 3, 0],
              }
        }
        transition={
          opened
            ? { duration: 0.35 }
            : { repeat: Infinity, duration: 2.4, ease: 'easeInOut' }
        }
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          marginTop: '36px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 252, 245, 0.82) 0%, rgba(246, 238, 226, 0.6) 100%)',
            border: '1.2px solid rgba(195, 150, 85, 0.48)',
            padding: '11px 26px',
            borderRadius: '999px',
            boxShadow: '0 4px 16px rgba(74, 34, 8, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(6px)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '2.8px',
              color: '#4a2c14',
              textTransform: 'uppercase',
              fontWeight: '600',
              lineHeight: '1.2',
            }}
          >
            Tap to Open Invitation
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

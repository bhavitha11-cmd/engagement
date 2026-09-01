import { motion } from 'framer-motion';
import { fadeUp, scaleIn, stagger } from '../animations';

export default function FinalSlide() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 24px',
        background: 'linear-gradient(to bottom, var(--cream) 0%, var(--cream-dark) 100%)',
        textAlign: 'center',
        borderTop: '1px solid rgba(201, 148, 42, 0.25)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          width: '100%',
          maxWidth: '360px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Monogram */}
        <motion.div
          variants={scaleIn}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.2rem',
            color: 'var(--gold-dark)',
            marginBottom: '20px',
            fontWeight: '600',
            letterSpacing: '3px',
          }}
        >
          B & R
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '3.2rem',
            color: 'var(--text-dark)',
            fontWeight: 'normal',
            lineHeight: '1.2',
            marginBottom: '16px',
          }}
        >
          With Love & Gratitude
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-classic)',
            fontSize: '1.15rem',
            color: 'var(--text-medium)',
            lineHeight: '1.6',
            fontStyle: 'italic',
            marginBottom: '32px',
            maxWidth: '320px',
          }}
        >
          Your presence, prayers, and heartfelt blessings are the greatest gift as we begin our new journey together.
        </motion.p>

        {/* Classic Diamond Divider */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            width: '100%',
            marginBottom: '36px',
          }}
        >
          <div style={{ width: '35px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
          <div style={{ width: '4px', height: '4px', background: 'var(--gold)', transform: 'rotate(45deg)' }} />
          <div style={{ width: '35px', height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
        </motion.div>

        {/* Hashtag */}
        <motion.div
          variants={fadeUp}
          style={{
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              color: 'var(--text-medium)',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
              fontWeight: '500',
            }}
          >
            Celebrate With Us
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              color: 'var(--gold-dark)',
              fontWeight: '600',
              letterSpacing: '1.5px',
            }}
          >
            #BhavithaAndRaja
          </span>
        </motion.div>

        {/* Back to Top */}
        <motion.button
          variants={fadeUp}
          onClick={handleScrollToTop}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-medium)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: '8px 16px',
            opacity: 0.75,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.75)}
        >
          Back to Top ↑
        </motion.button>
      </motion.div>
    </section>
  );
}

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
        borderTop: '2px solid var(--gold)',
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
            fontSize: '2rem',
            color: 'var(--gold)',
            marginBottom: '24px',
            fontWeight: '600',
          }}
        >
          B ✦ R
        </motion.div>

        {/* Cursive Message */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '3rem',
            color: 'var(--text-dark)',
            fontWeight: 'normal',
            lineHeight: '1.2',
            marginBottom: '16px',
          }}
        >
          See You There!
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-classic)',
            fontSize: '1.1rem',
            color: 'var(--text-medium)',
            lineHeight: '1.5',
            marginBottom: '32px',
            maxWidth: '300px',
          }}
        >
          Your presence and blessings will make our special day complete. We look forward to celebrating our new beginning with you.
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          style={{
            width: '60px',
            height: '1px',
            background: 'var(--gold)',
            marginBottom: '40px',
          }}
        />

        {/* Hashtags */}
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
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Share the love
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              color: 'var(--gold-dark)',
              fontWeight: '600',
              letterSpacing: '1px',
            }}
          >
            #BhavithaRaja
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
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
        >
          Back to Top ↑
        </motion.button>
      </motion.div>
    </section>
  );
}

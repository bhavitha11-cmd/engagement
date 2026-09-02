import { motion } from 'framer-motion';
import { fadeUp, scaleIn, stagger } from '../animations';

export default function FinalSlide() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent('Engagement Ceremony: Bhavitha & Raja');
    const details = encodeURIComponent(
      'With the blessings of our elders and families, we warmly invite you to celebrate the engagement ceremony of Bhavitha & Raja.\n\nDate: 15 November 2026\nTime: 9:55 AM onwards\nLocation: Kothapalli, Andhra Pradesh, India'
    );
    const location = encodeURIComponent('Kothapalli, Andhra Pradesh, India');
    // 15 November 2026, 9:55 AM IST to 1:30 PM IST (UTC 04:25 to 08:00)
    const dates = '20261115T042500Z/20261115T080000Z';
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleUrl, '_blank', 'noopener,noreferrer');
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
        overflow: 'hidden',
        backgroundColor: 'var(--cream)',
        textAlign: 'center',
        borderTop: '1px solid rgba(201, 148, 42, 0.25)',
      }}
    >
      {/* Clean Mandala Theme Background */}
      <img
        src="/mandala_bg.jpg"
        alt="Mandala Background"
        loading="lazy"
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

      {/* Subtle soft veil for clean contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(253, 248, 240, 0.35) 0%, rgba(253, 248, 240, 0.1) 100%)',
          zIndex: 1.5,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          position: 'relative',
          zIndex: 2,
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
            fontSize: '1.1rem',
            color: 'var(--text-medium)',
            lineHeight: '1.6',
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
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '35px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
          <div style={{ width: '4px', height: '4px', background: 'var(--gold)', transform: 'rotate(45deg)' }} />
          <div style={{ width: '35px', height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
        </motion.div>

        {/* Add to Calendar Card */}
        <motion.div
          variants={scaleIn}
          style={{
            width: '100%',
            maxWidth: '320px',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(201, 148, 42, 0.3)',
            borderRadius: '16px',
            padding: '20px 18px',
            boxShadow: '0 8px 24px rgba(74, 34, 8, 0.05)',
            marginBottom: '36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              color: 'var(--text-dark)',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            Add to Calendar
          </span>
          <span
            style={{
              fontFamily: 'var(--font-classic)',
              fontSize: '0.9rem',
              color: 'var(--text-medium)',
              fontStyle: 'italic',
              marginBottom: '16px',
            }}
          >
            Save this auspicious occasion to your device
          </span>

          {/* Single Google Calendar Button */}
          <button
            onClick={handleGoogleCalendar}
            className="btn-gold"
            style={{
              width: '100%',
              fontSize: '0.75rem',
              padding: '12px 18px',
              borderRadius: '12px',
              letterSpacing: '1.5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            <span>📅</span> Add to Google Calendar
          </button>
        </motion.div>

        {/* Hashtag */}
        <motion.div
          variants={fadeUp}
          style={{
            marginBottom: '36px',
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
            #Bhavitha&Raja
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

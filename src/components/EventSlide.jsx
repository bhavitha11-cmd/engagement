import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../animations';

export default function EventSlide({
  label,
  heading,
  headingColor,
  description,
  date,
  time,
  venue,
  mapsUrl,
  alternateBg = false,
}) {
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
        backgroundColor: alternateBg ? '#f6efe6' : 'var(--cream)',
        borderBottom: '1px solid rgba(201, 148, 42, 0.1)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          width: '100%',
          maxWidth: '360px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Label Subtitle */}
        <motion.span
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            color: 'var(--text-medium)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            fontWeight: '500',
            opacity: 0.8,
          }}
        >
          {label}
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            color: headingColor,
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          {heading}
        </motion.h2>

        {/* Ornament */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
            marginBottom: '24px',
          }}
        >
          <div style={{ width: '30px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
          <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>✦</span>
          <div style={{ width: '30px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-classic)',
            fontSize: '1.05rem',
            color: 'var(--text-medium)',
            lineHeight: '1.5',
            fontStyle: 'italic',
            marginBottom: '32px',
            maxWidth: '300px',
          }}
        >
          {description}
        </motion.p>

        {/* Card containing details */}
        <motion.div
          variants={fadeUp}
          style={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(201, 148, 42, 0.15)',
            borderRadius: '16px',
            padding: '24px 20px',
            boxShadow: '0 8px 24px rgba(74, 34, 8, 0.04)',
            textAlign: 'left',
            marginBottom: '32px',
          }}
        >
          {/* Date */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                color: 'var(--gold-dark)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px',
                fontWeight: '600',
              }}
            >
              When
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                color: 'var(--text-dark)',
                fontWeight: '600',
              }}
            >
              {date}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-classic)',
                fontSize: '0.95rem',
                color: 'var(--text-medium)',
                marginLeft: '8px',
              }}
            >
              — {time}
            </span>
          </div>

          {/* Venue */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                color: 'var(--gold-dark)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px',
                fontWeight: '600',
              }}
            >
              Where
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: 'var(--text-dark)',
                fontWeight: '600',
                lineHeight: '1.3',
                display: 'block',
              }}
            >
              {venue}
            </span>
          </div>
        </motion.div>

        {/* Google Maps Button */}
        <motion.a
          variants={fadeUp}
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ width: '100%', maxWidth: '280px' }}
        >
          View on Google Maps
        </motion.a>
      </motion.div>
    </section>
  );
}

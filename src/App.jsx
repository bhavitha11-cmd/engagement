import { useState, useEffect, useRef } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeroSlide from './components/HeroSlide';
import CountdownSlide from './components/CountdownSlide';
import EventSlide from './components/EventSlide';
import FinalSlide from './components/FinalSlide';

function App() {
  const [inviteOpen, setInviteOpen] = useState(false);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Start background music when the envelope is opened
  useEffect(() => {
    if (inviteOpen && !musicStarted) {
      audioRef.current = new Audio('/music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
      
      const playAudio = () => {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay prevented. Audio will play upon user interaction.', err);
        });
      };

      playAudio();
      setMusicStarted(true);
    }
  }, [inviteOpen, musicStarted]);

  // Stop music when the tab/page is closed
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Toggle mute state
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Engagement Event details (Single Ceremony)
  const events = [
    {
      label: 'THE BEGINNING OF FOREVER',
      heading: 'Engagement Ceremony',
      headingColor: '#7a4e00', // Gold tone
      description: 'Join us as we exchange rings and take our first steps toward a lifetime of love and togetherness.',
      date: '15 November 2026',
      time: '9:55 AM onwards',
      venue: 'Kothapalli, Andhra Pradesh, India',
      mapsUrl: 'https://maps.app.goo.gl/DuZpVDowELkSwsjh6',
    }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      {inviteOpen && (
        <motion.div
          style={{
            position: 'fixed',
            right: 0,
            top: 0,
            width: '4px',
            height: '100vh',
            background: 'linear-gradient(180deg, var(--gold), var(--gold-light))',
            transformOrigin: 'top',
            scaleY,
            zIndex: 9999,
          }}
        />
      )}

      {/* Floating Audio Control Button */}
      {inviteOpen && (
        <button
          onClick={toggleMute}
          style={{
            position: 'fixed',
            top: '16px',
            right: '20px',
            zIndex: 99999,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(26, 8, 0, 0.45)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
          }}
          title={isMuted ? 'Unmute Background Music' : 'Mute Background Music'}
        >
          {isMuted ? '🔇' : '🎵'}
        </button>
      )}

      {/* Envelope Intro Overlay */}
      {!inviteOpen && (
        <EnvelopeIntro
          onComplete={() => setInviteOpen(true)}
        />
      )}

      {/* Main Slides Content */}
      {inviteOpen && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <HeroSlide />
          
          <CountdownSlide />

          {/* Render Engagement event slide */}
          {events.map((event, idx) => (
            <EventSlide
              key={idx}
              label={event.label}
              heading={event.heading}
              headingColor={event.headingColor}
              description={event.description}
              date={event.date}
              time={event.time}
              venue={event.venue}
              mapsUrl={event.mapsUrl}
              alternateBg={false}
            />
          ))}

          <FinalSlide />
        </div>
      )}
    </>
  );
}

export default App;

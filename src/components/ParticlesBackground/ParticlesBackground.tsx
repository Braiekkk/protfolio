import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './ParticlesBackground.css';
const ParticlesBackground: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleActivity = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 30000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity);
    handleActivity();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  if (!engineReady) {
    return <div className="particles-container" />;
  }

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 160 },
            size: { value: 0.2 },
            color: { value: '#ff6600' },
            opacity: { value: 0.8 },
            shape: { type: 'circle' },
            fill: false,
            stroke: { width: 1.5, color: '#ff6600' },
            links: {
              enable: true,
              distance: 120,
              color: '#ff6600',
              opacity: 0.35,
              width: 1,
            },
            move: {
              enable: isVisible,
              speed: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

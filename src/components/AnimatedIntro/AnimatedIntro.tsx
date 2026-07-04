"use client";

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import HeroContent from './HeroContent';
import HeroSideColumns from './HeroSideColumns';

const floatingIcons = [
  // top-left corner
  { left: '2%',  top: '4%',  size: 38, opacity: 0.65, duration: 4.2, delay: 0 },
  { left: '8%',  top: '2%',  size: 28, opacity: 0.55, duration: 5.1, delay: 0.6 },
  { left: '3%',  top: '16%', size: 32, opacity: 0.60, duration: 4.8, delay: 1.0 },
  { left: '12%', top: '10%', size: 24, opacity: 0.50, duration: 6.0, delay: 0.3 },

  // top-right corner
  { left: '88%', top: '3%',  size: 36, opacity: 0.65, duration: 3.8, delay: 1.4 },
  { left: '93%', top: '14%', size: 30, opacity: 0.60, duration: 5.4, delay: 0.8 },
  { left: '80%', top: '7%',  size: 26, opacity: 0.55, duration: 4.6, delay: 1.8 },
  { left: '91%', top: '26%', size: 34, opacity: 0.60, duration: 5.8, delay: 0.4 },

  // left edge mid
  { left: '1%',  top: '38%', size: 28, opacity: 0.50, duration: 5.2, delay: 1.2 },
  { left: '2%',  top: '54%', size: 22, opacity: 0.45, duration: 4.4, delay: 2.0 },

  // right edge mid
  { left: '94%', top: '42%', size: 30, opacity: 0.50, duration: 4.0, delay: 0.9 },
  { left: '91%', top: '56%', size: 24, opacity: 0.45, duration: 5.6, delay: 1.5 },
];

const AnimatedIntro: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      height: '100%',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>

      {/* Icon layer — full viewport width, true corners */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: icon.left,
            top: icon.top,
            opacity: icon.opacity,
            zIndex: 0,
            pointerEvents: 'none',
            color: '#FF7A00',
            filter: 'drop-shadow(0 0 6px rgba(255, 122, 0, 0.6))',
          }}
          animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
          transition={{
            repeat: Infinity,
            duration: icon.duration,
            delay: icon.delay,
            ease: 'easeInOut',
          }}
        >
          <FaJava size={icon.size} />
        </motion.div>
      ))}

      <HeroSideColumns />

      {/* Content box — constrained width */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        height: '100%',
        mx: 'auto',
        zIndex: 1,
      }}>
        <HeroContent
          name="Braiek Rayen"
          badge="AI Software Engineer"
          headline="Think. Build. Deploy."
          imageSrc="/face.png"
          imageAlt="Braiek Rayen"
          bottomOffset="15%" // ← single value: raise (bigger %) or lower (smaller %)
        />
      </Box>

    </Box>
  );
};

export default AnimatedIntro;

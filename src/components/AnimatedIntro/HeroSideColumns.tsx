"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import HeroInfoBox from './HeroInfoBox';
import { HERO_INFO_BOXES, HeroInfoBoxItem } from './heroSideContent';
import { MountainWireframe, GlobeWireframe } from './HeroDecorations';

// Cards reveal after the hero content has had time to appear, then in
// left/right pairs (row by row) rather than all at once.
const CARDS_START_DELAY = 0.9;
const PAIR_STAGGER = 0.25;

const renderBody = (item: HeroInfoBoxItem) => {
  if (item.techStack) {
    return (
      <Box sx={{
        flexGrow: 1,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        alignContent: 'center', justifyItems: 'center', alignItems: 'center',
        rowGap: 2.5, columnGap: 1.5,
        color: '#ff8c00', fontSize: '2.4rem',
      }}>
        {item.techStack.map((tech) => (
          <Box key={tech.name} title={tech.name} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {tech.icon}
          </Box>
        ))}
      </Box>
    );
  }
  if (item.bullets) {
    return (
      <>
        {item.decoration && (
          <Box sx={{
            position: 'absolute', right: -6, bottom: -6,
            width: 140, zIndex: 0, opacity: 0.55,
          }}>
            {item.decoration === 'mountain' && <MountainWireframe height={110} />}
            {item.decoration === 'globe' && <GlobeWireframe height={140} />}
          </Box>
        )}
        <Box component="ul" sx={{
          position: 'relative', zIndex: 1,
          m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.6,
        }}>
          {item.bullets.map((b) => (
            <Box component="li" key={b} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <Box sx={{
                flexShrink: 0, width: 6, height: 6, mt: '0.45em',
                backgroundColor: '#ff6600', transform: 'rotate(45deg)',
              }} />
              <span>{b}</span>
            </Box>
          ))}
        </Box>
      </>
    );
  }
  return (
    <>
      {item.title && (
        <Typography sx={{ color: '#ff8c00', fontWeight: 700, fontSize: '0.8rem', mb: 0.5 }}>
          {item.title}
        </Typography>
      )}
      {item.thumbnailSrc && (
        <Box
          component="img"
          src={item.thumbnailSrc}
          alt="GitHub contribution activity"
          sx={{
            width: '100%', height: 56, borderRadius: '4px', mb: 1,
            objectFit: 'contain', backgroundColor: '#1a0600',
            border: '1px solid rgba(255,102,0,0.3)',
          }}
        />
      )}
      <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit', color: 'inherit' }}>
        {item.paragraph}
      </Typography>
    </>
  );
};

const columnSx = (side: 'left' | 'right') => ({
  position: 'absolute' as const,
  [side]: '16px',
  top: '5%',
  display: { xs: 'none', xl: 'flex' } as const,
  flexDirection: 'column' as const,
  gap: '38px',
  zIndex: 2,
});

const HeroSideColumns: React.FC = () => (
  <>
    <Box sx={columnSx('left')}>
      {HERO_INFO_BOXES.left.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: CARDS_START_DELAY + index * PAIR_STAGGER }}
        >
          <HeroInfoBox icon={item.icon} label={item.label} cta={item.cta} minHeight={item.minHeight}>
            {renderBody(item)}
          </HeroInfoBox>
        </motion.div>
      ))}
    </Box>
    <Box sx={columnSx('right')}>
      {HERO_INFO_BOXES.right.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: CARDS_START_DELAY + index * PAIR_STAGGER }}
        >
          <HeroInfoBox icon={item.icon} label={item.label} cta={item.cta} minHeight={item.minHeight}>
            {renderBody(item)}
          </HeroInfoBox>
        </motion.div>
      ))}
    </Box>
  </>
);

export default HeroSideColumns;

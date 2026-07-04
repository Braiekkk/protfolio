"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroInfoBox from './HeroInfoBox';
import { HERO_INFO_BOXES, HeroInfoBoxItem } from './heroSideContent';

const renderBody = (item: HeroInfoBoxItem) => {
  if (item.techStack) {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {item.techStack.map((tech) => (
          <Box key={tech.name} sx={{
            display: 'flex', alignItems: 'center', gap: 0.5,
            px: 1, py: 0.4, border: '1px solid #ff6600', borderRadius: '4px',
            color: '#ff8c00', fontSize: '0.68rem',
          }}>
            {tech.icon}
            <span>{tech.name}</span>
          </Box>
        ))}
      </Box>
    );
  }
  if (item.bullets) {
    return (
      <Box component="ul" sx={{ m: 0, pl: 2, display: 'flex', flexDirection: 'column', gap: 0.4 }}>
        {item.bullets.map((b) => <li key={b}>{b}</li>)}
      </Box>
    );
  }
  return (
    <>
      {item.title && (
        <Typography sx={{ color: '#ff8c00', fontWeight: 700, fontSize: '0.8rem', mb: 0.5 }}>
          {item.title}
        </Typography>
      )}
      {item.thumbnail && (
        <Box sx={{
          width: '100%', height: 56, borderRadius: '4px', mb: 1,
          background: 'linear-gradient(135deg, rgba(255,102,0,0.25), rgba(255,102,0,0.05))',
          border: '1px solid rgba(255,102,0,0.3)',
        }} />
      )}
      <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit', color: 'inherit' }}>
        {item.paragraph}
      </Typography>
    </>
  );
};

const columnSx = (side: 'left' | 'right') => ({
  position: 'absolute' as const,
  [side]: '32px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: { xs: 'none', xl: 'flex' } as const,
  flexDirection: 'column' as const,
  gap: 3,
  zIndex: 2,
});

const HeroSideColumns: React.FC = () => (
  <>
    <Box sx={columnSx('left')}>
      {HERO_INFO_BOXES.left.map((item) => (
        <HeroInfoBox key={item.id} icon={item.icon} label={item.label} cta={item.cta}>
          {renderBody(item)}
        </HeroInfoBox>
      ))}
    </Box>
    <Box sx={columnSx('right')}>
      {HERO_INFO_BOXES.right.map((item) => (
        <HeroInfoBox key={item.id} icon={item.icon} label={item.label} cta={item.cta}>
          {renderBody(item)}
        </HeroInfoBox>
      ))}
    </Box>
  </>
);

export default HeroSideColumns;

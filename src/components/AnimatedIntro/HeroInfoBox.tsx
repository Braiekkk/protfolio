"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

type IconComponent = React.ComponentType<{ size?: number | string; color?: string }>;

interface HeroInfoBoxCta {
  label: string;
  href: string;
}

interface HeroInfoBoxProps {
  icon: IconComponent;
  label: string;
  cta?: HeroInfoBoxCta;
  minHeight?: number;
  children: React.ReactNode;
}

const HeroInfoBox: React.FC<HeroInfoBoxProps> = ({ icon: Icon, label, cta, minHeight = 200, children }) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: 240,
      minHeight,
      display: 'flex',
      flexDirection: 'column',
      p: 2,
      border: '1px solid #ff6600',
      borderRadius: '16px',
      background: 'linear-gradient(180deg, #2a0d00 0%, #0d0400 100%)',
      boxShadow: '0 0 12px rgba(255, 102, 0, 0.15), inset 0 0 24px rgba(255, 102, 0, 0.04)',
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: '0 0 20px rgba(255, 102, 0, 0.3), inset 0 0 24px rgba(255, 102, 0, 0.06)',
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.75 }}>
      <Icon size={18} color="#ff6600" />
      <Typography component="span" sx={{
        fontFamily: "'Orbitron', sans-serif",
        color: '#ff6600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 700,
        fontSize: '0.78rem',
      }}>
        {label}
      </Typography>
    </Box>

    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', color: '#e0e0e0', fontSize: '0.9rem', lineHeight: 1.5 }}>
      {children}
    </Box>

    {cta && (
      <Box
        component="a"
        href={cta.href}
        target={cta.href.startsWith('http') ? '_blank' : undefined}
        rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        sx={{
          display: 'inline-block',
          mt: 1,
          color: '#ff8c00',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '0.76rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {cta.label} →
      </Box>
    )}
  </Box>
);

export default HeroInfoBox;

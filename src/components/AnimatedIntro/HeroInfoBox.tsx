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
  children: React.ReactNode;
}

const HeroInfoBox: React.FC<HeroInfoBoxProps> = ({ icon: Icon, label, cta, children }) => (
  <Box
    sx={{
      width: 240,
      p: 2.25,
      border: '1px solid #ff6600',
      borderRadius: '8px',
      backgroundColor: '#1a0600',
      boxShadow: '0 0 20px rgba(255, 102, 0, 0.25), inset 0 0 40px rgba(255, 102, 0, 0.05)',
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: '0 0 35px rgba(255, 102, 0, 0.45), inset 0 0 40px rgba(255, 102, 0, 0.08)',
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1 }}>
      <Icon size={14} color="#ff6600" />
      <Typography component="span" sx={{
        fontFamily: "'Orbitron', sans-serif",
        color: '#ff6600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 700,
        fontSize: '0.72rem',
      }}>
        {label}
      </Typography>
    </Box>

    <Box sx={{ color: '#e0e0e0', fontSize: '0.78rem', lineHeight: 1.6 }}>
      {children}
    </Box>

    {cta && (
      <Box
        component="a"
        href={cta.href}
        sx={{
          display: 'inline-block',
          mt: 1.25,
          color: '#ff8c00',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '0.7rem',
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

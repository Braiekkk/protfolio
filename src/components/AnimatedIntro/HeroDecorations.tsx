"use client";

import React from 'react';

const wrapperStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: 90,
  pointerEvents: 'none',
};

export const MountainWireframe: React.FC = () => (
  <svg viewBox="0 0 220 90" style={wrapperStyle} preserveAspectRatio="none">
    <g stroke="#ff6600" strokeWidth={1} fill="none" opacity={0.4}>
      <polyline points="0,80 40,30 70,55 100,15 130,50 160,25 190,60 220,35" />
      <polyline points="0,85 40,50 70,70 100,40 130,65 160,45 190,72 220,55" />
      <line x1="0" y1="88" x2="220" y2="88" />
    </g>
    <g fill="#ff6600" opacity={0.6}>
      <circle cx={40} cy={30} r={2} />
      <circle cx={100} cy={15} r={2} />
      <circle cx={160} cy={25} r={2} />
    </g>
  </svg>
);

export const GlobeWireframe: React.FC = () => (
  <svg viewBox="0 0 220 90" style={wrapperStyle} preserveAspectRatio="xMidYMid meet">
    <g stroke="#ff6600" strokeWidth={1} fill="none" opacity={0.4}>
      <circle cx={110} cy={45} r={40} />
      <ellipse cx={110} cy={45} rx={40} ry={14} />
      <ellipse cx={110} cy={45} rx={18} ry={40} />
      <line x1="70" y1="45" x2="150" y2="45" />
    </g>
    <g fill="#ff6600" opacity={0.6}>
      <circle cx={110} cy={5} r={2} />
      <circle cx={150} cy={45} r={2} />
      <circle cx={70} cy={45} r={2} />
      <circle cx={110} cy={85} r={2} />
    </g>
  </svg>
);

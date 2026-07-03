"use client";

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DATA } from '@/data/resume';

interface HeroContentProps {
  name: string;
  badge: string;
  headline: string;
  imageSrc: string;
  imageAlt?: string;
  /** Distance from the bottom of the hero container. Controls face + line + text together. */
  bottomOffset?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
  name,
  badge,
  headline,
  imageSrc,
  imageAlt = 'Profile',
  bottomOffset = '8%',
}) => {
  return (
    <>
      {/* Face image — anchored to bottomOffset */}
      <Box sx={{
        position: 'absolute',
        right: '5%',
        bottom: bottomOffset,
        height: '92%',
        width: '65%',
        zIndex: 1,
      }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
        />
      </Box>

      {/* White line — sits at bottomOffset, same as face base */}
      <Box sx={{
        position: 'absolute',
        bottom: bottomOffset,
        left: { xs: '24px', md: '32px' },
        right: '5%',
        height: '4px',
        backgroundColor: 'white',
        zIndex: 2,
      }} />

      {/* Text + toolbar — sits just above the line */}
      <Box sx={{
        position: 'absolute',
        bottom: `calc(${bottomOffset} + 120px)`,
        left: 0,
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        width: '52%',
        px: { xs: 3, md: 4 },
      }}>
        {/* Badge */}
        <Box sx={{
          display: 'inline-block',
          border: '1px solid #FF7A00',
          borderRadius: '999px',
          px: 2.5,
          py: 0.6,
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 500,
          fontSize: '0.85rem',
          color: '#FF7A00',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          {badge}
        </Box>

        {/* Name */}
        <Box component="h1" sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          background: 'linear-gradient(135deg, #FF9A5A 0%, #FF4B24 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: 0,
          letterSpacing: '0.05em',
        }}>
          {name}
        </Box>

        {/* Headline */}
        <Box component="h2" sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: { xs: '1.4rem', md: '2.2rem' },
          color: '#FBE8DF',
          textShadow: '0 0 20px rgba(255, 176, 122, 0.8), 0 0 40px rgba(255, 106, 31, 0.5)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          margin: 0,
        }}>
          {headline}
        </Box>

        {/* Social toolbar */}
        <Dock
          magnification={48}
          distance={80}
          className="!mx-0 !h-auto !px-2 !py-1 !rounded-2xl border-[rgba(255,122,0,0.3)] bg-[rgba(0,0,0,0.3)] backdrop-blur-sm"
        >
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={social.url} passHref legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: 'ghost', size: 'icon' }),
                          'size-10'
                        )}
                      >
                        <social.icon className="size-4" />
                      </a>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
        </Dock>
      </Box>
    </>
  );
};

export default HeroContent;

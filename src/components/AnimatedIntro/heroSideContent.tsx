"use client";

import React from 'react';
import { User, Code2, Rocket, Star, Shield, Send } from 'lucide-react';
import { FaReact, FaJava, FaPython, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiTypescript } from 'react-icons/si';
import { DATA } from '@/data/resume';

type IconComponent = React.ComponentType<{ size?: number | string; color?: string }>;

export interface HeroInfoBoxItem {
  id: string;
  icon: IconComponent;
  label: string;
  title?: string;
  paragraph?: string;
  bullets?: string[];
  techStack?: { name: string; icon: React.ReactNode }[];
  thumbnailSrc?: string;
  decoration?: 'mountain' | 'globe';
  minHeight?: number;
  cta?: { label: string; href: string };
}

// PLACEHOLDER CONTENT — rough mockup copy, not final (except `certifications`,
// which is real). Replace remaining string fields with real content; the
// shape (paragraph/bullets/techStack) can stay.
export const HERO_INFO_BOXES: { left: HeroInfoBoxItem[]; right: HeroInfoBoxItem[] } = {
  left: [
    {
      id: 'about',
      icon: User,
      label: 'About Me',
      paragraph: "I'm a chill guy :D",
      cta: { label: 'KNOW MORE', href: '#about-section' },
    },
    {
      id: 'tech-stack',
      icon: Code2,
      label: 'Tech Stack',
      techStack: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
    {
      id: 'exploring',
      icon: Rocket,
      label: 'Currently Exploring',
      bullets: ['Generative AI', 'MLOps', 'Cloud Architecture'],
      decoration: 'mountain',
    },
  ],
  right: [
    {
      id: 'featured-project',
      icon: Star,
      label: 'Featured Project',
      title: 'AI Analytics Dashboard',
      paragraph: 'A live snapshot of my GitHub activity — commits and contributions over the past two weeks.',
      thumbnailSrc: 'https://github-readme-activity-graph.vercel.app/graph?username=braiekkk&days=14&hide_title=true&hide_border=true&area=true&color=ff6600&line=ff6600&point=ff6600&area_color=ff6600&bg_color=1a0600',
      minHeight: 260,
      cta: { label: 'VIEW PROJECT', href: DATA.contact.social.GitHub.url },
    },
    {
      id: 'certifications',
      icon: Shield,
      label: 'Certifications',
      bullets: [
        'LLM Prompt Engineering',
        'ML: Regression & Classification',
        'Advanced Learning Algorithms',
      ],
      decoration: 'globe',
    },
    {
      id: 'connect',
      icon: Send,
      label: "Let's Connect",
      paragraph: "Let's build something amazing together.",
      minHeight: 120,
      cta: { label: 'GET IN TOUCH', href: DATA.contact.social.LinkedIn.url },
    },
  ],
};

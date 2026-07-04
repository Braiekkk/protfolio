"use client";

import React from 'react';
import { User, Code2, Rocket, Star, Shield, Send } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
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
  thumbnail?: boolean;
  cta?: { label: string; href: string };
}

// PLACEHOLDER CONTENT — rough mockup copy, not final. Replace every string
// field below with real content; the shape (paragraph/bullets/techStack) can stay.
export const HERO_INFO_BOXES: { left: HeroInfoBoxItem[]; right: HeroInfoBoxItem[] } = {
  left: [
    {
      id: 'about',
      icon: User,
      label: 'About Me',
      paragraph: 'AI Software Engineer passionate about building intelligent, scalable, and impactful solutions.',
      cta: { label: 'KNOW MORE', href: '#about-section' },
    },
    {
      id: 'tech-stack',
      icon: Code2,
      label: 'Tech Stack',
      techStack: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
    {
      id: 'exploring',
      icon: Rocket,
      label: 'Currently Exploring',
      bullets: ['Generative AI', 'MLOps', 'Cloud Architecture'],
    },
  ],
  right: [
    {
      id: 'featured-project',
      icon: Star,
      label: 'Featured Project',
      title: 'AI Analytics Dashboard',
      paragraph: 'Real-time insights and predictions powered by machine learning.',
      thumbnail: true,
      cta: { label: 'VIEW PROJECT', href: '#projects-section' },
    },
    {
      id: 'certifications',
      icon: Shield,
      label: 'Certifications',
      bullets: ['AWS Certified Developer', 'TensorFlow Developer', 'DeepLearning.AI NLP'],
    },
    {
      id: 'connect',
      icon: Send,
      label: "Let's Connect",
      paragraph: "Let's build something amazing together.",
      cta: { label: 'GET IN TOUCH', href: DATA.contact.social.email.url },
    },
  ],
};

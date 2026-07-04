"use client";

import dynamic from 'next/dynamic';
import AnimatedIntro from "@/components/AnimatedIntro/AnimatedIntro";
const BLUR_FADE_DELAY = 0.04;
import { Box } from "@mui/system";
import ProjectShowcase from "@/components/ProjectComponent/ProjectShowcase";
import { FaReact, FaNodeJs, FaDatabase, FaPhp, FaSymfony, FaPython } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography } from "@mui/material";
import ResumePage from "./resume";
import BlurFadeText from "../components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { useTheme } from "next-themes";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// True once `ref`'s element has scrolled up past `thresholdRatio` of the
// viewport height, false again only once scrolled back down below it. Unlike
// a plain viewport-intersection check, this doesn't flip back while scrolling
// further down through the section's own (possibly tall) content.
function useScrolledPast(ref: React.RefObject<HTMLElement | null>, thresholdRatio = 0.8) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const check = () => {
      if (!ref.current) return;
      setPassed(ref.current.getBoundingClientRect().top < window.innerHeight * thresholdRatio);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [ref, thresholdRatio]);

  return passed;
}

// Lazy load heavy components
const MatterBox = dynamic(() => import("@/components/DraggableSkills/MatterBox"), {
  ssr: false,
  loading: () => <div style={{height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading skills...</div>
});

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground/ParticlesBackground"), {
  ssr: false,
});

export default function Page() {
  const projects = [
    {
      gifUrl: '/2024-09-02-02-59-33.gif',
      description: 'This is a project I worked on for an animal shelter association in Tunisia.',
      techStack: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MySQL', icon: <FaDatabase /> },
      ],
    },
    {
      gifUrl: '/Untitled design.gif',
      description: 'This is a carpooling app I worked on where users can add new rides , join existing rides and contact people or report them if needed.',
      techStack: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Php', icon: <FaPhp /> },
        { name: 'MySQL', icon: <FaDatabase /> },
        { name: 'Symfony', icon: <FaSymfony /> },
      ],
    },
    {
      gifUrl: '/relib.gif',
      description: 'ReLib is an AI-powered platform designed to identify and mitigate colonial bias in Wikipedia articles, developed during the Unbreaking News 2.0 hackathon.',
      techStack: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'MySQL', icon: <FaDatabase /> },
      ],
    },
    {
      gifUrl: '/klippy.gif',
      description: 'Klippy is a virtual assistant designed to enhance productivity by providing quick access to information, managing tasks, and offering personalized support, developed during the AI Minds hackathon.',
      techStack: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Qdrant', icon: <FaDatabase /> },
        { name: 'Neo4j', icon: <FaDatabase /> },
      ],
    }
  ];
  const carouselItems = [
    {
      imageUrl: '/unbreaking.png',
      description: 'Won first place in Unbreaking news 2.0 hackathon by building ReLib: an AI-powered platform for detecting colonial bias in Wikipedia articles',
    },
    {
      imageUrl: '/cybersphere.png',
      description: 'Participated in the national cybersecurity cybersphere congress , where our team Fokspy secured 4th place in the challenging CTF that took place  .',
    },
    {
      imageUrl: '/wintercup.png',
      description: 'Participated in many competitive programming contests , the wintercup has been one of the most exhilerating experiences where we got to be in the top 25 among the very best.',
    },
    
  ];
  const { theme } = useTheme();
  const textClass = theme === 'light' ? 'text-light' : 'text-dark';
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(true);

  const projectsSectionRef = useRef<HTMLButtonElement>(null);
  const projectsSectionInView = useScrolledPast(projectsSectionRef);
  const skillsSectionRef = useRef<HTMLButtonElement>(null);
  const skillsSectionInView = useScrolledPast(skillsSectionRef);

  useEffect(() => {
    setProjectsOpen(projectsSectionInView);
  }, [projectsSectionInView]);

  useEffect(() => {
    setSkillsOpen(skillsSectionInView);
  }, [skillsSectionInView]);

  return (
    <main className="flex flex-col w-full">
      <ParticlesBackground />
      <section className="hero-section">
        <AnimatedIntro />
      </section>
      <div className="flex flex-col items-center">

        {/* Projects */}
        <Box id="projects-section" component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <button
            ref={projectsSectionRef}
            onClick={() => setProjectsOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <BlurFadeText text="<Projects>" className={`code-text ${textClass}`} />
          </button>
          <AnimatePresence initial={false}>
            {projectsOpen && (
              <motion.div
                key="projects"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ overflow: 'hidden', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: '0px 0px -20% 0px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ width: '100%', marginBottom: '4rem' }}
                  >
                    <ProjectShowcase
                      gifUrl={project.gifUrl}
                      description={project.description}
                      techStack={project.techStack}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <BlurFadeText text="</Projects>" className={`code-text mb-8 ${textClass}`} />
        </Box>

        {/* Skills */}
        <Box component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <button
            ref={skillsSectionRef}
            onClick={() => setSkillsOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <BlurFadeText text="<Skills>" className={`code-text ${textClass}`} />
          </button>
          <AnimatePresence initial={false}>
            {skillsOpen && (
              <motion.div
                key="skills"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ overflow: 'hidden', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <BlurFade inView yOffset={16} duration={0.6}>
                  <MatterBox />
                </BlurFade>
              </motion.div>
            )}
          </AnimatePresence>
          <BlurFadeText text="</Skills>" className={`code-text mb-8 ${textClass}`} />
        </Box>

        {/* About me */}
        <Box id="about-section" component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <button
            onClick={() => setAboutOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <BlurFadeText text="<About me>" className={`code-text ${textClass}`} />
          </button>
          <AnimatePresence initial={false}>
            {aboutOpen && (
              <motion.div
                key="about"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ overflow: 'hidden', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <BlurFade inView yOffset={16} duration={0.6}>
                  <Box sx={{ width: '80%', maxWidth: '600px', margin: '0 auto', height: '60%', maxHeight: '600px' }}>
                    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                      {carouselItems.map((item, index) => (
                        <Box key={index} sx={{ mb: 8, textAlign: 'center' }}>
                          <Image
                            src={item.imageUrl}
                            alt={`Carousel item ${index + 1}`}
                            width={600}
                            height={400}
                            loading="lazy"
                            quality={85}
                          />
                          <p>{item.description}</p>
                        </Box>
                      ))}
                    </Carousel>
                  </Box>
                </BlurFade>
              </motion.div>
            )}
          </AnimatePresence>
          <BlurFadeText text="</About me>" className={`code-text mb-8 ${textClass}`} />
        </Box>

      </div>
    </main>
  );
}

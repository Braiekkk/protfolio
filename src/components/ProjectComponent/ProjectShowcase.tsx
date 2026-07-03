import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

interface ProjectShowcaseProps {
  gifUrl: string;
  description: string;
  techStack: { name: string; icon: React.ReactNode }[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ gifUrl, description, techStack }) => {
  return (
    <Box sx={{
      flexGrow: 1,
      p: 3,
      border: '1px solid #ff6600',
      borderRadius: '8px',
      backgroundColor: '#1a0600',
      boxShadow: '0 0 20px rgba(255, 102, 0, 0.25), inset 0 0 40px rgba(255, 102, 0, 0.05)',
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: '0 0 35px rgba(255, 102, 0, 0.45), inset 0 0 40px rgba(255, 102, 0, 0.08)',
      },
    }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Box sx={{ position: 'relative', width: '60%', height: 'auto' }}>
            <Image
              src={gifUrl}
              alt="Project demonstration"
              width={600}
              height={400}
              loading="lazy"
              style={{ borderRadius: '6px', width: '100%', height: 'auto', border: '1px solid #ff660044' }}
              unoptimized
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" gutterBottom sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#ff6600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 700,
              fontSize: '0.85rem',
              mb: 1,
            }}>
              Project Description
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#e0e0e0', lineHeight: 1.7 }}>
              {description}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#ff6600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 700,
              fontSize: '0.85rem',
              mt: 2,
              mb: 1,
            }}>
              Tech Stack
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {techStack.map((tech, index) => (
                <Box key={index} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  px: 1.5,
                  py: 0.5,
                  border: '1px solid #ff6600',
                  borderRadius: '4px',
                  color: '#ff8c00',
                  fontSize: '0.8rem',
                }}>
                  {tech.icon}
                  <Typography variant="body2" sx={{ color: '#ff8c00', fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem' }}>
                    {tech.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectShowcase;

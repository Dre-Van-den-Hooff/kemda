import { Box, Flex, Title } from '@mantine/core';
import type { Metadata } from 'next';
import ProjectCard from '@/components/projectCard';
import type { Project } from '@/types/project';
import OtherServices from '@/components/otherServices';

export const metadata: Metadata = {
  title: 'Kemda - Home',
  description: 'Kemda Contructions BV - Home pagina',
};

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects: Project[] = await response.json();

  return (
    <Flex direction="column" gap="1rem">
      <Title size={48} style={{ alignSelf: 'center' }}>
        Individuele afgestemde projecten
      </Title>
      <Box>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
      <OtherServices />
    </Flex>
  );
}

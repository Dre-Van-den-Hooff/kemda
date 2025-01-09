import { Title } from '@mantine/core';
import type { Metadata } from 'next';
import ProjectCard from '@/components/project';
import type { Project } from '@/types/project';

export const metadata: Metadata = {
  title: 'Kemda - Home',
  description: 'Kemda Contructions BV - Home pagina',
};

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects: Project[] = await response.json();

  return (
    <div>
      <Title>Home</Title>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

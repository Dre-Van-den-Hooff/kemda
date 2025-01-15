import type { Metadata } from 'next';
import type { Project } from '@/types/project';
import OtherServices from '@/components/home/otherServices';
import Projects from '@/components/home/projects';

export const metadata: Metadata = {
  title: 'Kemda - Home',
  description: 'Kemda Contructions BV - Home pagina',
};

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects: Project[] = await response.json();

  return (
    <>
      <Projects projects={projects} />
      <OtherServices />
    </>
  );
}

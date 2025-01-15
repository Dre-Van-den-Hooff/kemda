import { sizes } from '@/globals';
import { Box, Flex, Title } from '@mantine/core';

import ProjectCard from '../projectCard';
import type { Project } from '@/types/project';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <Flex
      direction="column"
      gap="1rem"
      w="100%"
      maw={sizes.maxWidth}
      pb="2.75rem"
    >
      <Title size={48} style={{ alignSelf: 'center' }}>
        Individuele afgestemde projecten
      </Title>
      <Box>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Flex>
  );
}

'use client';

import type { Project } from '@/types/project';
import { Accordion, Flex, Text, List } from '@mantine/core';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Accordion variant="contained" py="lg">
      <Accordion.Item value={project.title}>
        <Accordion.Control>
          {/* Title */}
          <Text fw="bold" size="2rem">
            {project.title}
          </Text>
          {/* Short description */}
          <Text mt="1rem" ta="justify">
            {project.shortDescription}
          </Text>
          {/* TODO: Read more link */}
        </Accordion.Control>
        <Accordion.Panel>
          {/* Long description */}
          {project.longDescription && (
            <Flex direction="column" gap="0.5rem">
              {project.longDescription.map((paragraph) => (
                <Text key={paragraph} ta="justify">
                  {paragraph}
                </Text>
              ))}
            </Flex>
          )}
          {/* TODO: Bullet points */}
          {project.bulletPoints && (
            <List>
              {project.bulletPoints.bullets.map((bullet) => (
                <List.Item key={bullet.title}>
                  <Text fw="bold">{bullet.title}</Text>
                  <Text>{bullet.description}</Text>
                </List.Item>
              ))}
            </List>
          )}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

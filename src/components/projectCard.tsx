'use client';

import type { Project } from '@/types/project';
import { Accordion, Flex, Text, List, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Divider from './divider';
import { colors, sizes } from '@/globals';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const isMobile = useMediaQuery(`(max-width: ${sizes.mobile})`);

  return (
    <Accordion variant="filled" py="lg">
      <Accordion.Item value={project.title}>
        <Accordion.Control>
          {/* Title */}
          <Flex gap="lg">
            <Divider color={colors.primary} />
            <Text fw="bold" size={isMobile ? '1.5rem' : '2rem'}>
              {project.title}
            </Text>
          </Flex>
          {/* Short description */}
          <Text mt="1rem">{project.shortDescription}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          {/* Bullet points */}
          {project.bulletPoints && (
            <>
              <Text mb="sm">{project.bulletPoints.bulletTitle}</Text>
              <List
                spacing="sm"
                mb="md"
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCheck width={16} height={16} />
                  </ThemeIcon>
                }
              >
                {project.bulletPoints.bullets.map((bullet) => (
                  <List.Item key={bullet.title}>
                    <Text fw="bold">{bullet.title}</Text>
                    <Text>{bullet.description}</Text>
                  </List.Item>
                ))}
              </List>
            </>
          )}
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
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

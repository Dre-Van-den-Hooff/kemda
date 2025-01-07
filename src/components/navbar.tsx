'use client';

import * as React from 'react';
import { Menu, Flex, Group, Button, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { colors, sizes } from '@/globals';
import Image from 'next/image';
import logo from '../../public/logo.png';

type MenuItem = {
  id: number;
  href: string;
  name: string;
};

const menuItems: MenuItem[] = [
  { id: 1, href: '/deuren', name: 'Deuren' },
  { id: 2, href: '/ikea-keukens', name: 'IKEA keukens' },
  { id: 3, href: '/schrijnwerkerij', name: 'Binnen- & buitenschrijnwerkerij' },
  {
    id: 4,
    href: '/nieuwbouw-renovatie',
    name: 'Nieuwbouw- & renovatiewerken',
  },
  { id: 5, href: '/gyproc', name: 'Gyprocwerken' },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = React.useCallback(
    (url: string) => {
      return pathname === url;
    },
    [pathname],
  );

  return (
    <Flex bg={colors.black} align="center" justify="center">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        h={120}
        p="md"
        maw={sizes.maxWidth}
        w="100%"
      >
        <Flex gap="0.5rem">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Image src={logo} alt="Logo Kemda" width={96} height={50} />
          </Link>
          <Flex direction="column">
            <Text c={colors.white} fw={900} size="1.5rem">
              Kemda Constructions BV
            </Text>
            <Text c={colors.grey} fw={600} lts={1.2} size="1.2rem">
              Algemene Schrijnwerkerij
            </Text>
          </Flex>
        </Flex>

        <Group gap="lg">
          <Menu width={250} position="bottom-start" trigger="hover">
            <Menu.Target>
              <Button
                variant="subtle"
                rightSection={<IconChevronDown size={16} />}
                color={isActive('/') ? colors.primary : colors.white}
                component={Link}
                href="/"
              >
                Home
              </Button>
            </Menu.Target>
            <Menu.Dropdown bg={colors.black}>
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.id}
                  component={Link}
                  href={item.href}
                  color={isActive(item.href) ? colors.primary : colors.white}
                >
                  {item.name}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
          <Button
            component={Link}
            href="/contact"
            variant="outline"
            color={isActive('/contact') ? colors.primary : colors.white}
          >
            Contact
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
}

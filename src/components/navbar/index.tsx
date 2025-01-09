'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Burger, Drawer, Button } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { colors, sizes } from '@/globals';
import logoWhite from '../../../public/logo-white.png';
import NavButtons from './navButtons';

export type MenuItem = {
  id: number;
  href: string;
  name: string;
};

const homeItems: MenuItem[] = [
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

const menuItems: MenuItem[] = [
  ...homeItems,
  { id: 6, href: '/contact', name: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery(`(max-width: ${sizes.mobile})`);
  const [opened, { toggle, close }] = useDisclosure(false);

  // Determine if the current pathname is active.
  const isActive = React.useCallback(
    (path: string) => {
      return pathname === path;
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
        pr="md"
        maw={sizes.maxWidth}
        w="100%"
      >
        {/* Logo section */}
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Image src={logoWhite} alt="Logo Kemda" width={180} />
        </Link>
        {/* Tabs section */}
        {isMobile ? (
          <>
            <Burger
              opened={opened}
              onClick={toggle}
              color={colors.white}
              aria-label="Toggle navigation"
            />
            <Drawer
              opened={opened}
              onClose={close}
              title="Kemda constructions"
              position="top"
              size="100%"
            >
              <Flex direction="column" gap="1rem" mt="3rem">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    component={Link}
                    href={item.href}
                    color={isActive(item.href) ? colors.primary : colors.black}
                    variant="subtle"
                    onClick={close}
                  >
                    {item.name}
                  </Button>
                ))}
              </Flex>
            </Drawer>
          </>
        ) : (
          <NavButtons menuItems={homeItems} isActive={isActive} />
        )}
      </Flex>
    </Flex>
  );
}

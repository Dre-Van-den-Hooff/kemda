import { colors } from '@/globals';
import { Group, Menu, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import type { MenuItem } from '.';

type Props = {
  menuItems: MenuItem[];
  isActive: (path: string) => boolean;
};

export default function NavButtons({ menuItems, isActive }: Props) {
  return (
    <Group gap="lg">
      <Menu width={250} position="bottom-start" trigger="hover">
        <Menu.Target>
          <Button
            variant="subtle"
            rightSection={<IconChevronDown size={16} />}
            color={isActive('/') ? colors.primary : colors.white}
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
  );
}

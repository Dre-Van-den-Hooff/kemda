import { colors, sizes } from '@/globals';
import { Anchor, Flex, Text } from '@mantine/core';
import { IconMail, IconPhone } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.black,
        padding: '1rem',
        textAlign: 'center',
        color: colors.white,
      }}
    >
      <Flex direction="column" maw={sizes.maxWidth} gap="1rem" align="center">
        <Flex direction="row" align="center" gap="4rem">
          <Anchor
            c={colors.white}
            href="mailto:info@kemda.be"
            underline="always"
          >
            <Flex gap="0.25rem">
              <IconMail />
              <Text fw="bold">info@kemda.be</Text>
            </Flex>
          </Anchor>
          <Anchor
            c={colors.white}
            href="tel:+32496551541"
            fw="bold"
            underline="always"
          >
            <Flex gap="0.25rem">
              <IconPhone />
              <Text fw="bold">+32 496 55 15 41</Text>
            </Flex>
          </Anchor>
          <Text fw="bold">Belfius: BE06 0682 4929 9222</Text>
        </Flex>
        <Flex direction="row" align="center" gap="1rem">
          <Text fw="bold">&copy; 2025 Kemda Constructions</Text>
          <Text fw="bold">BTW-nummer: BE0873192515</Text>
          <Text fw="bold">KBC: BE93 7370 5652 4367</Text>
        </Flex>
      </Flex>
    </footer>
  );
}

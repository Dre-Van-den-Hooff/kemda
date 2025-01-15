import { colors, sizes } from '@/globals';
import { Box, Flex, Title, Text, Button } from '@mantine/core';
import Divider from '../divider';
import Link from 'next/link';

export default function OtherServices() {
  return (
    <Flex
      direction="row"
      gap="0.5rem"
      w="100vw"
      bg={colors.black}
      c={colors.white}
      align="center"
      justify="center"
      py="4rem"
    >
      <Flex
        direction="column"
        maw={sizes.maxWidth}
        w={sizes.maxWidth}
        px="1rem"
        gap="1rem"
      >
        <Divider color={colors.white} />
        <Title>Andere Diensten</Title>
        <Box>
          <Text>
            Vindt u niet direct wat u zoekt? Neem gerust contact met ons op en
            stel uw vraag.
          </Text>
          <Text>
            Wij voeren alle werkzaamheden uit die op onze website beschreven
            staan.
          </Text>
          <Text>
            Heeft u een specifiek project in gedachten? Wij denken graag met u
            mee en bieden een oplossig op maat.
          </Text>
        </Box>
        <Button
          component={Link}
          href="/contact"
          variant="outline"
          color={colors.white}
          h="4rem"
          maw="750px"
        >
          Offerte aanvragen
        </Button>
      </Flex>
    </Flex>
  );
}

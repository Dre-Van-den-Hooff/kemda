import { colors } from '@/globals';
import { Box, Flex, Title, Text, Button } from '@mantine/core';
import Divider from './divider';

export default function OtherServices() {
  return (
    <Flex direction="row" gap="0.5rem">
      <Divider color={colors.white} />
      <Flex direction="column" bg={colors.black} c={colors.white} w="100%">
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
        <Button />
      </Flex>
    </Flex>
  );
}

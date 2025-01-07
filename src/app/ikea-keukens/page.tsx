import { Title } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kemda - IKEA Keukens',
  description: 'Kemda Contructions BV - Keukens pagina',
};

export default function Kitchens() {
  return (
    <div>
      <Title>Keukens</Title>
    </div>
  );
}

import { Title } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kemda - Home',
  description: 'Kemda Contructions BV - Home pagina',
};

export default function Home() {
  return (
    <div>
      <Title>Home</Title>
    </div>
  );
}

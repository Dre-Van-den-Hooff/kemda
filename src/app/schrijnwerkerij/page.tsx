import { Title } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kemda - Binnen- & buitenschrijnwerkerij',
  description: 'Kemda Contructions BV - Binnen- & buitenschrijnwerkerij pagina',
};

export default function Carpentry() {
  return (
    <div>
      <Title>Binnen- & buitenschrijnwerkerij</Title>
    </div>
  );
}

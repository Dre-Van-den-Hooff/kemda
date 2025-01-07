import { Title } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kemda - Nieuwbouw & renovatie',
  description: 'Kemda Contructions BV - Nieuwbouw & renovatie pagina',
};

export default function Renovations() {
  return (
    <div>
      <Title>Nieuwbouw & renovatie</Title>
    </div>
  );
}

import { sizes } from '@/globals';
import { Container } from '@mantine/core';

export default function DetailPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container maw={sizes.maxWidth}>{children}</Container>;
}

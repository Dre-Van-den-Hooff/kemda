import { Divider as MantineDivider, type DividerProps } from '@mantine/core';

export default function Divider({ ...props }: DividerProps) {
  return <MantineDivider orientation="vertical" size={4} {...props} />;
}

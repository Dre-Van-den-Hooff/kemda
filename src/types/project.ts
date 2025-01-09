import type { StaticImageData } from 'next/image';

type BulletPoints = {
  bulletTitle?: string;
  bullets: Array<{
    title: string;
    description?: string;
  }>;
};

export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription?: string[];
  previewImage?: StaticImageData | undefined;
  bulletPoints?: BulletPoints;
};

import type { StaticImageData } from 'next/image';

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  previewImage: StaticImageData | undefined;
};

export async function GET() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Deuren',
      shortDescription: '',
      longDescription: '',
      previewImage: undefined,
    },
  ];
  return new Response(JSON.stringify(projects), {
    headers: { 'Content-Type': 'application/json' },
  });
}

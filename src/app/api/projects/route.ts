import type { Project } from '@/types/project';

export async function GET() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Binnendeuren',
      shortDescription:
        'Stijlvolle binnendeuren die naadloos aansluiten bij uw interieur.',
      longDescription: [
        `Plaatsingsdienst voor professionele ondernemingen:
          Kemda Constructions biedt een gespecialiseerde plaatsingsdienst aan voor professionele
          ondernemingen.
          Deze dienst wordt geleverd in het kader van een onderlinge samenwerkingsovereenkomst.`,
        `Voor particulieren bieden wij de service om door uzelf aangekochte binnendeuren vakkundig
          te plaatsen en af te werken.
          Zo bent u verzekerd van een perfect eindresultaat.`,
        `Graag willen wij samen met u een afspraak inplannen voor een bezoek aan de toonzaal van
          één van onze leveranciers, afhankelijk van uw keuze van deur.
          Tijdens dit bezoek kunnen we samen de verschillende mogelijkheden en materialen bekijken
          die het beste aansluiten bij uw wensen en het beoogde project.`,
        `Doordat wijzelf niet over een eigen toonzaal beschikken en gebruik maken van die van onze
          leveranciers, kunnen wij de totale prijs van uw project naar het minimum drukken. Dit stelt
          ons in staat om u de best mogelijke prijs-kwaliteitverhouding aan te bieden.`,
      ],
      bulletPoints: {
        bulletTitle:
          'Kemda Constructions biedt een perfecte plaatsingsservice voor diverse soorten binnendeuren, waaronder:',
        bullets: [
          {
            title: 'Schilderdeuren',
          },
          {
            title: 'Stijldeuren',
          },
          {
            title: 'Stalen deuren',
          },
          {
            title: 'Schuifdeuren',
          },
          {
            title: 'Invisible deuren',
          },
          {
            title: 'Glazen deuren',
          },
          { title: 'En meer.' },
        ],
      },
    },
    {
      id: 2,
      title: 'Binnen- en buitenschrijnwerk op maat',
      shortDescription: 'Maatwerkoplossingen voor uw interieur en exterieur.',
      longDescription: [
        'Met oog voor detail en kwaliteit zorgen wij ervoor dat elk project voldoet aan uw verwachtingen.',
      ],
      bulletPoints: {
        bulletTitle: 'Kemda Constructions biedt een uitgebreide expertise in:',
        bullets: [
          {
            title: 'Timmerwerken',
            description:
              'Op maat gemaakte houtoplossingen voor uw interieur en exterieur.',
          },
          {
            title: 'Parket en laminaat',
            description:
              'Vakkundige plaatsing en afwerking voor een stijlvolle en duurzame vloer.',
          },
          {
            title: 'Plinten',
            description:
              'Nauwkeurige plaatsing voor een perfecte afwerking van uw vloer.',
          },
        ],
      },
    },
    {
      id: 3,
      title: 'Nieuwbouw & renovatiewerken',
      shortDescription:
        'Dit betreft zowel het bouwen van nieuwe constructies als het renoveren van bestaande gebouwen om ze te vernieuwen of aan te passen aan moderne eisen.',
      bulletPoints: {
        bullets: [
          {
            title: 'Gevelbekleding',
            description:
              'Het bedekken van de buitenmuren van een gebouw met duurzame afwerkingsmaterialen, zoals hout, kunststof, PVC, trespa voor zowel esthetische als beschermende doeleinden.',
          },
          {
            title: 'Dakoversteken',
            description:
              'Het plaatsen van dakranden die over de muren uitsteken. Dit helpt om het water van het dak af te voeren en beschermt de gevels.',
          },
          {
            title: 'Zinkwerken',
            description:
              'Het installeren van zinken dakgoten, afvoeren, en andere zinken onderdelen die helpen bij het afvoeren van regenwater en het beschermen van de bouw tegen waterbeschadiging.',
          },
          {
            title: 'Roofing',
            description:
              'Het aanbrengen van bitumineuze dakbedekking, om het dak waterdicht en duurzaam te maken. (wij doen geen epdm daken)',
          },
        ],
      },
    },
    {
      id: 4,
      title: 'Velux dakramen',
      shortDescription:
        'Complete service van A tot Z, inclusief advies, plaatsing en afwerking.',
    },
    {
      id: 5,
      title: 'Gyprocwerken',
      shortDescription:
        'Wij realiseren hoogwaardige metalstud wanden en plafonds, afgewerkt met gyproc.',
      longDescription: [
        `Deze constructies bieden een strak en modern resultaat, ideaal voor zowel nieuwbouw
          als renovatieprojecten. Of het nu gaat om het creëren van scheidingswanden, verlaagde
          plafonds of specifieke akoestische en thermische toepassingen, wij zorgen voor een
          perfect afgewerkte en duurzame oplossing die aansluit bij uw wensen.`,
      ],
    },
    {
      id: 6,
      title: 'Projecten Ikea',
      shortDescription: 'Montage en uitwerking van diverse Ikea-artikelen.',
      bulletPoints: {
        bullets: [
          {
            title: 'Ikea keukens en dressings',
            description: `Professionele montage en uitwerking van IKEA-
                          keukens en op maat gemaakte dressings.
                          Wij verzorgen de professionele montage en perfecte uitwerking van IKEA-
                          keukens en op maat gemaakte dressings.
                          Van het nauwkeurig plaatsen van kasten en werkbladen tot het afwerken
                          van alle details, wij zorgen ervoor dat uw keuken of dressing volledig naar
                          wens wordt gerealiseerd.
                          Onze expertise garandeert een strakke en duurzame installatie die
                          functionaliteit en esthetiek combineert.`,
          },
          {
            title: 'Montage van Ikea opbergingen, badkamerkasten',
            description: `Deskundige
                          assemblage van meubelkasten voor een perfect eindresultaat.
                          Wij bieden deskundige assemblage en installatie van IKEA-
                          opbergmeubelen en badkamerkasten. Met oog voor detail zorgen we voor
                          een nauwkeurige montage en een perfect eindresultaat.`,
          },
        ],
      },
    },
  ];

  return new Response(JSON.stringify(projects), {
    headers: { 'Content-Type': 'application/json' },
  });
}

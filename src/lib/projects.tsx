import {
  FigmaLogo,
  NotionLogo,
} from '@/app/projects/[slug]/components/illustrations'

type ProjectType = {
  title: string
  duration: string
  company: string
  bannerImage: { path: string; alt: string }
  published: boolean
  slug: string
  descriptors: { label: string; value: string }[] | []
  areas: string
  motivation?: React.ReactNode | string
  tools?: { illustration: React.ReactNode; link?: string }[]
}

const projects: ProjectType[] = [
  {
    title: 'Transparent bug tracking',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '/images/system_health-banner.svg', alt: '' },
    published: false,
    slug: 'transparent-bug-tracking',
    areas: 'Ui design',
    descriptors: [
      { label: 'Areas', value: 'Design sprint, Ui design' },
      { label: 'Company', value: 'Volvo Cars' },
      { label: 'Role', value: 'UX designer' },
    ],
    motivation: (
      <>
        <p>My teams'</p>
      </>
    ),
    tools: [
      { illustration: <FigmaLogo />, link: 'https://www.figma.com/' },
      { illustration: <NotionLogo />, link: 'https://www.notion.so/' },
    ],
  },
  {
    title: 'Streamlined supply chain management',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: {
      path: '/images/supply_chain-work_item.svg',
      alt: '',
    },
    published: false,
    slug: 'streamlined-supply-chain-management',
    areas: 'Research, strategy & UX design',
    descriptors: [
      {
        label: 'Areas',
        value: 'Research, strategy & UX design',
      },
      { label: 'Company', value: 'Volvo Cars' },
      { label: 'Role', value: 'Lead UX designer' },
    ],
  },
  {
    title: 'Component library and design system maintenance',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'complex-component-and-design-system-maintenance',
    areas: 'Mentoring & Ui design',
    descriptors: [],
  },
  {
    title: 'Wholly Health',
    duration: '2024',
    company: 'Wholly Health',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'wholly-health',
    areas: 'Mentoring & Ui design',
    descriptors: [],
  },
]

export { projects, type ProjectType }

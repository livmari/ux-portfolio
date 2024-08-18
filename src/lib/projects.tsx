/* import {
  AntDesignLogo,
  FigmaLogo,
  NotionLogo,
} from '@/app/projects/[slug]/components/illustrations' */

type ProjectType = {
  title: string
  summary?: string
  duration: string
  company: string
  bannerImage: { path: string; alt: string }
  published: boolean
  slug: string
}

const projects: ProjectType[] = [
  {
    title: 'Gamified bug resolution',
    summary:
      'Opening up for transparent communication about issue resolution across teams while encouraging gamification and a sense of success for developers',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '/images/system_health-banner.svg', alt: '' },
    published: true,
    slug: 'gamified-bug-resolution',
  },
  {
    title: 'Streamlined supply chain management',
    summary: '',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: {
      path: '/images/supply_chain-work_item.svg',
      alt: '',
    },
    published: false,
    slug: 'streamlined-supply-chain-management',
    /* areas: 'Research, strategy & UX design', */
    /* descriptors: [
      {
        label: 'Areas',
        value: 'Research, strategy & UX design',
      },
      { label: 'Company', value: 'Volvo Cars' },
      { label: 'Role', value: 'Lead UX designer' },
    ], */
  },
  {
    title: 'Component library and design system maintenance',
    summary: '',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'complex-component-and-design-system-maintenance',
  },
  {
    title: 'Wholly Health',
    summary: '',
    duration: '2024',
    company: 'Wholly Health',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'wholly-health',
  },
]

export { projects, type ProjectType }

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
  bannerImage: { path: string; alt: string; floating?: boolean }
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
    bannerImage: {
      path: '/images/system_health-bug_resolution_overview.svg',
      alt: '',
    },
    published: true,
    slug: 'gamified-bug-resolution',
  },
  {
    title: 'Using design system strategy to increase UX maturity',
    summary: '',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: {
      path: '/images/component_overview.svg',
      alt: '',
      floating: true,
    },
    published: true,
    slug: 'using-design-system-strategy-to-increase-ux-maturity',
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
  },
  /* areas: 'Research, strategy & UX design', */
  /* descriptors: [
      {
        label: 'Areas',
        value: 'Research, strategy & UX design',
      },
      { label: 'Company', value: 'Volvo Cars' },
      { label: 'Role', value: 'Lead UX designer' },
    ], */
  /* {
    title: 'Wholly Health',
    summary: '',
    duration: '2024',
    company: 'Wholly Health',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'wholly-health',
  }, */
]

export { projects, type ProjectType }

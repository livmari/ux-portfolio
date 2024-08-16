import {
  AntDesignLogo,
  FigmaLogo,
  NotionLogo,
} from '@/app/projects/[slug]/components/illustrations'

type ProjectType = {
  title: string
  summary?: string
  duration: string
  company: string
  bannerImage: { path: string; alt: string }
  published: boolean
  slug: string
  descriptors: { label: string; value: string }[] | []
  areas: string
  motivation?: React.ReactNode | string
  approach?: React.ReactNode | string
  tools?: { illustration: React.ReactNode; link?: string }[]
}

const projects: ProjectType[] = [
  {
    title: 'Gamified bug resolution',
    summary:
      'Opening up for transparent communication about issue resolution across teams while encouraging gamification and a sense of success for developers',
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
      <p>
        This smaller side-quest project came about through an internal
        discussion in my team, where management requested insights on the
        general turnover time for issue resolution. Since a combination of
        factors, ranging from complexity and severity of the bugs, to delays in
        user responses, made it difficult for the team to give a real
        estimation, I decided to design a mock-up to increase the transparency
        between teams, users, and management, as well as give the developers
        back a sense of agency over the outcomes of their efforts.
      </p>
    ),
    approach: (
      <>
        <p></p>

        <img
          src={'/images/system_health-before.svg'}
          alt={'Mock-up of what the legacy system looks like.'}
        />

        <img
          src={'/images/system_health-user_map.svg'}
          alt={'User and stakeholder map'}
        />
        />

        <img
          src={'/images/system_health-bug_history.svg'}
          alt={'User and stakeholder map'}
        />
      </>
    ),
    tools: [
      { illustration: <FigmaLogo />, link: 'https://www.figma.com/' },
      { illustration: <NotionLogo />, link: 'https://www.notion.so/' },
      { illustration: <AntDesignLogo />, link: 'https://ant.design/' },
    ],
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
    summary: '',
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
    summary: '',
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

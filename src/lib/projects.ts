type ProjectType = {
  title: string
  duration: string
  company: string
  bannerImage: { path: string; alt: string }
  published: boolean
  slug: string
  descriptors: { label: string; value: string }[] | []
  areas: string
}

const projects: ProjectType[] = [
  {
    title: 'Streamlined supply chain management',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: {
      path: '/images/supply_chain-work_item.svg',
      alt: '',
    },
    published: true,
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
    title: 'Issue tracking in accessible system health dashboard',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-2',
    areas: 'Ui design',
    descriptors: [],
  },
  {
    title: 'Complex component and design system maintenance',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-3',
    areas: 'Mentoring & Ui design',
    descriptors: [],
  },
]

export { projects, type ProjectType }

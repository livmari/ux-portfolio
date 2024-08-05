type ProjectType = {
  title: string
  year: string
  company: string
  bannerImage: { path: string; alt: string }
  published: boolean
  slug: string
  descriptors: { label: string; value: string }[] | []
}

const projects: ProjectType[] = [
  {
    title: 'Streamlined supply chain management',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: true,
    slug: 'streamlined-supply-chain-management',
    descriptors: [
      {
        label: 'Areas',
        value: 'Research, strategy & design',
      },
      { label: 'Company', value: 'Volvo Cars' },
      { label: 'Role', value: 'UX designer' },
    ],
  },
  {
    title: 'Issue tracking in accessible system health dashboard',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-2',
    descriptors: [],
  },
  {
    title: 'Complex component and design system maintenance',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-3',
    descriptors: [],
  },
]

export { projects, type ProjectType }

type ProjectType = {
  title: string
  year: string
  company: string
  bannerImage: { path: string; alt: string }
  published: boolean
  slug: string
}

const projects: ProjectType[] = [
  {
    title: 'Streamlined supply chain management',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: true,
    slug: 'project-title-1',
  },
  {
    title: 'Issue tracking in accessible system health dashboard',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-2',
  },
  {
    title: 'Complex component and design system maintenance',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-3',
  },
]

export { projects, type ProjectType }

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
    title: 'Project title 1',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: true,
    slug: 'project-title-1',
  },
  {
    title: 'Project title 2',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-2',
  },
  {
    title: 'Project title 3',
    year: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'project-title-3',
  },
]

export { projects, type ProjectType }

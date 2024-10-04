import { HeroSection } from '@/app/sections'

const project = {
  image: {
    path: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '',
  },
  title: 'Eliminating knowledge silos by enabling cross team collaboration',
  subtitle:
    'Research, strategy, workshop facilitation, stakeholder management and design for Volvo Cars, 2024',
  slug: 'eliminating-knowledge-silos-by-enabling-cross-team-collaboration',
  year: '2024',
  company: 'Volvo Cars',
  descriptions: [
    {
      label: 'Responsibilities',
      values: [
        'Research',
        'Strategy',
        'Requirements engineering',
        'Workshop facilitation',
        'Stakeholder management',
        'UX & UI design',
      ],
    },
  ],
}

const Project = ({ params }: { params: { slug: string } }) => {
  return (
    <main className={'mt-20 grid gap-20 sm:mt-32 sm:gap-32'}>
      <HeroSection
        useCase={'project'}
        title={project.title}
        image={project.image}
        year={project.year}
        company={project.company}
        descriptions={project.descriptions}
      />
    </main>
  )
}

export default Project

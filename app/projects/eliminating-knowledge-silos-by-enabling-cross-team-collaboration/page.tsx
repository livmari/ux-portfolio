import { HeroSection, TextSection } from '@/app/sections'

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
  summary: [
    <p>
      Volvo Cars supply chain management, made up of hundreds of buyers,
      specialists and strategic planners, was facing a challenge: important
      sourcing information for early-stage projects was spread across Excel
      sheets, emails, and meeting discussions. This created isolated pockets of
      knowledge, making it difficult for teams to collaborate and access
      up-to-date information.
    </p>,
    <p>
      The need was for a solution that would allow different teams to work
      together more efficiently, ensuring sourcing data was captured in a more
      transparent and accessible way. The goal was to eliminate these knowledge
      silos, making it easier for everyone to access and contribute, while
      reducing the risk of losing critical information along the way, contribute
      to the overall data quality of the ecosystem.
    </p>,
  ],
}

const Project = () => {
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

      <TextSection title={'Motivation'} paragraphs={project.summary} />
    </main>
  )
}

export default Project

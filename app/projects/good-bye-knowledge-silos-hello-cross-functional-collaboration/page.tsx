import { HeroSection, TextSection, VectorSection } from '@/app/sections'
import { StakeholderDiagram } from '@/app/projects/good-bye-knowledge-silos-hello-cross-functional-collaboration/components'

const project = {
  image: {
    path: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '',
  },
  title: 'Eliminating knowledge silos by enabling cross team collaboration',
  slug: 'eliminating-knowledge-silos-by-enabling-cross-team-collaboration',
  year: '2024',
  company: 'Volvo Cars',
  descriptions: [
    {
      label: 'My role',
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
      At Volvo Cars, hundreds of people collaborate to bring new cars to market.
      A large part of the surrounding supply chain management takes place in
      meetings, emails, and Excel sheets stored across various devices. This has
      created isolated pockets of knowledge, where valuable data gets lost. To
      change this culture, the available business tools need to make it easier
      for different teams to share and contribute information, ultimately
      improving data quality and automation over time.
    </p>,
  ],
  approach: [<p></p>],
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

      <VectorSection svg={<StakeholderDiagram />} />

      <TextSection title={'Approach'} paragraphs={project.approach} />
    </main>
  )
}

export default Project

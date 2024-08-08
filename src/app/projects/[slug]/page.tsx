import { HeroSection } from './sections'
import { projects } from '@/lib/projects'

const Project = ({ params }: { params: { slug: string } }) => {
  let currentProject
  const project1 = params.slug === 'streamlined-supply-chain-management'

  for (let i = 0; i < projects.length; i++)
    if (projects[i].slug === params.slug) currentProject = projects[i]

  return (
    <main className={`layout-page`}>
      <HeroSection
        title={currentProject?.title}
        descriptors={currentProject?.descriptors}
        bannerImage={currentProject?.bannerImage}
      />

      <section className={'layout-section p-section'}>
        <h2>Background</h2>
      </section>
      <section className={'layout-section p-section'}>
        <h2>Process</h2>
        {project1 && <img src={'/images/supply_chain-card_sorting.png'} />}
      </section>
      <section className={'layout-section p-section'}>
        <h2>Results</h2>
      </section>
      <section className={'layout-section p-section'}>
        <h2>Tools</h2>
      </section>
    </main>
  )
}

// Define the generateStaticParams function
export async function generateStaticParams() {
  // Generate static params from your projects data
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export default Project

import { MotivationSection, HeroSection, ToolsSection } from './sections'
import { projects } from '@/lib/projects'

import './styles.scss'
import ApproachSection from './sections/ApproachSection/ApproachSection'

const Project = ({ params }: { params: { slug: string } }) => {
  let currentProject
  const project1 = params.slug === 'streamlined-supply-chain-management'

  for (let i = 0; i < projects.length; i++)
    if (projects[i].slug === params.slug) currentProject = projects[i]

  return (
    <main className={`layout-page`}>
      <HeroSection
        title={currentProject?.title}
        summary={currentProject?.summary}
        descriptors={currentProject?.descriptors}
        bannerImage={currentProject?.bannerImage}
      />

      <MotivationSection content={currentProject?.motivation} />

      <ApproachSection content={currentProject?.approach} />

      <section className={'layout-section p-section'}>
        <h2>Conclusion</h2>
      </section>

      <ToolsSection tools={currentProject?.tools} />
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

import {
  ApproachSection,
  MotivationSection,
  HeroSection,
  ToolsSection,
} from './sections'

const Page = () => {
  return (
    <main className={`layout-page`}>
      <HeroSection />
    </main>
  )
}

export default Page

/* import {
  ApproachSection,
  MotivationSection,
  HeroSection,
  ToolsSection,
} from '../gamified-bug-resolution/sections'
import { projects } from '@/lib/projects'

import styles from './Project.module.scss'

const Project = ({ params }: { params: { slug: string } }) => {
  let currentProject
  const project1 = params.slug === 'streamlined-supply-chain-management'

  for (let i = 0; i < projects.length; i++)
    if (projects[i].slug === params.slug) currentProject = projects[i]

  return (
    <main className={`layout-page ${styles.frame}`}>
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

        {currentProject?.conclusion}
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
 */

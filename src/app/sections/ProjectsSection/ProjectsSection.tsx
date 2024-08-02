import { nanoid } from 'nanoid'

import { projects } from '@/lib/projects'
import { ProjectPreview } from '@/app/components'

const ProjectsSection: React.FC = () => {
  return (
    <section className={`layout-section p-section`}>
      {projects.map(project => (
        <ProjectPreview
          title={project.title}
          published={project.published}
          slug={project.slug}
          bannerImage={project.bannerImage}
          key={nanoid()}
        />
      ))}
    </section>
  )
}

export default ProjectsSection

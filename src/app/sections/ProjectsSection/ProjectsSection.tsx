import { nanoid } from 'nanoid'

import { projects } from '@/lib/projects'
import { ProjectPreview } from '@/components'

import styles from './ProjectsSection.module.scss'

const ProjectsSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      {projects.map(project => (
        <ProjectPreview
          title={project.title}
          published={project.published}
          slug={project.slug}
          bannerImage={project.bannerImage}
          key={nanoid()}
          company={project.company}
        />
      ))}
    </section>
  )
}

export default ProjectsSection

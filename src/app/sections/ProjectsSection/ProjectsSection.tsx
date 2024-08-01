import { nanoid } from 'nanoid'

import { projects } from '@/lib/projects'
import { ProjectPreview } from '@/app/components'

import styles from './ProjectsSection.module.scss'

const ProjectsSection: React.FC = () => (
  <section className={styles.layout}>
    {projects.map((project, index) => (
      <ProjectPreview
        title={project.title}
        imageSrc={project.bannerImage.path}
        imageAlt={project.bannerImage.alt}
        slug={index.toString()}
        key={nanoid()}
      />
    ))}
  </section>
)

export default ProjectsSection

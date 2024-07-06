import { projects } from '@/lib/projects'

import { ProjectCard } from '@/app/components'
import { nanoid } from 'nanoid'

import styles from './ProjectsSection.module.scss'

const ProjectsSection: React.FC = () => (
  <section className={styles.bento}>
    <h2 className={'heading-2'}>Selected work</h2>

    {projects.map(project => (
      <ProjectCard
        image={project.bannerImage}
        title={project.title}
        year={project.year}
        company={project.company}
        key={nanoid()}
      />
    ))}
  </section>
)

export default ProjectsSection

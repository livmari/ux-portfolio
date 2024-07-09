import { projects } from '@/lib/projects'

import { Card, ProjectCard } from '@/app/components'
import { nanoid } from 'nanoid'

import styles from './ProjectsSection.module.scss'

const ProjectsSection: React.FC = () => (
  <section className={'section-layout'}>
    <h2 className={'heading-2'}>Selected work</h2>

    <div className={styles.bento}>
      {projects.map(project => (
        <ProjectCard
          image={project.bannerImage}
          title={project.title}
          year={project.year}
          company={project.company}
          key={nanoid()}
        />
      ))}
    </div>

    <div className={styles.projectsGrid}>
      {projects.map(project => (
        <Card
          company={project.company}
          year={project.year}
          title={project.title}
          key={nanoid()}
        />
      ))}
    </div>
  </section>
)

export default ProjectsSection

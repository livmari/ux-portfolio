import { projects } from '@/lib/projects'

import { ProjectCard } from '@/app/components'
import { nanoid } from 'nanoid'

import styles from './ProjectsSection.module.scss'

const ProjectsSection: React.FC = () => (
  <section>
    <h2 className={'heading-2'}>Previous work</h2>

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
  </section>
)

export default ProjectsSection

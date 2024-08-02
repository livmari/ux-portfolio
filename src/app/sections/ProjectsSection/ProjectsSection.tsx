import Link from 'next/link'
import { nanoid } from 'nanoid'

import { projects } from '@/lib/projects'

const ProjectsSection: React.FC = () => {
  return (
    <section className={`layout-section p-section`}>
      {projects.map(project => (
        <Link
          href={project.published ? `projects/${project.slug}` : ''}
          key={nanoid()}
        >
          {project.title}
        </Link>
      ))}
    </section>
  )
}

export default ProjectsSection

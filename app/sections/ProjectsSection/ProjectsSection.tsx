'use client'

import { nanoid } from 'nanoid'
import { useMediaQuery } from 'react-responsive'

import { SCREEN_SM, SCREEN_MD, SCREEN_LG } from '@/app/constants/screens'
import projects from '@/app/constants/projects'
import { ProjectCard } from '@/app/components'

import styles from './ProjectsSection.module.scss'

const ProjectsSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREEN_SM - 1 })
  const isTablet = useMediaQuery({
    minWidth: SCREEN_SM,
    maxWidth: SCREEN_LG - 1,
  })
  const isLaptop = useMediaQuery({
    minWidth: SCREEN_LG,
  })

  const middle = Math.floor(projects.length / 2)
  const firstTabletCol = projects.slice(0, middle)
  const secondTabletCol = projects.slice(middle)

  const thirds = Math.floor(projects.length / 3)
  const firstLaptopCol = projects.slice(0, thirds)
  const secondLaptopCol = projects.slice(thirds, thirds * 2)
  const lastLaptopCol = projects.slice(thirds * 2)

  if (isMobile)
    return (
      <section className={styles.section}>
        {projects.map(project => (
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle}
            slug={project.slug}
            image={project.image}
            key={nanoid()}
          />
        ))}
      </section>
    )

  if (isTablet)
    return (
      <section className={styles.section}>
        <div className={styles.col}>
          {firstTabletCol.map(project => (
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              image={project.image}
              key={nanoid()}
            />
          ))}
        </div>

        <div className={styles.col}>
          {secondTabletCol.map(project => (
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              image={project.image}
              key={nanoid()}
            />
          ))}
        </div>
      </section>
    )
  else
    return (
      <section className={styles.section}>
        <div className={styles.col}>
          {firstLaptopCol.map(project => (
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              image={project.image}
              key={nanoid()}
            />
          ))}
        </div>
        <div className={styles.col}>
          {secondLaptopCol.map(project => (
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              image={project.image}
              key={nanoid()}
            />
          ))}
        </div>
        <div className={styles.col}>
          {lastLaptopCol.map(project => (
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              image={project.image}
              key={nanoid()}
            />
          ))}
        </div>
      </section>
    )
}

export default ProjectsSection

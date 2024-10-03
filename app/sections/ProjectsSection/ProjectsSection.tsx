'use client'

import { nanoid } from 'nanoid'
import { useMediaQuery } from 'react-responsive'

import { SCREEN_SM, SCREEN_MD, SCREEN_LG } from '@/app/constants/screens'
import { ProjectCard } from '@/app/components'

import styles from './ProjectsSection.module.scss'

const projects = [
  {
    image: {
      path: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '',
    },
    title: 'Eliminating knowledge silos by enabling cross team collaboration',
    subtitle:
      'Research, strategy, workshop facilitation, stakeholder management and design for Volvo Cars, 2024',
    slug: 'eliminating-knowledge-silos-by-enabling-cross-team-collaboration',
  },
  {
    image: {
      path: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '',
    },
    title:
      'Gamifying bug resolution to create community between DevOps and users',
    subtitle: 'UI design for Volvo Cars, 2024',
    slug: 'gamifying-bug-resolution-to-create-community-between-devops-and-users',
  },
  {
    image: {
      path: 'https://images.unsplash.com/photo-1643576780112-d390f5de9241?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '',
    },
    title:
      'Utilising design system management to increase organisational UX maturity',
    subtitle: 'Strategy, facilitation & UI design for Volvo Cars, 2024',
    slug: 'utilising-design-system-management-to-increase organisational-ux-maturity',
  },
  {
    image: {
      path: 'https://plus.unsplash.com/premium_photo-1683133924436-a7afbdf8cd25?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '',
    },
    title: 'Intuitive navigation & search in a jungle of information',
    subtitle: 'Research and design for Volvo Cars, 2023-2024',
    slug: 'intuitive-navigation-&-search-in-a-jungle-of-information',
  },
  {
    image: {
      path: 'https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '',
    },
    title: `Enabling informed freedom of choice in women's health`,
    subtitle: 'Research and design, passion project',
    slug: 'enabling-informed-freedom-of-choice-in-womens-health',
  },
  {
    image: {
      path: 'https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '',
    },
    title: 'Teaching financial litteracy in a "buy now - pay later" world',
    subtitle: 'Research and design, passion project',
    slug: 'teaching-financial-litteracy-in-a-buy-now-pay-later-world',
  },
]

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

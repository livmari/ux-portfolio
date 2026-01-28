'use client'

import { nanoid } from 'nanoid'
import { useMediaQuery } from 'react-responsive'

import { SCREEN_SM, SCREEN_LG } from '@/app/constants/screens'
import projects from '@/app/constants/projects'
import testimonials from '@/app/constants/testimonials'
import { CardQuote, ProjectCard } from '@/app/components'

import styles from './ProjectsSection.module.scss'

const createProjectNodes = () => {
  const projectNodes = []

  for (const project of projects) {
    projectNodes.push(
      <ProjectCard
        title={project.title}
        subtitle={project.subtitle}
        image={project.image}
        slug={project.slug}
        key={nanoid()}
      />,
    )
  }

  return projectNodes
}

const createTestimonialNodes = () => {
  const testimonialNodes = []

  for (const testimonial of testimonials) {
    testimonialNodes.push(
      <CardQuote
        quote={testimonial.quote}
        cite={testimonial.cite}
        key={nanoid()}
      />,
    )
  }

  return testimonialNodes
}

const createGridContent = () => {
  const projectNodes = createProjectNodes()
  const testimonialNodes = createTestimonialNodes()

  const gridContent = []

  let projectIndex = 0
  let testimonialIndex = 0

  // Apply rule that the first two indexes have to be projects
  for (projectIndex; projectIndex < projectNodes.length; projectIndex++) {
    if (projectIndex === 2 || projectIndex === 3 || projectIndex === 5) {
      gridContent.push(testimonialNodes[testimonialIndex])
      testimonialIndex++
      gridContent.push(projectNodes[projectIndex])
    } else {
      gridContent.push(projectNodes[projectIndex])
    }
  }

  gridContent.push(testimonialNodes[testimonialIndex])
  testimonialIndex++

  return gridContent
}

const ProjectSection = () => {
  const gridContent = createGridContent() || []

  const isMobile = useMediaQuery({ maxWidth: SCREEN_SM - 1 })
  const isTablet = useMediaQuery({
    minWidth: SCREEN_SM,
    maxWidth: SCREEN_LG - 1,
  })

  const contentMiddle = Math.floor(gridContent.length / 2 - 1)
  const contentThirds = Math.floor(gridContent.length / 3)

  const firstCol = gridContent.slice(
    0,
    isMobile ? contentMiddle : contentThirds,
  )
  const middleCol = gridContent.slice(
    isMobile ? contentMiddle : contentThirds,
    isMobile ? gridContent.length : contentThirds * 2,
  )
  const lastCol = isTablet ? gridContent.slice(contentThirds * 2) : null

  const layoutCols = [firstCol, middleCol, lastCol]

  if (isMobile)
    return (
      <section className={styles.section}>
        {gridContent.map((card: any) => card)}
      </section>
    )
  else if (isTablet)
    return (
      <section className={styles.section}>
        <div className={styles.col}>{firstCol.map((card: any) => card)}</div>
      </section>
    )
}

export default ProjectSection

/* 

const ProjectsSection: React.FC = () => {
  

  

  const gridContent = createGridContent()
  const middle = Math.floor(gridContent.length / 2)
  const firstTabletCol = gridContent.slice(0, middle)
  const secondTabletCol = gridContent.slice(middle)

  const thirds = Math.floor(gridContent.length / 3)
  const firstLaptopCol = gridContent.slice(0, thirds)
  const secondLaptopCol = gridContent.slice(thirds, thirds * 2)
  const lastLaptopCol = gridContent.slice(thirds * 2)

  if (isMobile)
    return (
      <section className={styles.section}>
        {gridContent.map((card: any) => card)}
      </section>
    )

  if (isTablet)
    return (
      <section className={styles.section}>
        <div className={styles.col}>
          {firstTabletCol.map((card: any) => card)}
        </div>

        <div className={styles.col}>
          {secondTabletCol.map((card: any) => card)}
        </div>
      </section>
    )
  else
    return (
      <section className={styles.section}>
        <div className={styles.col}>
          {firstLaptopCol.map((card: any) => card)}
        </div>
        <div className={styles.col}>
          {secondLaptopCol.map((card: any) => card)}
        </div>
        <div className={styles.col}>
          {lastLaptopCol.map((card: any) => card)}
        </div>
      </section>
    )
}

export default ProjectsSection
 */

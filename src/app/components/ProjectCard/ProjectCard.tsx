import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

import styles from './ProjectCard.module.scss'

interface ProjectCard {
  image: { path: string; alt: string }
  title: string
  year: string
  company: string
}

const ProjectCard: React.FC<ProjectCard> = ({
  image,
  title,
  year,
  company,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.floatingThing}>
        <span className={styles.floatingLabel}>Open</span>
        <ArrowRightIcon />
      </div>

      <Image
        src={image.path}
        alt={image.alt}
        height={1200}
        width={1200}
        className={styles.bannerImage}
      />

      <div className={styles.descriptorsBox}>
        <h4 className={'heading-4'}>{title}</h4>
        <p>{year + ' ∙ ' + company}</p>
      </div>
    </div>
  )
}

export default ProjectCard

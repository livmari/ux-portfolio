import Image from 'next/image'

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
      {/* <Image
        src={image.path}
        alt={image.alt}
        height={1200}
        width={1200}
        className={styles.bannerImage}
      /> */}

      <div className={styles.descriptorsBox}>
        <h4 className={'heading-4'}>{title}</h4>
        <p>{year + ' ∙ ' + company}</p>
      </div>
    </div>
  )
}

export default ProjectCard

'use client'

import { useRouter } from 'next/navigation'

import styles from './ProjectCard.module.scss'

interface Props {
  title: string
  subtitle: string
  slug: string
  image?: { path: string; alt: string }
}

const ProjectCard: React.FC<Props> = ({ title, subtitle, slug, image }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/projects/${slug}`)}
      className={styles.card}>
      <img src={image?.path} alt={image?.alt} className={styles.image} />

      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>

        <h4 className={styles.subtitle}>{subtitle}</h4>
      </div>
    </button>
  )
}

export default ProjectCard

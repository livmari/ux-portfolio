import Link from 'next/link'

import styles from './ProjectPreview.module.scss'

interface ProjectPreviewProps {
  title: string
  published: boolean
  slug: string
  company: string
  duration: string
  bannerImage: { path: string; alt: string }
  areas: string
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  published,
  slug,
  bannerImage,
  company,
  duration,
  areas,
}) => {
  return (
    <div className={styles.frame}>
      {bannerImage.path !== '' && (
        <img
          src={bannerImage.path}
          alt={bannerImage.alt}
          className={styles.image}
        />
      )}

      <div className={styles.header}>
        <p className={styles.info}>Case study</p>

        <h2 className={styles.title}>{title}</h2>

        {published ? (
          <Link href={`/projects/${slug}`} className={styles.link}>
            Read more
          </Link>
        ) : (
          <p className={styles.disabled}>Coming soon</p>
        )}
      </div>
    </div>
  )
}

export default ProjectPreview

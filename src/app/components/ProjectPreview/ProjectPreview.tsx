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
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.info}>
          {areas}
          <span className={'hidden lg:inline'}> -</span>

          <span className={'block lg:inline'}>
            {' '}
            {company}, {duration}
          </span>
        </p>
        {published ? (
          <Link href={`/projects/${slug}`} className={styles.link}>
            Read more
          </Link>
        ) : (
          <p className={styles.disabled}>Coming soon</p>
        )}
      </header>

      {bannerImage.path !== '' && (
        <img
          src={bannerImage.path}
          alt={bannerImage.alt}
          className={styles.image}
        />
      )}
    </div>
  )
  /* return (
    <div className={styles.frame}>
      <div className={styles.meta}>
        <div className={styles.projectInfo}>
          <h3>{title}</h3>
          <p>
            {areas} - <span>{company}</span>, <span>{duration}</span>
          </p>
        </div>

        {published ? (
          <Link href={`/projects/${slug}`} className={styles.link}>
            Read more
          </Link>
        ) : (
          <p className={styles.disabledText}>Coming soon</p>
        )}
      </div>

      {bannerImage.path !== '' && (
        <div className={styles.imageFrame}>
          <img
            src={bannerImage.path}
            alt={bannerImage.alt}
            className={styles.image}
          />
        </div>
      )}
    </div>
  ) */
}

export default ProjectPreview

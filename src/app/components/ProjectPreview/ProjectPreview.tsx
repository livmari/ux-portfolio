import Link from 'next/link'
import Image from 'next/image'

import styles from './ProjectPreview.module.scss'

interface ProjectPreviewProps {
  title: string
  published: boolean
  slug: string
  bannerImage: { path: string; alt: string }
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  published,
  slug,
  bannerImage,
}) => {
  return (
    <div className={styles.frame}>
      <Image
        src={bannerImage.path}
        alt={bannerImage.alt}
        height={200}
        width={200}
        className={styles.image}
      />

      <div className={styles.meta}>
        <p className={styles.text}>Case study</p>

        <h2 className={styles.title}>{title}</h2>

        {published ? (
          <Link href={`/projects/${slug}`} className={styles.text}>
            Read more
          </Link>
        ) : (
          <p className={styles.text}>Coming soon</p>
        )}
      </div>
    </div>
  )
}

export default ProjectPreview

import Link from 'next/link'
import { PhotoIcon } from '@heroicons/react/24/outline'

import { ProjectImagePlaceholder } from '@/components'

import styles from './ProjectPreview.module.scss'
import { VolvoWordmark } from '../illustrations'

interface ProjectPreviewProps {
  title: string
  published: boolean
  slug: string
  company: string
  bannerImage: { path: string; alt: string }
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  published,
  slug,
  bannerImage,
  company,
}) => {
  return (
    <div className={styles.frame}>
      {bannerImage.path !== '' ? (
        <img
          src={bannerImage.path}
          alt={bannerImage.alt}
          className={styles.image}
        />
      ) : (
        <ProjectImagePlaceholder
          className={styles.image}
          logo={company === 'Volvo Cars' ? <VolvoWordmark /> : <PhotoIcon />}
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

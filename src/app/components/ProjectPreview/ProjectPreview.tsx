import Image from 'next/image'

import styles from './ProjectPreview.module.scss'
import Link from 'next/link'

interface ProjectPreviewProps {
  imageSrc: string
  imageAlt: string
  title: string
  slug: string
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  imageSrc,
  imageAlt,
  title,
  slug,
}) => {
  return (
    <div className={styles.frame}>
      <Image
        height={1600}
        width={1600}
        src={imageSrc}
        alt={imageAlt}
        className={styles.previewImg}
      />

      <div className={styles.textContainer}>
        <p>Case study</p>

        <h3 className={'heading-2'}>{title}</h3>

        <Link href={slug}>Read more</Link>
      </div>
    </div>
  )
}

export default ProjectPreview

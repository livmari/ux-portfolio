'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

import styles from './Card.module.scss'

interface CardProps {
  slug: string
  company: string
  year: string
  title: string
}

const Card: React.FC<CardProps> = ({ slug, company, year, title }) => {
  const router = useRouter()

  return (
    <button
      className={styles.frame}
      onClick={() => router.push(`/projects/${slug}`)}
    >
      <div className={styles.descriptors}>
        <small>
          {company}, {year}
        </small>

        <h4 className={`heading-4 ${styles.heading}`}>{title}</h4>
      </div>

      <div className={styles.previewFrame}>
        <Image
          src={
            'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          height={400}
          width={400}
          alt={'Design preview 👀'}
          className={styles.preview}
        />

        <Image
          src={
            'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0'
          }
          height={400}
          width={400}
          alt={'Design preview 👀'}
          className={styles.preview}
        />

        <Image
          src={
            'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          height={400}
          width={400}
          alt={'Design preview 👀'}
          className={styles.preview}
        />
      </div>
    </button>
  )
}

export default Card

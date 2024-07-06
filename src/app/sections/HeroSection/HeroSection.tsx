import { nanoid } from 'nanoid'
import Image from 'next/image'

import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  const textSnippet1 = [`Hi,`, `I'm`, `Liv Mari`]
  const textSnippet2 = [`I`, `design`, `bespoke`, `digital`, `experiences`]
  const textSnippet3 = [`that`, `bring`, `joy`]
  const textSnippet4 = [`and`, `empower`, `users`]

  return (
    <section>
      <div className={styles.heroTextLayout}>
        <h1 className={`heading-1 ${styles.heroTextRow}`}>
          {textSnippet1.map(word => (
            <span key={nanoid()}>{word}</span>
          ))}

          <Image
            height={56}
            width={160}
            src={'/images/me.jpg'}
            alt={''}
            className={`${styles.heroTextImage} w-28 sm:w-40 ml-1`}
          />
        </h1>

        <h1 className={`heading-1 ${styles.heroTextRow}`}>
          <Image
            height={56}
            width={120}
            src={
              'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0'
            }
            alt={''}
            className={`${styles.heroTextImage} w-24 sm:w-32 mr-1`}
          />

          {textSnippet2.map(word => (
            <span key={nanoid()}>{word}</span>
          ))}
        </h1>

        <h1 className={`heading-1 ${styles.heroTextRow}`}>
          {textSnippet3.map(word => (
            <span key={nanoid()}>{word}</span>
          ))}

          <Image
            height={56}
            width={100}
            src={
              'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={''}
            className={`${styles.heroTextImage} w-20 sm:w-28 mx-1`}
          />

          {textSnippet4.map(word => (
            <span key={nanoid()}>{word}</span>
          ))}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection

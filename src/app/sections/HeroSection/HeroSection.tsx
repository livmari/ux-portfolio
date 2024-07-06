import { nanoid } from 'nanoid'
import Image from 'next/image'

import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={`${styles.layout} heading-1`}>
      <div>
        <h1>Hi, I'm Liv Mari</h1>

        <Image height={56} width={160} src={'/images/me.jpg'} alt={''} />
      </div>

      <div>
        <div>
          <Image
            height={56}
            width={120}
            src={
              'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0'
            }
            alt={''}
          />

          <h1>I design bespoke</h1>
        </div>

        <h1>digital experiences</h1>
      </div>

      <div>
        <div>
          <h1>that bring joy</h1>

          <Image
            height={56}
            width={100}
            src={
              'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={''}
          />
        </div>

        <h1>and empower users</h1>
      </div>
    </section>
  )
}

export default HeroSection

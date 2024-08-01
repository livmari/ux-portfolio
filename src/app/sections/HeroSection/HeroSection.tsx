import Image from 'next/image'

import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.layout}>
      <div className={styles.helloRow}>
        <h1 className={`heading-1 ${styles.text}`}>Hi, I'm Liv Mari</h1>

        <Image
          height={56}
          width={160}
          src={'/images/me.jpg'}
          alt={''}
          className={styles.image}
        />
      </div>

      <div className={styles.designRow}>
        <div className={styles.nestedRow}>
          <Image
            height={56}
            width={120}
            src={
              'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0'
            }
            alt={''}
            className={styles.image}
          />

          <h1 className={`heading-1 ${styles.text}`}>
            I design <span className={styles.extraWord}>thoughtful</span>
          </h1>
        </div>

        <h1 className={`heading-1`}>digital experiences</h1>
      </div>

      <div className={styles.joyRow}>
        <div className={styles.nestedRow}>
          <h1 className={`heading-1 ${styles.text}`}>that spark joy</h1>

          <Image
            height={56}
            width={100}
            src={
              'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={''}
            className={styles.image}
          />
        </div>

        <h1 className={`heading-1 ${styles.text}`}>and empower users</h1>
      </div>

      <p className={'text-xl md:text-2xl lg:text-xl text-muted mt-4 italic'}>
        Currently: Senior UX designer at Volvo Cars
      </p>
    </section>
  )
}

export default HeroSection

/* <section className={`${styles.layout} heading-1`}>
      <div className={styles.firstRow}>
        <h1 className={`heading-1 ${styles.text}`}>Hi, I'm Liv Mari</h1>

        <Image height={56} width={160} src={'/images/me.jpg'} alt={''} />
      </div>

      <div className={styles.secondRow}>
        <div>
          <Image
            height={56}
            width={120}
            src={
              'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0'
            }
            alt={''}
          />

          <h1 className={`heading-1 ${styles.text}`}>I design thoughtful</h1>
        </div>

        <h1 className={`heading-1 ${styles.text}`}>digital experiences</h1>
      </div>

      <div className={styles.thirdRow}>
        <div>
          <h1 className={`heading-1 ${styles.text}`}>that spark joy</h1>

          <Image
            height={56}
            width={100}
            src={
              'https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={''}
          />
        </div>

        <h1 className={`heading-1 ${styles.text}`}>and empower users</h1>
      </div>
    </section> */

import { Badge } from '@/components'

import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h1 className={styles.heading}>
        I'm Liv Mari, a <span className={styles.emphasis}>human-centred</span>{' '}
        product designer
      </h1>

      <Badge text={'Open to new opportunities - currently at Volvo Cars'} />
    </section>
  )
}

export default HeroSection

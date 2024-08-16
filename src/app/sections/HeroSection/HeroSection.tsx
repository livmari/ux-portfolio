import styles from './HeroSection.module.scss'
import { PulseBall } from '@/app/components/animations'

const HeroSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h1 className={styles.heading}>
        I'm Liv Mari, a <span className={styles.emphasis}>human-centred</span>{' '}
        product designer
      </h1>

      <footer className={styles.footer}>
        <PulseBall />

        <p>Open to new opportunities </p>

        <p className={'hidden sm:inline'}>- currently at Volvo Cars</p>
      </footer>
    </section>
  )
}

export default HeroSection

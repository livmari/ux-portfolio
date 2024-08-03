import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <div>
        <h1>Hi, I'm Liv Mari</h1>
        <h1>I design thoughtful digital experiences</h1>
        <h1>that spark joy and empower users</h1>
      </div>

      <p className={styles.currentlyText}>
        Currently: Senior UX designer at Volvo Cars
      </p>
    </section>
  )
}

export default HeroSection

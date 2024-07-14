import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section>
      <h1 className={`heading-1`}>
        Hi, I'm Liv Mari
        <span className={styles.responsiveExclamation}>!</span>{' '}
        <br className={styles.responsiveLineBreak} /> I design thoughtful
        digital experiences that spark joy and{' '}
        <span className={styles.empower}>empower</span> users
      </h1>
    </section>
  )
}

export default HeroSection

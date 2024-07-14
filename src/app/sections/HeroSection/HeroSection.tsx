import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section>
      <h1 className={`heading-1`}>
        Hi, I'm Liv Mari
        <span className={styles.responsiveExclamation}>!</span>{' '}
        <br className={styles.responsiveLineBreak} /> I design{' '}
        <span className={styles.makeItPop}>thoughtful</span> digital experiences
        that spark <span className={styles.makeItPop}>joy</span> and{' '}
        <span className={styles.makeItPop}>empower</span> users
      </h1>
    </section>
  )
}

export default HeroSection

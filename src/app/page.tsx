import styles from '@/styles/Home.module.scss'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from './sections'

const Home = () => {
  return (
    <main className={styles.homeLayout}>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default Home

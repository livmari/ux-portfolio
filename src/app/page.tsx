import styles from '@/styles/Home.module.scss'
import { HeroSection } from './sections'

const Home = () => {
  return (
    <main className={styles.homeLayout}>
      <HeroSection />
    </main>
  )
}

export default Home

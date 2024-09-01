import styles from './Page.module.scss'
import {
  ApproachSection,
  ConclusionSection,
  HeroSection,
  MotivationSection,
  ToolsSection,
} from './sections'

const Page = () => {
  return (
    <main className={`layout-page  ${styles.frame}`}>
      <HeroSection />

      <MotivationSection />

      <ApproachSection />

      <ConclusionSection />

      <ToolsSection />
    </main>
  )
}

export default Page

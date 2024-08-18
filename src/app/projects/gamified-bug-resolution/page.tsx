import {
  ApproachSection,
  MotivationSection,
  HeroSection,
  ToolsSection,
  ConclusionSection,
} from './sections'

import styles from './Page.module.scss'

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

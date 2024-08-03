import { aboutMeList } from '@/lib/meta'
import { Accordion } from '@/components'

import styles from './AboutSection.module.scss'

const AboutSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h3>About me</h3>

      <Accordion sections={aboutMeList} />
    </section>
  )
}

export default AboutSection

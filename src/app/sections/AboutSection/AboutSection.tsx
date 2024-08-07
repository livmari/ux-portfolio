import { aboutMeList } from '@/lib/about'
import { Accordion } from '@/components'

import styles from './AboutSection.module.scss'

const AboutSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <Accordion sections={aboutMeList} />
    </section>
  )
}

export default AboutSection

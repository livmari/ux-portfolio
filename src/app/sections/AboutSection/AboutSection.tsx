import { aboutMeList } from '@/lib/meta'
import { Accordion } from '@/components'

const AboutSection: React.FC = () => {
  return (
    <section className={`layout-section p-section`}>
      <h3>About me</h3>

      <Accordion sections={aboutMeList} />
    </section>
  )
}

export default AboutSection

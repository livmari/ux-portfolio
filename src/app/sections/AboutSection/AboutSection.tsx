import { Accordion } from '@/app/components'
import { aboutAccordionData } from '@/lib/about'

const AboutSection: React.FC = () => {
  return (
    <section>
      <h2 className={'heading-2'}>About me</h2>

      <Accordion sections={aboutAccordionData} />
    </section>
  )
}

export default AboutSection

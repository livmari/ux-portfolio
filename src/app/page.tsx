import { Divider } from './components'
import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  TestimonialsSection,
} from './sections'

import { TextCircle } from '@/components/animations'

const Home = () => {
  return (
    <main className={`layout-page`}>
      <HeroSection />

      <Divider text={'Recent projects'} />

      <ProjectsSection />

      <Divider text={'About me'} />

      <AboutSection />

      <Divider text={'Kind words from colleagues'} />

      <TestimonialsSection />

      <section className={'layout-section p-section grid justify-items-center'}>
        <TextCircle />
      </section>
    </main>
  )
}

export default Home

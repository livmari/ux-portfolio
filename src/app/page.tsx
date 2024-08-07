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

      <Divider />

      <ProjectsSection />

      <Divider />

      <AboutSection />

      <TestimonialsSection />

      <section className={'layout-section p-section grid justify-items-center'}>
        <TextCircle />
      </section>
    </main>
  )
}

export default Home

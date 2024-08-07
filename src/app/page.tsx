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

      <TextCircle />
    </main>
  )
}

export default Home

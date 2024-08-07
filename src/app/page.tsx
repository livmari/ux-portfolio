import { Divider } from './components'
import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  TestimonialsSection,
} from './sections'

const Home = () => {
  return (
    <main className={`layout-page`}>
      <HeroSection />

      <Divider />

      <ProjectsSection />

      <AboutSection />

      <TestimonialsSection />
    </main>
  )
}

export default Home

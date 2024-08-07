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

      <Divider />

      <AboutSection />

      <TestimonialsSection />
    </main>
  )
}

export default Home

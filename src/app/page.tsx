import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  TestimonialsSection,
} from './sections'

const Home = () => {
  return (
    <main className={`layout-page my-32`}>
      <HeroSection />

      <ProjectsSection />

      <AboutSection />

      <TestimonialsSection />
    </main>
  )
}

export default Home

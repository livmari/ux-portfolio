import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  TestimonialsSection,
} from './sections'

const Home = () => {
  return (
    <main className={`layout-page mt-32 mb-40`}>
      <HeroSection />

      <ProjectsSection />

      <AboutSection />

      <TestimonialsSection />
    </main>
  )
}

export default Home

import { AboutSection, HeroSection, ProjectsSection } from './sections'

const Home = () => {
  return (
    <main className={`layout-page my-32`}>
      <HeroSection />

      <ProjectsSection />

      <AboutSection />
    </main>
  )
}

export default Home

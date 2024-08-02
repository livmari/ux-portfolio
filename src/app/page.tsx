import { AboutSection, HeroSection, ProjectsSection } from './sections'

const Home = () => {
  return (
    <main className={`layout-page`}>
      <HeroSection />

      <ProjectsSection />

      <AboutSection />
    </main>
  )
}

export default Home

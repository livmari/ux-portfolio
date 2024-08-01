import { AboutSection, HeroSection, ProjectsSection } from './sections'

const Home = () => {
  return (
    <main className={'page-layout page-py-lg'}>
      <HeroSection />

      <ProjectsSection />

      <AboutSection />
    </main>
  )
}

export default Home

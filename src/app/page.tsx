import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from './sections'

const Home = () => {
  return (
    <main className={'page-layout'}>
      <HeroSection />

      <ProjectsSection />

      <AboutSection />

      <ContactSection />
    </main>
  )
}

export default Home

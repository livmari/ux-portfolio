import { AboutSection, ContactSection, ProjectsSection } from './sections'

const Home = () => {
  return (
    <main className={'page-sections-layout'}>
      <section>
        <h1 className={`heading-1`}>
          Hi, I'm Liv Mari
          <br />
          I design bespoke digital experiences
          <br />
          that spark joy and empower users
        </h1>
      </section>

      <ProjectsSection />

      <AboutSection />

      <ContactSection />
    </main>
  )
}

export default Home

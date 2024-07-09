import { AboutSection, ContactSection, ProjectsSection } from './sections'

const Home = () => {
  return (
    <main className={'page-layout'}>
      <section>
        <h1 className={`heading-1`}>
          Hi, I'm Liv Mari! <br className={'sm:hidden md:inline'} /> I design{' '}
          <span className={'text-primary-500'}>thoughtful</span> digital
          experiences that spark <span className={'text-primary-500'}>joy</span>{' '}
          and <span className={'text-primary-500'}>empower</span> users
        </h1>
      </section>

      <ProjectsSection />

      <AboutSection />

      <ContactSection />
    </main>
  )
}

export default Home

const HeroSection: React.FC = () => {
  return (
    <section>
      <h1 className={`heading-1`}>
        Hi, I'm Liv Mari
        <span className={'hidden sm:inline md:hidden'}>!</span>{' '}
        <br className={'sm:hidden md:inline'} /> I design{' '}
        <span className={'text-primary-500'}>thoughtful</span> digital
        experiences that spark <span className={'text-primary-500'}>joy</span>{' '}
        and <span className={'text-primary-500'}>empower</span> users
      </h1>
    </section>
  )
}

export default HeroSection

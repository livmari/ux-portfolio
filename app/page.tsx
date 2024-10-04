import { HeartIcon } from '@heroicons/react/24/solid'

import { HeroSection, ProjectsSection } from './sections'

const Home = () => {
  return (
    <main className={'mt-20 grid gap-20 sm:mt-32 sm:gap-32'}>
      <HeroSection />

      <ProjectsSection />

      <p className={'mb-10 w-full text-center italic text-gray-500'}>
        Thank you for visiting{' '}
        <HeartIcon className={'inline h-4 w-4 fill-playful-pink'} />
      </p>
    </main>
  )
}

export default Home

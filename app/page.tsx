import { HeroSection } from './sections'

const Home = () => {
  return (
    <main className={'mt-20 grid gap-20 sm:mt-32 sm:gap-32'}>
      <HeroSection />

      <p className={'mb-10 w-full text-center italic text-gray-500'}>
        Thank you for visiting!
      </p>
    </main>
  )
}

export default Home

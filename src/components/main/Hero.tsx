import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col min-h-screen w-full bg-neutral-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-neutral-800/70 z-10" />
      <HeroContent />
    </section>
  )
}

export default Hero

import ContactUs from '@/components/main/ContactUs'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import ResumeSection from '@/components/main/Resume'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen relative z-10">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <ResumeSection />
        <Timeline />
        <Projects />
        <ContactUs />
      </div>
    </div>
  )
}

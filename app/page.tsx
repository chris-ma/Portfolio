import HeroSection from '@/components/hero/HeroSection'
import WorkSection from '@/components/work/WorkSection'
import AboutSection from '@/components/about/AboutSection'
import ExpertiseSection from '@/components/expertise/ExpertiseSection'
import ProcessSection from '@/components/process/ProcessSection'
import ContactSection from '@/components/contact/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ExpertiseSection />
      <ProcessSection />
      <ContactSection />
    </main>
  )
}

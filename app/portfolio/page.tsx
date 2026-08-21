import HeroSection from '@/components/hero/HeroSection'
import WorkSection from '@/components/work/WorkSection'
import AboutSection from '@/components/about/AboutSection'
import ExpertiseSection from '@/components/expertise/ExpertiseSection'
import ProcessSection from '@/components/process/ProcessSection'
import ArticlesSection from '@/components/articles/ArticlesSection'
import ContactSection from '@/components/contact/ContactSection'

export default function Portfolio() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ExpertiseSection />
      <ProcessSection />
      <ArticlesSection />
      <ContactSection />
    </main>
  )
}

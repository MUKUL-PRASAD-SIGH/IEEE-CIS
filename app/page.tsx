import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Team from '@/components/Team'
import StudentChapters from '@/components/StudentChapters'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <StudentChapters />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

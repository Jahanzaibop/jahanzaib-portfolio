import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './components/sections/About.jsx'
import Contact from './components/sections/Contact.jsx'
import Experience from './components/sections/Experience.jsx'
import Hero from './components/sections/Hero.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import CodeCursorTrail from './components/CodeCursorTrail.jsx'

function App() {
  return (
    <div className="site-shell relative isolate min-h-screen overflow-x-clip bg-[#060914]">
      <div className="site-atmosphere pointer-events-none absolute inset-x-0 top-0 z-0 h-[760px]" aria-hidden="true" />
      <a className="fixed left-2.5 top-2.5 z-[100] -translate-y-[150%] bg-accent-bright px-4 py-3 text-space focus:translate-y-0" href="#main">Skip to content</a>
      <Header />
      <main className="relative z-10" id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <CodeCursorTrail />
    </div>
  )
}

export default App

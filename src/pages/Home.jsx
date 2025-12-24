import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Education from '../components/Education.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'

import Contact from '../components/Contact.jsx'


const Home = () => {
  return (
    <div>
    <Hero />
      <About />
      <Education />
      
      <Skills />
     <Projects />
     
     <Contact />
    </div>
  )
}

export default Home

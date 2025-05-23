import { useState } from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landingpage from './components/Landingpage'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Tasks from './components/Tasks'
import BackToTop from './components/BackToTop';

function App() {
  

  return (
    <>
  <Header />
    <Landingpage />
    <About />
    {/* <Resume /> */}
    <Skills />
    <Tasks />
    <Contact />
  <Footer />
  <BackToTop />

    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ResumeContainer from './components/ResumeContainer'
import ClientResponse from './components/ClientResponse'
import PopularClientsContainer from './components/PopularClientsContainer'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='pb-5'>
        <Navbar />
        <div className='mt-16 sm:mt-20 lg:mt-[70px]'>
          <Hero />
        </div>
        <div className='mt-20 sm:mt-24 lg:mt-[160px]'>
          <Clients />
        </div>
        <div className='mt-16 sm:mt-20 lg:mt-[100px]'>
          <Skills />
        </div>
        <div className='mt-16 sm:mt-20 lg:mt-[100px] px-2 sm:px-4 lg:px-[10px] flex flex-col justify-center items-center gap-12 sm:gap-16 lg:gap-[90px]'>
          <Projects />
        </div>
        <div className='mt-20 sm:mt-24 lg:mt-[160px]'>
          <ResumeContainer />
        </div>
        <div className='mt-20 sm:mt-24 lg:mt-[160px]'>
          <ClientResponse />
        </div>
        <div className='mt-20 sm:mt-24 lg:mt-[160px]'>
          <PopularClientsContainer />
        </div>
        <div className='mt-20 sm:mt-24 lg:mt-[160px]'>
          <ContactUs />
        </div>
        <div className='mt-16 sm:mt-20 lg:mt-[150px]'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
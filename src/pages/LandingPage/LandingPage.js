import React from 'react'

import { Landing, About, Speakers, Panelists, Contact, Schedule } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landingPage">
      {/* NAVBAR */}
      <Landing />
      <About />
      <Speakers />
      <Panelists />
      <Schedule />
      {/* <Sponsors /> */}
      {/* <Startup /> */}
      <Contact />
      {/* FOOTER */}
    </div>
  )
}

export default LandingPage
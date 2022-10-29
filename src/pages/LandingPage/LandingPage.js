import React from 'react'

import { Landing, About, Speakers, Panelists, Contact, Schedule } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landingPage">
      <Landing />
      <About />
      <Speakers />
      <Panelists />
      <Schedule />
      {/* <Sponsors /> */}
      {/* <Startup /> */}
      <Contact />
    </div>
  )
}

export default LandingPage
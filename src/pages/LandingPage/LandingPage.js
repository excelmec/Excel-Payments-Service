import React from 'react'

import { Landing, About, Speakers, Panelists, Sponsors, Contact, Schedule, Startup } from '../../components'

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
      <Sponsors />
      <Startup />
      <Contact />
      {/* FOOTER */}
    </div>
  )
}

export default LandingPage
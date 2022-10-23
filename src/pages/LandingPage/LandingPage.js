import React from 'react'

import { Landing, About, Speakers, Panelists, Sponsors, Contact, Schedule } from '../../components'

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
      <Contact />
      {/* FOOTER */}
    </div>
  )
}

export default LandingPage
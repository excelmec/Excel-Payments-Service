import React from 'react'

import { Landing, About, Speakers, Sponsors, Contact, Schedule } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landingPage">
      {/* NAVBAR */}
      <Landing />
      {/* <About /> */}
      <Speakers />
      <Schedule />
      <Sponsors />
      <Contact />
      {/* FOOTER */}
    </div>
  )
}

export default LandingPage
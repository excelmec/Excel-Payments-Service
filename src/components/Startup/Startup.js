import React from 'react'

import './Startup.css'

import { startupData } from '../../data/startupData'

function Startup() {
  return (
    <div className='sponsors' id="sponsors">
      <div className="sponsors_container">
        <h1 className="section__title" data-aos="fade-up">Start-ups</h1>

        <div className="sponsors_section">
          {startupData.map((sponsor) => (
            <a href={sponsor.url} key={sponsor.id} className="sponsor_details startup_deets" data-aos="fade-up">
              <img src={sponsor.logo} alt="" />
              <h2>{sponsor.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Startup
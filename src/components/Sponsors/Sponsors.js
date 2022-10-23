import React from 'react'

import './Sponsors.css'

import { sponsorsData } from '../../data/sponsorsData'

function Sponsors() {
  return (
    <div className='sponsors' id="sponsors">
      <div className="sponsors_container">
        <h1 className="section__title" data-aos="fade-up">Sponsors</h1>

        <div className="sponsors_section">
          {sponsorsData.map((sponsor) => (
            <a href={sponsor.url} key={sponsor.id} className="sponsor_details" data-aos="fade-up">
              <img src={sponsor.logo} alt="" />
              <h2>{sponsor.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
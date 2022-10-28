import React from 'react'

import '../pages.css'

function AboutUsPage() {
  return (
    <div className='about_us'>
      <div className='page_header'>
        <h1>About Us</h1>
      </div>
      <div className='privacy_content'>
        <p className='content_paras'>Excel is the annual, national-level, techno-managerial symposium hosted by Govt. Model Engineering College. There have been 22 successful editions of the tech-fest since its launch in 2001.</p>
        <p className='content_paras'>Excel fosters the engineering and creative spirit by motivating people and bringing them together through interesting events. Participants are encouraged to test their technological prowess through events like Robowars and Hackathons.</p>
        <p className='content_paras'>With approximately 60 unique events, including contests, workshops, exhibitions, presentations, conferences, and seminars, covering all fields, Excel helps solidify the knowledge of participants and provides students with a plethora of opportunities to develop into well-rounded engineers and contribute to society.</p>
      </div>
    </div>
  )
}

export default AboutUsPage
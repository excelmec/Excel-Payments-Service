import React from "react"

import "./Speakers.css"

import { speakersData } from '../../data/speakersData'
import SpeakerCard from "./SpeakerCard"

function Speakers() {

  return (
    <div className="speakers" id="speakers">
      <div className="speakers_container">
        <h1 className="section__title">Our Speakers</h1>

        <div className="speakers_section">
          {speakersData.map((speaker) => (
            <SpeakerCard 
              key={speaker.id}
              id={speaker.id}
              name={speaker.name}
              image={speaker.image}
              linkedin={speaker.linkedin}
              designation={speaker.designation}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Speakers

import React from "react"

import "./Panelists.css"

import { panelistsData } from '../../data/panelistsData'
import PanelistsCard from "./PanelistsCard"

function Panelists() {

  return (
    <div className="panelists" id="panelists">
      <div className="panelists_container">
        <h1 className="section__title">Our Panelists</h1>

        <div className="panelists_section">
          {panelistsData.map((speaker) => (
            <PanelistsCard 
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

export default Panelists

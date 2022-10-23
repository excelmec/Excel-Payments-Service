import React from "react"
import { FiMapPin, FiCalendar } from "react-icons/fi";

import "./About.css"

function About() {
  return (
    <div className="about">
      <div className="about__header">
        <div className="hero_card" data-aos="fade-up">
          <FiMapPin className="hero_card_icon"/>
          <h5>Model Engineering College, Thrikkakara</h5>
        </div>
        <div className="hero_card" data-aos="fade-up">
          <FiCalendar className="hero_card_icon"/>
          <h5>9 November, 2022</h5>
        </div>
      </div>
      <div className="about__container"  id="about">
        <h1 className="section__title" data-aos="fade-up">About FinNext</h1>
        <div className="about__section">
          <p data-aos="fade-up">
            The FinTech conference, conducted as a part of Excel 2022, aims to educate students on matters of financial literacy and inform them of the latest developments in the world of Fintech.
            Fin<span className="yellow">Next</span> aims to bring together professionals in the world of finance and technology to foster connections and build networks to make better impacts.
          </p>
          <p data-aos="fade-up">
            The conference is the perfect platform for investors, founders, executives, academics, and startups to have a go at sharing their valuable insights, gained through decades of experience in the industry.
          </p>
          <p data-aos="fade-up">
            Fin<span className="yellow">Next</span> also brings to the participants expert speakers, invigorating panel discussions, and workshops to enhance their skill set, to get them financially literate and ready to master matters of personal finance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

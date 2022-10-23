import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

function SpeakerCard({ name, image, designation, linkedin }) {
  return (
    <div className='speakerCard'>
      <div className='speakerCard__photo'>
        <div className='speakerCard__overlay' />
        <img src={image} alt="" className='scp__img'/>
        <div className='speakerCard__content'>
          <a href={linkedin} target="_blank" rel="noreferrer" className='speaker_icon_div'>
            <FaLinkedinIn className='speaker_icon'/>
          </a>  
        </div>
      </div>
      <h2>{name}</h2>
      <p>{designation}</p>
    </div>
  )
}

export default SpeakerCard
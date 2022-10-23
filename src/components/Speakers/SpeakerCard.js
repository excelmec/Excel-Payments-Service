import React from 'react'

function SpeakerCard({ name, image, designation, linkedin }) {
  return (
    <div className='speakerCard'>
      <div className='speakerCard__photo'>
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
      <p>{designation}</p>
    </div>
  )
}

export default SpeakerCard
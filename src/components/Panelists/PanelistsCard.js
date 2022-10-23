import React from 'react'
// import { FaLinkedinIn } from 'react-icons/fa'

function PanelistsCard({ name, image, designation, linkedin, id }) {
  return (
    <div className='panelistsCard' style={{ flexDirection: id%2 !== 0 ? 'row' : 'row-reverse'}}>
      <div className='panelistsCard__photo'>
        <img src={image} alt="" className='plp__img'/>
      </div>
      <div className='panel__content' style={{ transform: id%2 !== 0 ? 'translateX(-40px)' : 'translateX(40px)'}}>
        <h2>{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  )
}

export default PanelistsCard
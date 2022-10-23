import React from 'react'
// import { FaLinkedinIn } from 'react-icons/fa'

function PanelistsCard({ name, image, designation, linkedin, id }) {
  return (
    <div className={`${id%2 !== 0 ? 'panelistsCard' : 'panelistsCard row_rev'}`}>
      <div className='panelistsCard__photo'>
        <img src={image} alt="" className='plp__img'/>
      </div>
      <div className={`${id%2 !== 0 ? 'panel__content transLeft' : 'panel__content transRight'}`} >
        <h2>{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  )
}

export default PanelistsCard
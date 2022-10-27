import React from 'react'
import MoonLoader from "react-spinners/ScaleLoader";

import './Loader.css'

function Loader() {
  return (
    <div className='loader'>
      <MoonLoader color="#FFCD00" loading={true} size={150} />
    </div>
  )
}

export default Loader
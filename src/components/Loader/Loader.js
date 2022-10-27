import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

import './Loader.css'

function Loader() {
  return (
    <div className='loader'>
      <MoonLoader color="#FFCD00" loading={true} size={100} />
    </div>
  )
}

export default Loader
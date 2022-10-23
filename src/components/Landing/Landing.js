import React from "react"

import "./Landing.css"

  
function Landing() {
  return (
    
    <div className="landing">
      <div className="landing__container">      
        <div className="landing__left">
          <h2 className="landing__header">Explore Finance,<br /> Tech and Beyond</h2>
          <button className="landing__btn">Register</button>
        </div>
        <div className="landing__right">
          <h1>FinNext</h1>
        </div>
      </div>
    </div>
    
  )
}

export default Landing

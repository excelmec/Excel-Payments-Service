import React, { useState, useEffect } from "react"
import Main from '../Main';
import { useNavigate } from 'react-router-dom';
import "./Landing.css"

import "./Landing.css"

  
const calculateTimeLeft = () => {
  let difference = +new Date("2022-11-06T10:00:00+05:30") - +new Date(); // MM/DD/YYYY
  let timeLeft = {};

  if (difference > 0) {
     timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
     };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   };
  }

  return timeLeft;
};

function Landing({ showMain}) {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/main');
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
     const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
     }, 1000);

     return () => clearTimeout(timer);
  });

  return (
    
    <div className="landing" id="home">
      <div className="landing__container">      
        <div className="landing__left">
          <h2 className="landing__header" data-aos="zoom-in-right">Explore Finance,<br /> Tech and Beyond</h2>
          {!showMain && <button className='register' onClick={handleRegisterClick}>REGISTER</button>}
            {showMain && <Main />}
        </div>
        <div className="landing__right">
          <h1>FinNext</h1>
        </div>
      </div>
      <div className="landing__countdown">
            <div className='countdown'>
              <h2>{timeLeft.days}</h2>
              <h4>DAYS</h4>
            </div>
            <div className='countdown'>
              <h2>{timeLeft.hours}</h2>
              <h4>HOURS</h4>
            </div>
            <div className='countdown'>
              <h2>{timeLeft.minutes}</h2>
              <h4>MINUTES</h4>
            </div>
            <div className='countdown'>
              <h2>{timeLeft.seconds}</h2>
              <h4>SECONDS</h4>
            </div>
      </div>
    </div>
    
  )
}

export default Landing

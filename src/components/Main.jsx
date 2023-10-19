import React, { useState} from 'react';

import "./main.css";
import logo from "./logo.jpg"
import grd from "./grd.jpg"

export default function Main() {
  const [showModal, setShowModal] = useState(false);


  const handlePayNowClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="Title">   
      <img
          src={logo}
          alt=""
          className="title_img"
      />
      <div className="title_name">
          Excel
      </div>
      <div className="sub-title1">
          FinNext
      </div>
      <div className="sub-title2">
          About the Event
      </div>
      <div className="main-text">
        <p>
        The FinTech conference, conducted as a part of Excel 2022
          <br />
          aims to educate students on matters of financial literacy and inform
          <br />
          them of the latest developments in the world of Fintech.
          <br />
          FinNext aims to bring together professionals in the world
          <br />
          of finance and technology to foster connections and build networks to make better impacts.
        </p>
        <p>
        The conference is the perfect platform for investors
          <br />
          , founders, executives, academics, and startups to have
          <br />
          that will leave you questioning the limits of the human mind.
          <br />
          a go at sharing their valuable insights, gained through decades
          <br />
          of experience in the industry.
        </p>
      </div>
      <div className="sub-title3">
          Venue<br />
          Main Stage
      </div>
      <div className="sub-title4">
          Starts at<br /> 
          10
      </div>
      <img
          src={grd}
          alt=""
          className="sidebar"
      />   
      <div className="payments_box">
          <div className="p-text">
              Payment Details
          </div>
          <div className="payment-input">
              <label htmlFor="amount">Amount:</label>
              <input type="text" id="amount" name="amount" />
          </div>
          <div className="payment-input">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" />
          </div>
          <div className="payment-input">
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" />
          </div>
          <div className="payment-input">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
          </div>
          <div className="payment-input">
              <label htmlFor="organization">Organization:</label>
              <input type="text" id="organization" name="organization" />
          </div>
          <button className="pay-button" onClick={handlePayNowClick}>Pay Now</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>You have completed the payment.</p>
          </div>
        </div>
      )}
    </div>
  )
}

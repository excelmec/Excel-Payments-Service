import React, { useState, useRef } from 'react';
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
          Unmasked
      </div>
      <div className="sub-title2">
          About the Event
      </div>
      <div className="main-text">
        <p>
          Prepare to have your mind blown and your perceptions
          <br />
          challenged with Unmasked - the ultimate magic and
          <br />
          mentalism event! Excel 2022 is proud to present this year's
          <br />
          edition of Unmasked, featuring the incredible Fazil Basheer,
          <br />
          renowned for his mesmerizing Tricksmania show.
        </p>
        <p>
          Be prepared to be dazzled by Fazil's
          <br />
          extraordinary mental abilities and magic skills
          <br />
          that will leave you questioning the limits of the human mind.
          <br />
          Unmasked promises to be an unforgettable
          <br />
          experience that will challenge your perceptions and leave you in awe.
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
      <div className="contact">
          Contact us
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

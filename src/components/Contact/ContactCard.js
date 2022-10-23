import React from "react";
import { FaLinkedinIn, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactCard({ name, designation, image, email, phone, linkedIn }) {
  return (
    <div className="contactCard" data-aos="fade-up">
      <div className="contact_img">
        <img src={image} alt="contactimg" />
      </div>
      <h2>{name}</h2>
      <h3>{designation}</h3>
      <div className="contact_social">
        <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
          <FaPhoneAlt className="contact_social_icon" />
        </a>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          <FaRegEnvelope className="contact_social_icon" />
        </a>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <FaLinkedinIn className="contact_social_icon" />
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
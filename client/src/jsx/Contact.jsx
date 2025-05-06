import React from 'react';
import '../css/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faUser} /> <strong>Name:</strong> Rishabh Yadav</p>
        <p><FontAwesomeIcon icon={faPhone} /> <strong>Mobile:</strong> +91 9670099630</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> <a href="mailto:rishabhyaduwanshi2004@gmail.com">rishabhyaduwanshi2004@gmail.com</a></p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1EFw9A85vk/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=qddyw1w" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;



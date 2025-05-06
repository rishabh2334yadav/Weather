// src/components/About.js

import React from 'react';
import "../css/About.css";; // CSS file we'll create

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Weather Sense</h1>
      <p className="about-text">
        This is a full-stack project developed using the MERN Stack (MongoDB, ExpressJS, React & Node.js).<br />
        It fetches Weather API data to display weather parameters like Humidity, UV index, etc., on the frontend.<br /><br />

        The MongoDB database at the backend stores user details like Name, Email, Password, and City<br />
        to display user-specific details.<br /><br />

        ExpressJS and NodeJS at the backend connect the React frontend with the database and <br />
        handle API requests for fetching data.
      </p>
    </div>
  );
}

export default About;

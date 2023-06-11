import React from "react";
import "./About.css";
import ME from "../../assets/Me.jpeg";
import{ FaAward } from 'react-icons/fa'

function About() {
  return (
    <section id="about">
      About
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about_me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
                <FaAward  className="about_icon" />
              <h5>Experience</h5>
              <small>3 Years</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

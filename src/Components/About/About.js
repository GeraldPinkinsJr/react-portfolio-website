import React from "react";
import "./About.css";
import ME from "../../assets/Me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      About
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Years</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eos quaerat, libero tempore hic iste, voluptates reiciendis nam
            delectus voluptatibus distinctio sapiente! Magnam et, beatae ad
            voluptas officiis aliquam ipsum.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

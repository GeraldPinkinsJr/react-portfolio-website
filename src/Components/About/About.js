import React from "react";
import "./About.css";
import ME from "../../assets/Me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
    
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
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
            As an AV production supervisor turned full-stack software engineer
            with an eager interest in blockchain technology, I bring a unique
            perspective and diverse skill set to every project. With experience
            in managing all aspects of audio and video production, I have
            developed a keen eye for detail and a qualitative commitment that I
            bring to my work as a software engineer. I am constantly seeking to
            expand my knowledge in full-stack development! Additionally, my
            interest in blockchain has led me to explore its potential for
            transforming industries and creating new opportunities. Whether
            working as part of a team or independently, I am eager to take on
            new challenges and further develop my skills as a full-stack
            software engineer. I am excited about the possibilities that lie
            ahead as I continue to learn and grow in this field! If you are
            looking for a software engineer with a unique perspective and a
            strong commitment to quality, I would love to connect with you!
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

import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Netflix-and-Grill</h3>

          <a
            href="https://github.com/GeraldPinkinsJr/netflix-and-grill"
            target="_blank"
            className="btn"
          >
            Github
          </a>
          <a href=""></a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Upside Therapy</h3>

          <a
            href="https://upside.onrender.com/"
            target="_blank"
            className="btn"
          >
            Demo
          </a>
          <a href=""></a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Trail Ahead</h3>

          <a
            href="https://github.com/GeraldPinkinsJr/Trail-Ahead-Front-End"
            target="_blank"
            className="btn"
          >
            Github
          </a>
          <a href=""></a>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Gerald
      </a>

      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="About">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="Experience">Skills</a>{" "}
        </li>
        <li>
          {" "}
          <a href="Portfolio">Portfolio</a>{" "}
        </li>
        <li>
          {" "}
          <a href="Contact">Contact</a>{" "}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

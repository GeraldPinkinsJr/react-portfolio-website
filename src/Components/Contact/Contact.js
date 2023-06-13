import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FcIphone } from "react-icons/fc";



function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>geraldpinkinsjr@gmail.com</h5>
            <a href="mailto:geraldpinkinsjr@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FcIphone className="contact__option-icon" />
            <h4>Mobile</h4>
            <h5>870-209-2928</h5>
            <a href="tel:+1234567890" target="_blank">
              Text me
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Gerald Pinkins Jr"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="geraldpinkinsjr@gmail.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

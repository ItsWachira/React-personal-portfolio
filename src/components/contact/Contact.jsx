import "./contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs.sendForm(
      "service_j167udu",
      "template_d0uyvga",
      form.current,
      "rMm3guHh3CIxEP_cR"
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Full name"
            name="name"
            required
          />
          <input type="text" placeholder="Your email" name="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;

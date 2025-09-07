// src/pages/ContactUs.jsx
import React, { useState } from "react";
import styles from './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="ContactUs">
      <h1 className="ContactUs__heading">Contact Us</h1>
      <form onSubmit={handleSubmit} className="ContactUs__form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="ContactUs__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="ContactUs__input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="ContactUs__textarea"
        />
        <button type="submit" className="ContactUs__button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

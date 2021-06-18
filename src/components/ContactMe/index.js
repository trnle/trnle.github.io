import React from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

function ContactMe() {
  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        alert(result.text);
      }, (error) => {
        alert(error.text);
      });
    e.target.reset();
  }

  return (
    <div id='contact-me'>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label>Your Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default ContactMe;
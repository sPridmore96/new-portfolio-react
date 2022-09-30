import React, { useRef } from 'react';
import './ContactMe.scss';
import emailjs from '@emailjs/browser';
import myPhoto from '../../assets/images/MyPhoto.png';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_hew6y0m',
        'template_7td8wve',
        form.current,
        'NElQvYwcrbIsBekoP'
      )
      .then(
        (result) => {
          alert("Email Has been sent")
          window.location.reload()
        },
        (error) => {
          alert(error.text)
        }
      );
  };

  

  return (
    <div className="contact">
      <div className="contact__info-container">
        <img
          className="contact__my-photo"
          src={myPhoto}
          alt="of Sam Pridmore"
        />
        <h2 className="contact__header">Contact Me</h2>
        <p>Personal Number : 07904479850</p>
        <p>
          Personal Email : Spridmore96@gmail.com <br></br>
          _Nology Email : Samuel.Pridmore@nology.io
        </p>
      </div>
      <div className="contact__form-container">
        <h3 className="contact__sub-header">
          Or send me an email with this form.
        </h3>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__input-container">
            <label className="contact__label">Name</label>
            <input className="contact__input" type="text" name="user_name" />
          </div>
          <div className="contact__input-container">
            <label className="contact__label">Email</label>
            <input className="contact__input" type="email" name="user_email" />
          </div>
          <div className="contact__input-container">
            <label className="contact__label">Message</label>
            <textarea className="contact__text-area" name="message" />
          </div>
          <input className="contact__button" type="submit" value="Send" />
        </form>
      </div>
      <Link to={'/new-portfolio-react/'} className="contact__home-container">
        <button
          onClick={
            <Link
              to={'/new-portfolio-react/'}
              className="contact__home-container"
            ></Link>
          }
          className="contact__button-home"
        >
          Back to home
        </button>
        <FaHome className="contact__button-home-icon" />
      </Link>
    </div>
  );
}

export default ContactMe;

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--text-1);
    background-color: var(--bg-2);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  .btn_container{
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  button[type='submit'] {
    background-color: var(--btn-bg);
    color: var(--btn-text);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    button[type='submit'] {
      width: 100%;
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const formCleaner = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n8914cn', 'template_yypplrz', form.current, {publicKey: 'pD-7LzW_sz8FGoFnh'})
      .then(
        () => {
          // console.log('SUCCESS!');
          alert("Your Message is Sent!")
          formCleaner()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <FormStyle ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name:
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email:
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your Message:
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div className='btn_container'>
          <ReCAPTCHA
              sitekey="6LcCZ_EpAAAAAJPlZ2FFe5WsZZu36SH07K82tZbo"
              onChange={handleRecaptchaChange}
          />
          <button type="submit">Send</button>
        </div>
      </FormStyle>
    </>
  );
}

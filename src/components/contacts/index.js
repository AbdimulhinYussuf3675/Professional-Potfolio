import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { BsExclamationLg, BsPatchCheckFill } from 'react-icons/bs';
import { RiSendPlane2Fill } from 'react-icons/ri';
import AnimatedLetters from '../AnimatedText';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const interval = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [validInpt, setValidInpt] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidInpt((preValue) => ({ ...preValue, [name]: value }));
  };

  // select all the input with useRef Hook
  const emailRef = useRef(null);
  const TextAreaRef = useRef(null);

  const form = useRef(null);

  // show Message function
  const showMessage = (message, updateColor) => {
    const divContent = document.createElement('div');
    divContent.textContent = message;
    divContent.classList.add('div-content');
    divContent.style.backgroundColor = updateColor;

    setTimeout(() => {
      divContent.classList.add('hide');
      divContent.addEventListener('transitionend', () => {
        divContent.remove();
      });
      divContent.style.transform = `translateX(${'0'}%)`;
      emailRef.current.parentElement.classList.remove('error');
      TextAreaRef.current.parentElement.classList.remove('error');
      emailRef.current.parentElement.classList.remove('success');
      TextAreaRef.current.parentElement.classList.remove('success');
    }, 5000);
  };
  // Error function
  const setError = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains('success')) {
      inputRef.current.parentElement.classList.remove('success');
    } else {
      inputRef.current.parentElement.classList.add('error');
    }
  };

  // success Function
  const setSuccess = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains('error')) {
      inputRef.current.parentElement.classList.remove('error');
    } else {
      inputRef.current.parentElement.classList.add('success');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, message } = validInpt;
    // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email && !message) {
      setError(emailRef);
      setError(TextAreaRef);
      showMessage('Pls! fill in the required inputs');
    } else if (!email && message) {
      setError(emailRef);

      showMessage("Ooops! Email can't be empty");
    } else if (!email.match(pattern)) {
      setError(emailRef);
      showMessage('Ooops! Email not valid');
    } else if (!message && email.match(pattern)) {
      setError(TextAreaRef);

      showMessage('Leave a message pls!');
    } else if (email && !message) {
      setError(TextAreaRef);
      showMessage('Please enter valid inputs');
    } else if (email && message) {
      emailjs.sendForm(
        'service_jvbk5b4', 'template_zbxydka', form.current, 'XgZaqWBWHffgTBbd2',
      );
      setSuccess(emailRef);
      setSuccess(TextAreaRef);
      showMessage('Message sent successfully', 'green');

      setValidInpt({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don&apos;t hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={onSubmit}>
              <ul>
                <li className="half">
                  <input
                    autoComplete="false"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={validInpt.name}
                    onChange={handleChange}
                  />
                  <span className="switch__bg" />
                  <BsExclamationLg className="exclamation" />
                  <BsPatchCheckFill className="checkCircle" />
                </li>
                <li className="half">
                  <input
                    autoComplete="false"
                    ref={emailRef}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={validInpt.email}
                    onChange={handleChange}
                  />
                  <span className="switch__bg" />
                  <BsExclamationLg className="exclamation" />
                  <BsPatchCheckFill className="checkCircle" />
                </li>
                <li>
                  <input
                    autoComplete="false"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={validInpt.subject}
                    onChange={handleChange}
                  />
                  <span className="switch__bg" />
                  <BsExclamationLg className="exclamation" />
                  <BsPatchCheckFill className="checkCircle" />
                </li>
                <li>
                  <textarea
                    autoComplete="false"
                    ref={TextAreaRef}
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={validInpt.message}
                    onChange={handleChange}
                  />
                  <span className="switch__bg" />
                  <BsExclamationLg className="exclamation" />
                  <BsPatchCheckFill className="checkCircle" />
                </li>
                <button type="submit" className="contact-button submit-button flat-button">
                  <div>
                    <span className="text">
                      Send
                      <RiSendPlane2Fill className="message-deliver" />
                    </span>
                  </div>
                </button>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Abdimulhin Adan,
          <br />
          Kenya,
          <br />
          Nairobi 43,
          {' '}
          <br />
          Isiolo County
          {' '}
          <br />
          <br />
          <span>adamabdimulhi.001@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[0.3567696727136, 37.58755675111123]} zoom={9}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[0.3567696727136, 37.58755675111123]}>
              <Popup>
                Hi 👋 ! Here&apos;s where i live. find me here?
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};
export default Contact;

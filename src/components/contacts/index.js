import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedText';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const interval = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        },
      );
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
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
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
          <MapContainer center={[0.3567696727136, 37.58755675111123]} zoom={14}>
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

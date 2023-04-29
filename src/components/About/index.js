import { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedText';
import resume from '../../assets/images/Abdimulhin Adan.pdf';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', '&', ' ', 'S', 'k ', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            I&apos;m an ambitious Front-End Developer who&apos;s passionate about
            coding and looking for a role in the established IT company with
            the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p>
            I&apos;m from Kenya, living in Nairobi. I&apos;m a
            freelancer who loves building cool UI effects, dynamic webpages
            with amazing animations and creating intuitive, dynamic user
            experiences. I also love to reach out to new opportunities
            accross the globe that will enhance my skills and get the
            opporutinity to work with other programmers as well
          </p>
          <p>
            If I could say one of the most interesting things about me, it&apos;s
            the fact that I&apos;m always ready for any challenges that comes to
            my way. Here&apos;s my Resume below for more details.
          </p>
          <Link to={resume} target="_blank" className="flat-button">CHECK RESUME</Link>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default About;

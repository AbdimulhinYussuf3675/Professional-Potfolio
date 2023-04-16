import { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular, faCss3, faGitAlt, faJsSquare, faPython, faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedText';
import resume from '../../assets/Abdimulhin Adan.pdf';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
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
        <Link to={resume} className="flat-button">DOWNLOAD RESUME</Link>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faPython} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faVuejs} color="#5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4G2A" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

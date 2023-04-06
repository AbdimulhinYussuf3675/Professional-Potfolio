import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedText';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  const nameAttar = ['b', 'd', 'i', 'm', 'u', 'l', 'h', 'i', 'n', ','];
  const jobArray = ['F', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>

          {' '}
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _15`}>&apos;</span>
          <span className={`${letterClass} _14`}>m</span>
          {' '}
          <span className="letterName">A</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameAttar}
            idx={15}
          />
          {' '}
          {' '}
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Fullstack Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME!</Link>
      </div>
    </div>
  );
};

export default Home;

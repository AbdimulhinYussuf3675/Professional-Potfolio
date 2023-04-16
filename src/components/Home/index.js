import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedText';
import Logo from './logoAnimation/Logo';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="home-logo"
            viewBox="0 0 171 210"
          >
            <path
              className="lower-logo-color fill__color home-logo animate-logo-1"
              d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z"
            />
            <path
              d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
              fill="#797878"
              className="animate-logo-2"
            />
          </svg>
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
      <Logo />
    </div>
  );
};

export default Home;

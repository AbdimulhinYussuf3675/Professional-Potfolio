/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Fade from 'react-reveal/Fade';
import Projects from '.';
import Project from './Project';
import AnimatedLetters from '../AnimatedText';
import './projectpage.scss';

const ProjectPage = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate');
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <section className="section__projects section__padding">
      <div className="text-zone">
        <h1 aria-label="My projects" className="section__projects-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={12}
          />
        </h1>
        <div className="section__projects-description">
          <Fade bottom>
            <p className="para">
              Here are some selected and challenging personal projects that I have
              worked on so far which enabled me to level up my skills to a
              fascinating point that makes me feel confident in tackling more
              difficult challenges.
            </p>
          </Fade>
        </div>
        <div className="section__projects-wrapper">
          {Projects.map((project, index) => <Project {...project} key={index} />)}
        </div>
      </div>

    </section>
  );
};

export default ProjectPage;

import { GrGithub } from 'react-icons/gr';
import { TbWorld } from 'react-icons/tb';

import leaderboad from '../../assets/images/projects/leadbod.jpeg';
import mnet from '../../assets/images/projects/1678431582874.jpeg';
import todolist from '../../assets/images/projects/todolist.jpeg';
import space from '../../assets/images/projects/space.jpeg';
import catstone1 from '../../assets/images/projects/cp1.png';
import catstone3 from '../../assets/images/projects/cp3.png';
import bookStore from '../../assets/images/projects/bookstore.png';
import mathmajician from '../../assets/images/projects/math.jpeg';

const Projects = [

  {
    id: 5,
    name: 'Space Travellers Hub',
    desc: 's a web application using real live data from the SpaceX API. The website allows users to book rockets and join selected space missions.',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/Space_Travelers--Hub',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://adamspace.onrender.com/',
    },
    imgUrl: space,
  },
  {
    id: 2,
    name: 'Leaderboard',
    desc: 'The leaderboard website displays scores submitted by different players',
    stack: 'Javascript, CSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/Leaderboard',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://abdimulhinyussuf3675.github.io/Leaderboard/dist/',
    },
    imgUrl: leaderboad,
  },
  {
    id: 3,
    name: 'MNnet',
    desc: 'This project is a movie website with features of adding comment, tap on like to show interest and make reservations',
    stack: 'Javascript',
    imgUrl: mnet,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/Mnet_Movie',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://abdimulhinyussuf3675.github.io/Mnet_Movie/dist/',
    },
  },
  {
    id: 4,
    name: 'JS To-Do list',
    desc: 'Its a simple website that allows for doing that, and i used ES6 and Webpack!',
    stack: 'JavaScript',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/JS_To_Do_List',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://abdimulhinyussuf3675.github.io/JS_To_Do_List/dist/',
    },
    imgUrl: todolist,
  },
  {
    id: 1,
    name: 'Adam Studios',
    desc:
      'The goal here is to master all of the tools and best practices of HTML,CSS and JavaScript.',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/Module1-Capstone',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://abdimulhinyussuf3675.github.io/Module1-Capstone/',
    },
    imgUrl: catstone1,
  },
  {
    id: 6,
    name: 'Population-Count',
    desc: 'This is a web-app that allows users to have access to population data of countries across the world.',
    stack: 'React js, Redux',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/React-capstone_project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://adam-census.onrender.com/',
    },
    imgUrl: catstone3,
  },
  {
    id: 4,
    name: 'BookStore',
    desc: 'This is a website that allows users to add and remove a book, and display a the list of books added on the page',
    stack: 'React JS, Redux-toolkit',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/Bookstore',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://adam-bookshop.onrender.com/',
    },
    imgUrl: bookStore,
  },
  {
    id: 2,
    name: 'Math magicians',
    desc: 'It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AbdimulhinYussuf3675/math_magicians',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://adam-calculator.onrender.com/',
    },
    imgUrl: mathmajician,
  },
];

export default Projects;

import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faUser, faEnvelope, faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin, faGithub,
  faAngellist,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import myLogo from '../../assets/images/minelogo.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="sub-logo" src={myLogo} alt="logo" />
    </Link>
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/abdimulhin-yussuf-7b110720b"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/AbdimulhinYussuf3675"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://wellfound.com/u/abdimulhin-yussuf"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faAngellist}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/abdimulhin" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;

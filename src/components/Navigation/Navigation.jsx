import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

import { FaPhone } from 'react-icons/fa6';
import { SiMinutemailer } from "react-icons/si";
// import { MdEmail } from 'react-icons/md';

// import clsx from 'clsx';

import logo1 from '../../images/3Planet-Logo-red.svg';
// import logo2 from '../images/logo2.png';


// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const Navigation = () => {
  return (
    <header className={css.headerContainer}>
      <div className={css.boxContainer}>
        <nav className={css.navContainer}>
          <NavLink to="/"
            className={({ isActive }) =>
            isActive ? css.logoActive : css.navLogo
          }
          >
            <div className={css.logoContainer}>
              <img src={logo1} alt="Logo 1" className={css.logoImage} />
            {/* <Icon id="alcove" width="30" height="30" /> */}
          </div>
        </NavLink>
          
          <NavLink to="/projects" className={css.navProject}>
            Проекти
          </NavLink>
          <NavLink to="/websites" className={css.navWeb}>
            Партнери
          </NavLink>
          {/* <NavLink to="/board" className={css.navBoard}>
            Board
        </NavLink>         */}
      </nav>
      <address className={css.headerAddress}>
        <div className={css.tel}>
            <FaPhone size="15" className={css.logo}/>
            <a href="tel:+380972391091">+38 (097) 239-10-91</a>
          </div>

          <div className={css.email}>
            <SiMinutemailer size="20" className={css.logo}/>
            {/* <MdEmail width="30"/> */}
            <a href="mailto:example@example.com">example@example.com</a>
          </div>
        </address>
        </div>
    </header>
  );
};


export default Navigation;

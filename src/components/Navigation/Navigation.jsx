
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { SiMinutemailer } from "react-icons/si";
import logo1 from '../../images/3Planet-Logo-red2.svg';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={css.headerContainer}>
      <div className={css.boxContainer}>
        <nav className={css.navContainer}>
          <NavLink to="/" className={({ isActive }) => isActive ? css.logoActive : css.navLogo}>
            <div className={css.logoContainer}>
              <img src={logo1} alt="3Planet Logo" className={css.logoImage} />
            </div>
          </NavLink>
          <NavLink to="/projects" className={css.navLink}>Проєкти</NavLink>
          <NavLink to="/websites" className={css.navLink}>Партнери</NavLink>
        </nav>

        <address className={css.headerAddress}>
          <div className={css.contactItem}>
            <FaPhone size="15" className={css.icon} />
            <a href="tel:+380972391091">+38 (097) 239-10-91</a>
          </div>
          <div className={css.contactItem}>
            <SiMinutemailer size="20" className={css.icon} />
            <a href="mailto:example@example.com">example@example.com</a>
          </div>
        </address>
      </div>
    </header>
  );
};

export default Navigation;

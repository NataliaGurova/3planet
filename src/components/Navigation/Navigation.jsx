
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMailOpen } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

import { SiMinutemailer } from "react-icons/si";
import logo1 from '../../images/3Planet-Logo-red2.svg';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.navHeader}>
          <NavLink to="/" className={({ isActive }) => isActive ? css.logoActive : css.navLogo}>
            <div className={css.logoContainer}>
              <img src={logo1} alt="3Planet Logo" className={css.logoImage} />
            </div>
          </NavLink>
          <NavLink to="/projects" className={css.navLink}>Проєкти</NavLink>
          <NavLink to="/websites" className={css.navLink}>Партнери</NavLink>
        </nav>

        <address className={css.addressHeader}>
          <div className={css.contactItem}>
            <FaPhone size="15" className={css.icon} />
            <a href="tel:+380972391091">+38 (097) 239-10-91</a>
          </div>
          <div className={css.contactItem}>
            <IoMdMailOpen size="20" className={css.icon} />
            <a href="mailto:example@example.com">example@example.com</a>
          </div>
        </address>
      </div>
    </header>
  );
};

export default Navigation;

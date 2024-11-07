import css from './Footer.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMailOpen } from "react-icons/io";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import logo1 from '../../images/3Planet-Logo-red.svg';
import { SiMinutemailer } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.logoSection}>
          <NavLink to="/"
            className={({ isActive }) =>
            isActive ? css.logoActive : css.navLogo
          }
          >
            <div className={css.logoContainer}>
              <img src={logo1} alt="Logo 1" className={css.logoImage} />
            </div>
          </NavLink>
          <address className={css.addressFooter}>
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

        <nav className={css.navFooter}>
          <NavLink to="/projects" className={css.navLink}>Проєкти</NavLink>
          <NavLink to="/websites" className={css.navLink}>Партнери</NavLink>
        </nav>

        {/* <div className={css.navSection}> */}
          {/* <ul className={css.navList}>
            <li className={css.navItem}><a href="/projects">Проєкти</a></li>
            <li className={css.navItem}><a href="/websites">Партнери</a></li>
          </ul> */}
        {/* </div> */}

        {/* <div className={css.socialSection}>
          <h4>Follow Us</h4>
          <div className={css.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div> */}
      </div>
      <div className={css.copyright}>
        <p>© 2024 3Planet. Усі права захищені</p>
      </div>
    </footer>
  );
};

export default Footer;
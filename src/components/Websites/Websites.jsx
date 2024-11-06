import css from "./Websites.module.css"

const Websites = () => {
  return (
    <>
      
      <ul className={css.list}>

        <li className={css.listItem}>          
          <a href="https://domigr.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>Dom Igr</a>
          {/* <a href="https://domigr.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://domigr.com.ua/</a> */}
        </li>

        <li className={css.listItem}>
          <a href="https://lordofboards.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>
            Lord of Boards
            {/* <img alt="Lord of Boards — інтернет магазин настільних ігор" class="header-logo-img" width="200" height="68" src="/content/images/2/200x68l90nn0/12878274163669.webp" srcset="
                                /content/images/2/200x68l90nn0/12878274163669.webp 1x,
                                /content/images/2/200x68l50nn0/12878274163669.webp 2x
                                "></img> */}
          </a>
          {/* <a href="https://lordofboards.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://lordofboards.com.ua/</a> */}
        </li>
        
        <li className={css.listItem}>
          <a href="https://desktopgames.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>IgroMag</a>
          {/* <a href="https://desktopgames.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://desktopgames.com.ua/</a> */}
        </li>

        <li className={css.listItem}>
          <a href="https://geekach.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>Geekach</a>
          {/* <a href="https://geekach.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://geekach.com.ua/</a> */}
        </li>

          <li className={css.listItem}>          
          <a href="https://planeta-igr.com/" target="_blank" rel="noopener noreferrer" className={css.link}>Планета Ігор</a>
          {/* <a href="https://planeta-igr.com/" target="_blank" rel="noopener noreferrer" className={css.link}>https://planeta-igr.com/</a> */}
        </li>

      </ul>
    </>
  );
}

export default Websites;
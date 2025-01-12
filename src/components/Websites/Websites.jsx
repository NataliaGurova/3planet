import css from "./Websites.module.css";
import websitesData from "../../../websites.json"
import { useEffect, useState } from "react";

// const Websites = () => {
//   return (
//     <>
      
//       <ul className={css.list}>

//         <li className={css.listItem}>
//           <a href="https://domigr.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>
//             <img src="/logo/logo-DI.svg" alt="DimIgor" width="150"></img>
            
//           </a>
//           {/* <a href="https://domigr.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://domigr.com.ua/</a> */}
//         </li>

//         <li className={css.listItem}>
//           <a href="https://lordofboards.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>
//             Lord of Boards
//             {/* <img alt="Lord of Boards — інтернет магазин настільних ігор" class="header-logo-img" width="200" height="68" src="/content/images/2/200x68l90nn0/12878274163669.webp" srcset="
//                                 /content/images/2/200x68l90nn0/12878274163669.webp 1x,
//                                 /content/images/2/200x68l50nn0/12878274163669.webp 2x
//                                 "></img> */}
//           </a>
//           {/* <a href="https://lordofboards.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://lordofboards.com.ua/</a> */}
//         </li>
        
//         <li className={css.listItem}>
//           <a href="https://desktopgames.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>IgroMag</a>
//           {/* <a href="https://desktopgames.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://desktopgames.com.ua/</a> */}
//         </li>

//         <li className={css.listItem}>
//           <a href="https://geekach.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>Geekach</a>
//           {/* <a href="https://geekach.com.ua/" target="_blank" rel="noopener noreferrer" className={css.link}>https://geekach.com.ua/</a> */}
//         </li>

//           <li className={css.listItem}>
//           <a href="https://planeta-igr.com/" target="_blank" rel="noopener noreferrer" className={css.link}>Планета Ігор</a>
//           {/* <a href="https://planeta-igr.com/" target="_blank" rel="noopener noreferrer" className={css.link}>https://planeta-igr.com/</a> */}
//         </li>

//       </ul>
//     </>
//   );
// }


const Websites = () => {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    // Перемішуємо список вебсайтів
    const shuffledWebsites = [...websitesData];
    const randomIndex = Math.floor(Math.random() * shuffledWebsites.length);
    const randomWebsite = shuffledWebsites.splice(randomIndex, 1); // Вибираємо рандомний елемент
    setWebsites([...randomWebsite, ...shuffledWebsites]); // Додаємо його першим у список
  }, []);

  return (
    <>
      <ul className={css.list}>
        {websites.map(({ id, title, logo, url }) => (
          <li key={id} className={css.listItem}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={css.link}>
              <img src={logo} alt={title} className={css.listImg}/>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Websites;
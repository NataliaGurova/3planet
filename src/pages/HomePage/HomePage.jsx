import DocTitle from "../../components/DocTitle/DocTitle";
// import GamesList from "../../components/GamesList/GamesList";
import css from "./HomePage.module.css"



import { useState, useEffect } from 'react';


const images = [
  "/src/images/news-play.png",
  "/src/images/news-play2.png"
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <main>
      <DocTitle>3 Planet - рекламний опис...</DocTitle>
      <div className={css.homeContainer}>
        <img 
          src={images[currentImageIndex]} 
          alt={`Slide ${currentImageIndex + 1}`} 
          className={css.homeImage} 
        />
      </div>
    </main>
  );
};

export default HomePage;

// const HomePage = () => {
//   return (
//     <main>
//       <DocTitle>3 Planet - рекламний опис...</DocTitle>
//       <div className={css.homeContainer}>
        
//         <img src="/src/images/news-play.png" alt="" className={css.homeImage}/>
//         <img src="/src/images/news-play2.png" alt="" className={css.homeImage}/>
//         {/* <PhotoList/> */}
//       </div>
//     </main>
//   );
// };

// export default HomePage;
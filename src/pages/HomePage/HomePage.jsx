import DocTitle from "../../components/DocTitle/DocTitle";
// import GamesList from "../../components/GamesList/GamesList";
import css from "./HomePage.module.css"



import { useState, useEffect } from 'react';


const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/photo/news-play.png",
    "/photo/news-play2.png"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

   return (
    <main className={css.mainContainer}>
      <DocTitle>Третя Планета - Видавництво настільних ігор</DocTitle>
      <div className={css.homeContainer}>
        <div className={css.textContainer}>
          <h1 className={css.title}>Видавництво "Третя Планета"</h1>
          <p className={css.description}>
            Ми займаємось виданням і популяризацією захоплюючих настільних ігор для всієї родини.
            Наша місія - створювати світ розваг і відкриттів, де кожен знайде свою улюблену гру.
          </p>
        </div>
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

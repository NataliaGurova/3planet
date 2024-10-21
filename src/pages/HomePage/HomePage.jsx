import DocTitle from "../../components/DocTitle/DocTitle";
// import GamesList from "../../components/GamesList/GamesList";
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <main>
      <DocTitle>Logo сайта 3 Planet</DocTitle>
      <div className={css.homeContainer}>
        <h1>NewGame in Homepage</h1>
        {/* <PhotoList/> */}
      </div>
    </main>
  );
};

export default HomePage;
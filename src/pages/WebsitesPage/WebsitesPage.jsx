import DocTitle from "../../components/DocTitle/DocTitle";
import Websites from "../../components/Websites/Websites";
import css from "./WebsitesPage.module.css";

const WebsitesPage = () => {
  console.log("WebsitesPage");
  return (
    <main className={css.mainContainer}>
      <DocTitle>Третя Планета - Наші партнери</DocTitle>
      <div className={css.webContainer}>
        <Websites/>
      </div>
    </main>
  );
  
};

export default WebsitesPage;
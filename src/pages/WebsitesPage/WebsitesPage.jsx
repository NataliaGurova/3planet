import DocTitle from "../../components/DocTitle/DocTitle";
import Websites from "../../components/Websites/Websites";
import css from "./WebsitesPage.module.css";

const WebsitesPage = () => {
  console.log("WebsitesPage");
  return (
    <>
      <DocTitle>Третя Планета - Наші партнери</DocTitle>
      <div className={css.webContainer}>
        {/* {loading ? (
          <Loader />
        ) : (
          <> */}
        <Websites/>
          {/* </>
        )} */}
      </div>
    </>
  );
  
};

export default WebsitesPage;
import DocTitle from "../../components/DocTitle/DocTitle";
import Websites from "../../components/Websites/Websites";
import css from "./WebsitesPage.module.css";

const WebsitesPage = () => {
  console.log("WebsitesPage");
  return (
    <>
      <DocTitle>Websites</DocTitle>
      <div className={css.webContainer}>
        {/* {loading ? (
          <Loader />
        ) : (
          <> */}
        {/* <h2>Наші партнери</h2> */}
        <Websites/>
          {/* </>
        )} */}
      </div>
    </>
  );
  
};

export default WebsitesPage;
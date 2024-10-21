import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
// import NewsPage from "./pages/ProjectsDetailsPage/ProjectsDetailsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
// import BoardPage from "./pages/BoardPage/BoardPage";
import WebsitesPage from "./pages/WebsitesPage/WebsitesPage";
import ProjectsDetailsPage from "./pages/ProjectsDetailsPage/ProjectsDetailsPage";

const App = () => {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/projects/:projectsId' element={<ProjectsDetailsPage />} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;


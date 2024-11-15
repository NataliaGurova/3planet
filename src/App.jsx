import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { lazy } from "react";
import Description from "./components/Description/Description";
import Rules from "./components/Rules/Rules";
// import HomePage from "./pages/HomePage/HomePage";
// import ProjectsDetailsPage from "./pages/ProjectsDetailsPage/ProjectsDetailsPage";
// import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
// import WebsitesPage from "./pages/WebsitesPage/WebsitesPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ProjectsDetailsPage = lazy(() => import("./pages/ProjectsDetailsPage/ProjectsDetailsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const WebsitesPage = lazy(() => import("./pages/WebsitesPage/WebsitesPage"));

const App = () => {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/projects/:projectId' element={<ProjectsDetailsPage />} >
            {/* <Route path='rules' element={<Rules />} /> */}
            {/* <Route path='reviews' element={<Reviews />} /> */}
          </Route>
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;


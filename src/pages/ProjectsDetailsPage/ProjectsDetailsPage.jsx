import { useLocation, useParams } from "react-router";
import DocTitle from "../../components/DocTitle/DocTitle";
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ProjectsDetailsPage = () => {

  const { projectsId } = useParams();
  const location = useLocation()

  // const backLinkRef = useRef(location.state?.from || '/');
  const backLinkRef = useRef(location.state ?? "/");

  console.log(location.state);
  console.log(backLinkRef);
  
  return (
    <>
      <DocTitle>ProjectsDetailsPage</DocTitle>
      <div>
        <Link to={backLinkRef.current}>Назад до Проектів</Link>
        {/* {loading ? (
          <Loader />
        ) : (
          <> */}
        {/* <h1>ProjectsDetailsPage {projectsId}</h1> */}
        <ProjectDescription projectsId={projectsId} />
          {/* </>
        )} */}
      
      </div>
    </>
  );
  
};

export default ProjectsDetailsPage;
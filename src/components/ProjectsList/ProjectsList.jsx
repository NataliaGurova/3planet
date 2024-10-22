
import { NavLink, useLocation } from "react-router-dom";
import css from "./ProjectsList.module.css"
import { Fragment } from "react";



const ProjectsList = ({projects}) => {

  const location = useLocation();

  return (
    <div className={css.projectsSection}>
      <div className={css.container}>
        <ul className={css.listProjects}>
          {projects.map((project) => (
              <li key={project.id} className={css.itemProjects}>
                <NavLink to={`/projects/${project.id}`} state={location}>
                  {/* <div className={css.imgProjects}> */}
                    <img src={project.imageSmall} alt={project.name} className={css.imgProjects}/>
                  {/* </div> */}
                  {/* <div className={css.cardProjects}> */}
                  <h4 className={css.textProjects}>
                    {project.name.split('.').map((part, index) => (
                      <Fragment key={index}>
                        {part}
                        {index !== project.name.split('.').length - 1 && <br />}
                      </Fragment>
                    ))}
                  </h4>
                  {/* </div> */}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default ProjectsList;



import { NavLink, useLocation } from "react-router-dom";
import css from "./ProjectsList.module.css"



const ProjectsList = ({projects}) => {

  const location = useLocation();
console.log(projects);

  return (
    <div className={css.projectsSection}>
      <div className={css.container}>
        <ul className={css.listProjects}>
          {projects.map((project) => (
              <li key={project.id} className={css.itemProjects}>
                <NavLink to={`/projects/${project.id}`} state={location}>
                  <div className={css.imgProjects}>
                    <img src={project.imageSmall} alt={project.name} />
                  </div>
                  <div className={css.cardProjects}>
                    <h4 className={css.textProjects}>{project.name}</h4>
                  </div>
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





          {/* <NavLink to={`/projects/${projects.id}`} state={location}> */}
          {/* <li className={css.itemProjects}>
            <div className={css.imgProjects}>
              <img src="/src/images/photo/manchkin1.png" alt=""/>
            </div>
          <div className={css.cardProjects}>
            <h4 className={css.textProjects}>Манчкін</h4>
          </div>
        </li>
        <li className={css.itemProjects}>
            <div className={css.imgProjects}>
            <img src="/src/images/photo/manchkin2.png" alt=""/>
            </div>
          <div className={css.cardProjects}>
            <h4 className={css.textProjects}>Манчкін</h4>
          </div>
        </li>
        <li className={css.itemProjects}>
            <div className={css.imgProjects}>
            <img src="/src/images/photo/manchkin3.png" alt=""/>
            </div>
          <div className={css.cardProjects}>
            <h4 className={css.textProjects}>Манчкін</h4>
          </div>
        </li>
        <li className={css.itemProjects}>
            <div className={css.imgProjects}>
              <img src="/src/images/photo/manchkinStimpank.png" alt="" />
            </div>
          <div className={css.cardProjects}>
            <h4 className={css.textProjects}>Манчкін</h4>
          </div>
        </li> */}
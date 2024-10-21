// import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from "./ProjectsList.module.css"
// import { getProjects } from "../../api/api";


const ProjectsList = ({projects}) => {

  // const [projects, setProjects] = useState([]); // Зберігаємо проекти в стані
  // const [loading, setLoading] = useState(true); // Стан завантаження
  // const [error, setError] = useState(null); // Стан для обробки помилок

  // const fetchProjects = async () => {
  //     try {
  //       const fetchedProjects = await getProjects(); // Отримуємо проекти
  //       setProjects(fetchedProjects); // Оновлюємо стан проектів
  //       setLoading(false); // Оновлюємо стан завантаження
  //     } catch (error) {
  //       setError(error); // Якщо виникає помилка
  //       setLoading(false);
  //     }
  // };
  
  // useEffect(() => {
  //   fetchProjects();
  // }, []); // Порожній масив залежностей, щоб виконати запит лише один раз при завантаженні компонента

  // if (loading) {
  //   return <p>Завантаження...</p>; // Відображаємо повідомлення про завантаження
  // }

  // if (error) {
  //   return <p>Помилка завантаження проектів: {error.message}</p>; // Відображаємо повідомлення про помилку
  // }

  const location = useLocation();
console.log( location);

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
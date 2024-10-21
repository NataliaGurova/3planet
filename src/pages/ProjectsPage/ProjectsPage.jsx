import { useEffect, useState } from "react";
import DocTitle from "../../components/DocTitle/DocTitle";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import css from "./ProjectsPage.module.css"
import { getProjects } from "../../api/api";

const ProjectsPage = () => {
  
  
  const [projects, setProjects] = useState([]); // Зберігаємо проекти в стані
  const [loading, setLoading] = useState(true); // Стан завантаження
  const [error, setError] = useState(null); // Стан для обробки помилок

  const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects(); // Отримуємо проекти
        setProjects(fetchedProjects); // Оновлюємо стан проектів
        setLoading(false); // Оновлюємо стан завантаження
      } catch (error) {
        setError(error); // Якщо виникає помилка
        setLoading(false);
      }
  };
  
  useEffect(() => {
    fetchProjects();
  }, []); // Порожній масив залежностей, щоб виконати запит лише один раз при завантаженні компонента

  if (loading) {
    return <p>Завантаження...</p>; // Відображаємо повідомлення про завантаження
  }

  if (error) {
    return <p>Помилка завантаження проектів: {error.message}</p>; // Відображаємо повідомлення про помилку
  }


  return (
    <>
      <DocTitle>Projects</DocTitle>
      <div className={css.projectContainer}>
        {/* {loading ? (
          <Loader />
        ) : (
          <> */}
        <h2 className={css.text}>Наші проекти</h2>
        {projects.length > 0 && <ProjectsList projects={projects} />}
        
          {/* </>
        )} */}
      </div>
    </>
  );
  
};

export default ProjectsPage;
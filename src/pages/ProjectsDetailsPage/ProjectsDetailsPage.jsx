import { useLocation, useParams } from "react-router";
import DocTitle from "../../components/DocTitle/DocTitle";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getProjectById } from "../../api/api";
import css from "./ProjectsDetailsPage.module.css";
import { BsHeartArrow } from "react-icons/bs";

const ProjectsDetailsPage = () => {

  const [project, setProject] = useState(null); // Створюємо стан для зберігання проекту
  const [loading, setLoading] = useState(true); // Стан для завантаження
  const [error, setError] = useState(null); // Стан для помилок

  const { projectId } = useParams();
  const location = useLocation()

  // const backLinkRef = useRef(location.state?.from || '/');
  const backLinkRef = useRef(location.state ?? "/");


  // Використовуємо useEffect для завантаження проекту при зміні projectId
  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;
      try {
        const fetchedProject = await getProjectById(projectId); // Отримуємо проект за ID
        console.log(projectId);
        
        setProject(fetchedProject); // Оновлюємо стан проекту
        setLoading(false); // Завантаження завершено
      } catch (err) {
        setError(err.message); // Якщо є помилка, оновлюємо стан помилки
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]); // Виконувати при зміні projectId

  if (loading) {
    return <p>Завантаження...</p>; // Показати, поки проект завантажується
  }

  if (error) {
    return <p>Помилка: {error}</p>; // Показати помилку, якщо вона є
  }

  if (!project) {
    return <p>Проект не знайдено</p>; // Якщо проект не знайдено
  }

  return (
    <main className={css.mainContainer}>
      <DocTitle>Третя Планета - Настільна гра {project.name }</DocTitle>
      <div className={css.detailsContainer}>
        <Link to={backLinkRef.current}><BsHeartArrow size="40px" className={css.arrowIcon}/></Link>

        <ProjectItem project={project} />

        {/* =====ddddd====== */}
        {/* <ul>
          <li>
            <Link to="description">Description</Link>
          </li>
          <li>
            <Link to="rules">Rules</Link>
          </li> */}
          {/* <li> */}
            {/* <NavLink to="reviews" className={buildLinkClass}> */}
            {/* <Link to="reviews">
              Reviews
            </Link>
          </li> */}
        {/* </ul> */}
        {/* <Outlet context={{ project }} /> */}

      </div>      
    </main>
  );
  
};

export default ProjectsDetailsPage;
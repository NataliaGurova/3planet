import { useLocation, useParams } from "react-router";
import DocTitle from "../../components/DocTitle/DocTitle";
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectById } from "../../api/api";

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
    <>
      <DocTitle>ProjectsDetailsPage</DocTitle>
      <div>
        <Link to={backLinkRef.current}>Назад до Проектів</Link>
        {/* {loading ? (
          <Loader />
        ) : (
          <> */}
        {/* <h1>ProjectsDetailsPage {projectsId}</h1> */}
        <ProjectDescription project={project} />
          {/* </>
        )} */}
      
      </div>
    </>
  );
  
};

export default ProjectsDetailsPage;
import axios from 'axios';


export const getProjects = async () => {
    const response = await axios.get("/projects.json");
    const projects = response.data;
    console.log(projects);
    return projects;
  };
  
  export const getProjectById = async (projectId) => {
    const response = await axios.get("/projects.json"); // Отримуємо всі проєкти
    const projects = response.data;
    
    // Знаходимо проект по ID
    // const project = projects.find((project) => project.id === parseInt(projectId));
    const project = projects.find((project) => project.id === projectId);
    if (!project) {
      throw new Error(`Проект з ID ${projectId} не знайдено`);
    }
    
    return project;
  };

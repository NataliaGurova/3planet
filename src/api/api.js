import axios from 'axios';

// axios.defaults.baseURL = "/projects.json";

export const getProjects = async () => {
  const response = await axios.get("/public/projects.json");
  // const projects = response.data.results
  const projects = response.data;
  console.log(projects);
  return projects;  
};

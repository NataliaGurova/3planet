import { useOutletContext, useParams } from "react-router-dom";
import css from "./Description.module.css"
import { useEffect, useState } from "react";

const Description = () => {
  const contextData = useOutletContext();
  const descriptionItem = contextData.project.description;
  console.log(descriptionItem);
  
// const [project, setProject] = useState(null);
//   const { projectId } = useParams();

//   // const [cast, setCast] = useState([]);
//   console.log(project);
  
//   useEffect(() => {  
//     const fetchProject = async () => {
//       if (!projectId) return;
//       try {
//         const fetchedProject = await getProjectById(projectId);
//         setProject(fetchedProject);

//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProject();
//   }, [projectId]);



//   // ===================
  
//   console.log(project);
  
  return (
    <p className={css.textDescription}>{descriptionItem}</p>
    
  )
}

export default Description;
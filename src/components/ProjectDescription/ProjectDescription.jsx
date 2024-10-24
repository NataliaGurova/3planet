
import css from "./ProjectDescription.module.css";
import { BsPeopleFill } from "react-icons/bs";
import { GiEmptyHourglass } from "react-icons/gi";
import { MdChildCare } from "react-icons/md";

const ProjectDescription = ({ project }) => {


  // Деструктуруємо поля проекту
  const { imageSmall, name, nameLogo, description, players, timer, age } = project;

  return (
    <main className={css.itemContainer}>
      <div className={css.card}>
        <div className={css.divImgCard}>
          <img src={imageSmall} alt={name} className={css.imgCard}/>
        </div>
        {/* <div> */}
          <ul className={css.iconList}>
            <li className={css.iconItem}>
              <BsPeopleFill size="30px"/>
              <p>{players}</p>
            </li>
            <li className={css.iconItem}>
              <GiEmptyHourglass size="30px"/>
              <p>{timer}</p>
            </li>
            <li className={css.iconItem}>
              <MdChildCare size="30px"/>
              <p>{age}</p>
            </li>
          </ul>
        {/* </div> */}
      </div>
      <div className={css.description}>
        <img src={nameLogo} alt={name} className={css.imgLogoM}/>
        <p className={css.textDescription}>{description}</p>
      </div>
    </main>
  );
};

export default ProjectDescription;













// import css from "./ProjectDescription.module.css"

// import { BsPeopleFill } from "react-icons/bs";
// import { GiEmptyHourglass } from "react-icons/gi";
// import { MdChildCare } from "react-icons/md";


// const ProjectDescription = ({ projectId }) => {
//   const project = projects[projectId - 1];

// if (!project) {
//   return <p>Проект не знайдено</p>;
// }

// const { imageSmall, name, description, players, timer, age } = project;
//   // const { imageSmall, name, description, players, timer, age } = projects[projectsId-1];

//   return (
//     <main className={css.itemContainer}>
//       <div>
//       <div>
//         <img src={imageSmall} alt={name} />
//       </div>
//       <div>
//         <ul>
//           <li>
        
//               <BsPeopleFill />
//               <p>{players}</p>
            
//           </li>
//           <li>
        
//               <GiEmptyHourglass />
//               <p>{timer}</p>
            
//           </li>
//           <li>

//               <MdChildCare />
//               <p>{age}</p>
  
//           </li>
//         </ul>
//         </div>
//         </div>
//       <div>
//         <h1>{name}</h1>
//         <p className={css.textDescription}>{description}</p>
//       </div>
//     </main>
//   );
// };

// export default ProjectDescription;
import projects from "../../../public/projects.json"
import css from "./ProjectDescription.module.css"

import { BsPeopleFill } from "react-icons/bs";
import { GiEmptyHourglass } from "react-icons/gi";
import { MdChildCare } from "react-icons/md";

// import { Link, useLocation } from "react-router-dom";
// import { useRef } from "react";
// import manchkinImage from '../../../src/images/photo/manchkin1.png';
// import projects from "../../../package.json"

const ProjectDescription = ({ projectsId }) => {
  // const location = useLocation()

  // const backLinkRef = useRef(location.state?.from || '/');
  // // const backLinkRef = useRef(location.state ?? "/");

  // console.log(location.state);
  // console.log(backLinkRef);
  
  const { imageSmall, name, description, players, timer, age } = projects[projectsId-1];

  return (
    <main className={css.itemContainer}>
      <div>
    {/* <Link to={backLinkRef.current}>Назад до Проектів</Link> */}
      <div>
        <img src={imageSmall} alt={name} />
      </div>
      <div>
        <ul>
          <li>
        
              <BsPeopleFill />
              <p>{players}</p>
            
          </li>
          <li>
        
              <GiEmptyHourglass />
              <p>{timer}</p>
            
          </li>
          <li>

              <MdChildCare />
              <p>{age}</p>
  
          </li>
        </ul>
        </div>
        </div>
      <div>
        <h1>{name}</h1>
        <p className={css.textDescription}>{description}</p>
      </div>
    </main>
  );
};

export default ProjectDescription;
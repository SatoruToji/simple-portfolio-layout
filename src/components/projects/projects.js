import './style.css'

import project1 from '../../img/projects/01.jpg'

const Project = ({title, img, link}) => {
  return ( 
    <li className="project">
      <a href={link}>
          <img src={img} alt={title} className="project__img"/>
          <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
}
 
export default Project;
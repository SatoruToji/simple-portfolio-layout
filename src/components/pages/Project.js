import img from '../../img/projects/02.png'
import gitHub from "../../img/icons/gitHub.svg"

const Project = () => {
  return ( 
    <main class="section">
        <div class="container">
            <div class="project-details">

                <h1 class="title-1">Video service</h1>

                <img src={img} alt="" class="project-details__cover"/>

                <div class="project-details__desc">
                    <p>Skills: JavaStriptiz</p>
                </div>

                <a href="#!" class="btn-outline">
                    <img src={gitHub} alt=""/>
                    GitHub repo
                </a>

            </div>
        </div>
    </main>
  );
}
 
export default Project;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faReact,
  faBootstrap,
  faGitAlt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { DiMongodb } from "react-icons/di";
import {GrHeroku} from "react-icons/gr";
import {SiPostman,SiVisualstudiocode}from "react-icons/si";


function Skills() {

   
  return (
    <>
    
    <section className="myskills">
    
    <h2 className="headerskill">My Skills</h2>
    
    <div className="menu">
     
      <li><a href="#"><FontAwesomeIcon icon={faHtml5}/></a>
      </li>
     
      <li><a href="#"><FontAwesomeIcon icon={faCss3}/></a>
       </li>
      <li><a href="#"><FontAwesomeIcon icon={faJs} /></a>
      </li>
      <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a>
      </li>
      <li><a href="#"><FontAwesomeIcon icon={faReact}/></a>
      </li>
      <li><a href="#"><FontAwesomeIcon icon={faNodeJs} /></a>
      </li>
      <li><a href="#"><FontAwesomeIcon icon={faBootstrap} /></a>
      </li>
      <li><a href="#"><FontAwesomeIcon icon={faGitAlt} /></a>
      </li>
      <li><a href="#"><SiVisualstudiocode classNameName="icon"></SiVisualstudiocode></a>
      </li>
      <li><a href="#"><DiMongodb classNameName="icon"></DiMongodb></a>
      </li>
   
      <li><a href="#"><SiPostman classNameName="icon"></SiPostman></a>
      </li>
      <li><a href="#"><GrHeroku classNameName="icon"></GrHeroku></a>
      </li>
    </div>
    </section>
    </>
  );
}
// let toggle=document.querySelector(".toggle");
// let menu=document.querySelector(".menu");
// toggle.onclick=function(){
//     menu.classList.toggle("active")

// }
export default Skills;



{/* <Typewriter
className="typewriter"
options={{
  strings: [
    "HTML.",
    "CSS.",
    "JavaScript.",
    "Reactjs.",
    "Nodejs.",
    "Mongodb.",
    "MySQL.",
    "RestfulAPIs.",
  ],
  autoStart: true,
  loop: true,
}}
></Typewriter> */}
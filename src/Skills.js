import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { DiMongodb } from "react-icons/di";

function Skills() {
   
  return (
    <section className="myskills">
        
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
      <li><a href="#"><DiMongodb classNameName="icon"></DiMongodb></a>
      </li>
    </div>
    </section>
  );
}
// let toggle=document.querySelector(".toggle");
// let menu=document.querySelector(".menu");
// toggle.onclick=function(){
//     menu.classList.toggle("active")

// }
export default Skills;

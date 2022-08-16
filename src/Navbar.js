import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import './App.css';

function Navbar() {
  const [isMobile,setIsMobile]=useState(false);
  return (
    <>
   <nav>
    
  <ul className={isMobile?"nav-links-mobile":"nav-links"}onClick={()=>setIsMobile(false)}>
   <a href="/">Home</a>
    <a href="/Skills" className="ski">Skills</a>
    <a href="/Projects">Projects</a>
    <a href="/Contact">Contact</a>
    </ul>
    <a className="mobile-menu"href="#" onClick={()=>setIsMobile(!isMobile)}>{isMobile?<FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faBars}/>}</a>
    
    
    
   </nav>
   </>
  )
}

export default Navbar
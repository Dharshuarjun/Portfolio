import React,{useEffect} from 'react';
import {Typewriter} from 'react-simple-typewriter';


function Banner() {
  
  return (
    <>
    <section className="banner" id="home">
   <div className="container">
    <div className="row">
        <div className="col-xs-12 col-md-6 col-xl-7">
            <span className="tagline">Welcome to portfolio</span>
           <h1 style={{paddingTop:"3px",color:"yellow",fontFamily:"serif"}}>
            
      
            <Typewriter
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={50}
            backSpeed={50}
            words={["I am a Web Developer","hi"]}
            />
            </h1>
       <a href="./images/Myprofile.pdf" className="btn btn-info p-2 m-2 fs-4">Hire me</a>
            </div>
            <div className="col-xs-12 col-md-6 col-xl-5">
   <img src="../images/mypic.jpg" alt="image" className="shadow-sm rounded-circle"/>
   </div>
   </div>
   </div>
   </section>
    </>
  )
}

export default Banner; 
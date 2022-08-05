import React,{useEffect} from 'react'


function Banner() {
  
  return (
    <>
    <section className="banner" id="home">
   <div className="container">
    <div className="row">
        <div className="col-xs-12 col-md-6 col-xl-7">
            <span className="tagline">Welcome to portfolio</span>
            <h1 className="header">{`Hi I'm a webdeveloper`}<span className="wrap">web developer</span></h1>
            
       <a href="#" className="btn btn-danger p-2 m-2">Hire me</a>
            </div>
            <div className="col-xs-12 col-md-6 col-xl-5">
   <img src="../images/mypic.jpg" alt="image" className="rounded-circle"/>
   </div>
   </div>
   </div>
   </section>
    </>
  )
}

export default Banner; 
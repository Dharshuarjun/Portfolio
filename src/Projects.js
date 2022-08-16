import React from 'react'
import Cards from './Cards';

function Projects() {
  
    let products=[
        {
         
        image:"./images/youtube.gif",
        title:"Youtube Clone"
        },
        {
          image:"./images/Rental app.png",
          title:"Rental Application"
        }
        
       
      ]
      return (
             <div className="container1 p-4">
              <div className="row offset-3">
                
              <h1 className="headerprojects">My Projects</h1>    
              <div className="singleproject"> 
            {
              products.map((product)=>{
                return <Cards image={product.image} title={product.title}></Cards>
              })
            }
            </div>
                </div>
              </div>
             
              
                );
    }
  


export default Projects
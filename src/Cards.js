import React from 'react'

function Cards(props) {
 
    
        return (
        <div className="card p-4" style={{width:"25rem",height:"20rem"}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          </div>
      </div>
      
               
  )
}

export default Cards;
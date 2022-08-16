import React from 'react'
import {AiOutlineMail,AiOutlinePhone} from"react-icons/ai";
import {ImLocation} from "react-icons/im";
function Contact() {
  return (
   <div className="container contact-container">
    <h1 className="boldcontact">Contact me...</h1>
    <div className="contact-links">
        <a href="" className="contact Location">
            <ImLocation className="icon"></ImLocation>
            <h2>Location<span>Chennai</span></h2>
        </a>

        <a href="" className="contact Email">
            <AiOutlineMail className="icon"></AiOutlineMail>
            <h2>Email<span>dhanalakshm77@gmail.com</span></h2>
        </a>

        <a href="" className="contact Phone">
            <AiOutlinePhone className="icon"></AiOutlinePhone>
            <h2>Phone<span>+91 9865344052</span></h2>
        </a>
    </div>
    

   </div>
  )
}

export default Contact
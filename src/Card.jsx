import React from 'react';
import { NavLink } from 'react-router-dom';



const Card = (props) =>{
  return(
    <>
   
   <div className="col-md-4 col-10 mx-auto">

   <div className="card" >
   <img src={props.imgsrc} className="card-img-top" alt="hello" />
   <div className="card-body">
<!--      title of the card using props-->
   <h5 className="card-title">{props.title}</h5>
   <p className="card-text">Some quick example text to build the card title and make up the bulk of the card's content.</p>
   <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
   </div>
   </div>

   </div>

    </>

  );
};

export default Card;

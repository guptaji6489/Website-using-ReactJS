import React from 'react';
import Common from './Common';
import web1 from '../src/images/home';




const About = () =>{
  return(
    <>
    <Common name="Welcome to About Page" imgsrc={web1} visit='/contact' btname="Contact Now" />
    </>

  );
};

export default About;

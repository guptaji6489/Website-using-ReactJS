import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Switch, Route, Redirect } from 'react-router-dom';


const App = () =>{
  return(
    <>
    <Navbar />
    <Switch>
    <Route exact path='/'  component={Home} ></Route>
    <Route exact path='/about'  component={About} ></Route>
    <Route exact path='/contact'  component={Contact} ></Route>
    <Route  exact path='/service'  component={Service} ></Route>
    <Redirect  to="/"/>
    </Switch>
    <Footer />


     </>

  );
};

export default App;

import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import { Switch, Route } from 'react-router-dom';


const App = () =>{
  return(
    <>
    <Switch>
    <Route exact path='/'  component={Home} ></Route>
    <Route exact path='/about'  component={About} ></Route>
    <Route exact path='/contact'  component={Contact} ></Route>
    <Route  exact path='/service'  component={Service} ></Route>
    </Switch>


     </>

  );
};

export default App;

import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";


function App() {

  
  return (
    <div className="App">
    
    <Router>

    <Navbar/>

      <Switch>
     
      <Route exact path="/" component={Home}/>
       
     </Switch>

    </Router>


    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar";


function App() {

  
  return (
    <div className="App">
    
    <Router>

    <Navbar/>

      <Switch>
     
      <Route exact path="/" component={()=><h1>hello</h1>}/>
       
     </Switch>

    </Router>


    </div>
  );
}

export default App;

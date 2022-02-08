import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Meet from "./Component/Meet/Meet";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meet" component={Meet} />
         
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

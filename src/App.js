import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";

const App= () => {

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path='/checkout'><h1>CheckOut</h1></Route>
      </Switch>

      <Header/>

    </div>
    </Router>
  );
}

export default App;

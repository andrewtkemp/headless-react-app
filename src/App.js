import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import FirstRoute from './containers/FirstRoute';
import SecondRoute from './containers/SecondRoute';
import API from "./utils/API";

function App() {
  
  const [urlRoutes, setUrlRoutes] = useState([]);
  const [navLabels, setnavLabels] = useState([]);

  useEffect(() => {
    async function fetchRoutes() {
      const data = await API.GetRoutes();
      const routesObject = (data.data);
      const keys =  Object.keys(routesObject);
      const values = Object.values(routesObject);
      console.log(values);
      setUrlRoutes(keys);
      setnavLabels(values);
    }
    fetchRoutes();
  }, []);

  return (

    <div className="App">
      <nav>
        <NavLink to={`${urlRoutes[0]}`}>{navLabels[0]}</NavLink>
        <NavLink to={`${urlRoutes[1]}`}>{navLabels[1]}</NavLink>
      </nav>
      <Switch>
        <Route path={`${urlRoutes[0]}`} exact component={FirstRoute} />
        <Route path={`${urlRoutes[1]}`} exact component={SecondRoute} />
        <Redirect to={`${urlRoutes[0]}`} />
      </Switch>
    </div>
  );
}

export default App;

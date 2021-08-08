import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import FirstRoute from './containers/FirstRoute';
import SecondRoute from './containers/SecondRoute';
import API from "./utils/API";

import { increment, loadUrls } from "./actions"

function App() {


  const counter = useSelector(state => state.counter);
  const urls = useSelector(state => state.navRoutes);

  const dispatch = useDispatch();

  const [urlRoutes, setUrlRoutes] = useState([]);
  const [navLabels, setnavLabels] = useState([]);

  useEffect(() => {
    async function fetchRoutes() {
      dispatch(increment())
      dispatch(loadUrls())

      const data = await API.GetRoutes();
      const routesObject = (data.data);
      const keys = Object.keys(routesObject);
      const values = Object.values(routesObject);
      setUrlRoutes(keys);
      setnavLabels(values);
      
    }
    fetchRoutes();
  }, []);

  return (
    <>
      {console.log('counter store value:', counter)}
      {console.log('load urls', urls)}
      <div className="App">
        <nav>
          {urlRoutes.map((route, i) => (
            <NavLink key={navLabels[i]} to={`${route}`}>{navLabels[i]}</NavLink>
          ))}
        </nav>
        <Switch>
          <Route path={`${urlRoutes[0]}`} exact component={FirstRoute} />
          <Route path={`${urlRoutes[1]}`} exact component={SecondRoute} />
          <Redirect to={`${urlRoutes[0]}`} />
        </Switch>
      </div>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button>-</button>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Almacen from './Almacen';
import Inicio from './Inicio';
import Menu from './components/Menu';


export default function App() {
  return (
  
    <Router>
      <div className="grid grid-cols-6 gap-4">
      <Menu/>
      <Switch className="col-span-2 bg-blue-100">
        <Route path="/almacen">
          <Almacen />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}




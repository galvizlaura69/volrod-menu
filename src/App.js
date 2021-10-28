import React from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Vehiculos from './Vehiculos';
import Almacen from './Almacen';
import Inicio from './Inicio';
import Menu from './components/Menu';
import Sistemas from './Sistemas';



export default function App() {
  return (
  
  <Router>
      <div className="grid grid-cols-6 gap-4">
      <Menu/>
    <Switch className="col-span-2 bg-blue-100">
      <Route path="/">
          <Inicio />
      </Route>
      <Route path="/almacen">
          <Almacen />
      </Route>
      <Route path="/vehiculos">
          <Vehiculos />
      </Route>
      <Route path="/sistemas">
          <Sistemas />
      </Route>
    </Switch>
      </div>
  </Router>
  );
}




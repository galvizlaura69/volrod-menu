import React from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Sistemas from './Sistemas';
import Vehiculos from './Vehiculos';
import Almacen from './Almacen';
import Inicio from './Inicio';
import Menu from './components/Menu';
import Reportediario from './Reportediario';
import Talentohumano from './Talentohumano';
import Solicitudesth from './Solicitudesth';




export default function App() {
  return (
  
  <Router>
      <div className="grid grid-cols-6 gap-4">
      <Menu/>
    <Switch className="col-span-6 bg-blue-100">
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
      <Route path="/reportediario">
          <Reportediario />
      </Route>
      <Route path="/talentohumano">
          <Talentohumano />
      </Route>
      <Route path="/solicitudesth">
          <Solicitudesth />
      </Route>

    </Switch>
      </div>
  </Router>
  );
}




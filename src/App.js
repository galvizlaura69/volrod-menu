import React from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Almacen from './Almacen';
import Sistemas from './Sistemas';
import Vehiculos from './Vehiculos';
import Inicio from './Inicio';
import Reportediario from './Reportediario';
import Talentohumano from './Talentohumano';
import Solicitudesth from './Solicitudesth';
import Menu from './components/Menu';

export default function App() {
  return (
    <Router>
      <div className="grid grid-cols-6 gap-4">
        <Menu />

        <Switch className="col-span-6 bg-blue-100">
          <Route path="/almacen">
            <Almacen />
          </Route>

          <Route path="/talentohumano">
            <Talentohumano />
          </Route>

          <Route path="/sistemas">
            <Sistemas />
          </Route>
          <Route path="/vehiculos">
            <Vehiculos />
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

          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



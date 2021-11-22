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
import Contabilidad from './Contabilidad';
import Compras from './Compras';
import Calidad from './Calidad';
import Hse from './Hse';
import Operaciones from './Operaciones';
import Comercial from './Comercial';
import Vip from './Vip';
import Menu from './components/Menu';
import PageTableCovid from './PageTablaCovid';
import FiltroInventario from './FiltroInventario';
import BitacoraCovid19 from './BitacoraCovid19';
import TablaInventarioRepuestos from './tablaInventarioRepuestos';

export default function App() {
  return (
    <Router>
      <div className="flex flex-wrap overflow-hidden">
        <Menu />
        <div className="contenido max-w-5/6 w-5/6 h-screen p-5 bg-gray-100 overflow-auto">
          <Switch>
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
            <Route path="/contabilidad">
              <Contabilidad/>
            </Route>
            <Route path="/compras">
              <Compras />
            </Route>
            <Route path="/calidad">
              <Calidad />
            </Route>
            <Route path="/hse">
              <Hse />
            </Route>
            <Route path="/operaciones">
              <Operaciones />
            </Route>
            <Route path="/comercial">
              <Comercial />
            </Route>
            <Route path="/pagetablecovid">
              <PageTableCovid />
            </Route>
            <Route path="/tablainventariorepuestos">
              <TablaInventarioRepuestos/>
              </Route>
            <Route path="/vip">
              <Vip />
            </Route>
            <Route path="/filtroinventario">
              <FiltroInventario/>
              </Route>
             <Route path="/bitacoracovid19">
               <BitacoraCovid19/>
               </Route>   

            <Route path="/">
              <Inicio />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


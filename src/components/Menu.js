import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Menu() {
    return (

  <div className=" w-full h-screen bg-gray-800">
    <div>
      <h2>Bienvenido superadmin</h2>
      <Link className="block" to="/">
        Dash board
      </Link>
      <Link className="block" to="/almacen">
        ALMACÉN 
      </Link>
      <Link className="block" to="/vehiculos">
        VEHÍCULOS
      </Link>
      <Link className="block" to="/sistemas">
        SISTEMAS
      </Link>
     </div>

     <div>
      <Link className="block" to="/reportediario">
        REPORTE DIARIO
      </Link>
      <Link className="block" to="/talentohumano">
        TALENTO HUMANO
      </Link>
      <Link className="block" to="/solicitudesth">
        SOLICITUDES TH
      </Link>
     </div>
  </div>
    
  );
}

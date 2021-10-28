import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Menu() {
    return (

  <div className=" w-full h-screen bg-gray-800">
    <h2>Bienvenido superadmin</h2>
    <div>    
      <Link className="block" to="/">
        Dash board
      </Link>
      <Link className="block text-xs" to="/almacen">
        ALMACÉN 
      </Link>
      <Link className="block text-xs" to="/vehiculos">
        VEHÍCULOS
      </Link>
      <Link className="block text-xs" to="/sistemas">
        SISTEMAS
      </Link>
     </div>

     <div>
      <Link className="block text-xs" to="/reportediario">
        REPORTE DIARIO
      </Link>
      <Link className="block text-xs" to="/talentohumano">
        TALENTO HUMANO
      </Link>
      <Link className="block text-xs" to="/solicitudesth">
        SOLICITUDES TH
      </Link>
     </div>
  </div>
    
  );
}

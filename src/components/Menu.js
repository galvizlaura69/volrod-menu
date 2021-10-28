import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Menu() {
    return (

  <div className=" w-full h-screen bg-gray-800">
    <div>
      <Link className="block" to="/">
        Inicio
      </Link>
      <Link className="block" to="/almacen">
        ALMACEN 
      </Link>
      <Link className="block" to="/vehiculos">
        VEHICULOS
      </Link>
      <Link className="block" to="/sistemas">
        SISTEMAS
      </Link>
     </div>
  </div>
    
  );
}

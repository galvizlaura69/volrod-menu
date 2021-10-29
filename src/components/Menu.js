import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Menu() {
    return (
<div className=" w-full h-screen bg-gray-800 p-5">
   <h2 className="pb-8 text-xs pt-6">Bienvenido superadmin</h2>
    <Link className="block pb-16 text-xs" to="/">
        Dash board
    </Link>
    <div className="grid grid-cols-2 pb-9"> 
        <div className="col-span-1">
           <img classnema="object-cover"  src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"/> 
        </div>
        <div className="col-span-1">
          <Link className="block text-xs text-gray-400" to="/almacen">
             ALMACÉN 
          </Link>
          <Link className="block text-xs text-gray-400" to="/vehiculos">
             VEHÍCULOS
         </Link>
         <Link className="block text-xs text-gray-400" to="/sistemas">
            SISTEMAS
          </Link>
        </div>  
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

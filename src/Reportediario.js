import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Reportediario() {
  return (
    <div className="p-5">
      <h1>Reporte diario</h1>
         <Link  to="./bitacoracovid"><p className="boton_generico">Bitacora Covid-19</p></Link>
         <Link to="./"><p className="boton_generico">Reporte diario ADEMINCOL</p></Link>
         <Link  to="./pagetablecovid"><p className="boton_generico"> Revisar Bitacora Covid-19</p></Link>

    </div>
  );
}
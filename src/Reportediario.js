import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Reportediario() {
  return (
    <div className="p-5">

         <Link  to="./bitacoracovid19"><p className="boton_generico w-60 ">Bitacora Covid-19</p></Link>
         <Link to="./"><p className="boton_generico w-60 ">Reporte diario ADEMINCOL</p></Link>
         <Link  to="./pagetablecovid"><p className="boton_generico w-60 "> Revisar Bitacora Covid-19</p></Link>
         <Link to="./"><p className="boton_generico w-60 "> Revisar Reporte diario </p></Link>

    </div>
  );
}
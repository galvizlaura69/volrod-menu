import React from 'react';
import './style.css';

export default function Reportediario() {
  return (
    <div>
      <h1>Reporte diario</h1>
      <form>
        <div className="block mb-2">
          <label >Cedula: </label>
          <input className="border-gray-500 border" type="number" placeholder="000000000" required />
        </div>
        <div className="block mb-2">
          <label >Fecha: </label>
          <input className="border-gray-500 border" type="number" placeholder=" dd/mm/aa" required />
        </div>
        <div className="block mb-2">
          <label>Lugar (Departamento,Municio,Vereda): </label>
          <textarea className="border-gray-500 border" placeholder="donde" required />
        </div>
        <div className="block mb-2">
          <label>Actividad desarrollada: </label>
          <textarea className="border-gray-500 border" placeholder="habia una vez" required />
        </div>
        <div className="block mb-2">
          <label >Numero de personas con las que tuvo contacto: </label>
          <input className="border-gray-500 border" type="number" placeholder="0" required />
        </div>
        <div className="block mb-2">
          <label>Nombres: </label>
          <textarea className="border-gray-500 border" placeholder="Laura camilo" required />
        </div>

        <div className="block mb-2">
          <label>Tipo de alojamiento: </label>
          <select className="border-gray-500 border">
            <option value="habitacionresidencia">Habitacion residencia</option>
            <option value="hotel">Hotel</option>
            <option value="hostal">Hostal</option>
            <option value="nucleofamiliar">Nucleo familiar</option>
          </select>
        </div>
        <div className="block mb-3">
          <label>Nombre: </label>
          <input className="border-gray-500 border" type="text" placeholder=" Hotel@" required />
        </div>
        <div className="block mb-3">
          <label>Dirrección: : </label>
          <input className="border-gray-500 border" type="text" placeholder=" cra ..." required />
        </div>
        <div className="block mb-2">
          <label>Tipo de transporte: </label>
          <select className="border-gray-500 border">
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
            <option value="ninguno">Ninguno</option>
          </select>
        </div>
        <div className="block mb-2">
          <label>Distancia durante el desarrollo de la actividad: </label>
          <select className="border-gray-500 border">
            <option value="menor">Menor a 2m</option>
            <option value="mayor">Mayor a 2m</option>
          </select>
        </div>
        <div className="block mb-3">
          <label>Tiempo que duro la actividad: </label>
          <input className="border-gray-500 border" type="text" placeholder="1 hora" required />
        </div>
        <div className="block mb-2">
          <label>EPP Bioseguridad: </label>
          <select className="border-gray-500 border mr-2">
            <option value="quirurgico">Tapabocas quirúrgico</option>
            <option value="antifluidos">Tapabocas antifluidos</option>
          </select>
          <select className="border-gray-500 border">
            <option value="quirurgico">Tapabocas quirúrgico</option>
            <option value="antifluidos">Tapabocas antifluidos</option>
          </select>
        </div>
      </form>
    </div>
  );
}
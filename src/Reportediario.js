import React from 'react';
import './style.css';

export default function Reportediario() {
  return (
    <div>
      <h1>Reporte diario</h1>
      <form>
        <div className="block mb-3">
          <label>Nombre: </label>
          <input className="border-gray-500 border" type="text" placeholder="Laura" required />
        </div>
        <div className="block mb-2">
          <label >Apellido: </label>
          <input className="border-gray-500 border" type="text" placeholder="Hernandez" required />
        </div>
        <div className="block mb-2">
          <label >Cedula: </label>
          <input className="border-gray-500 border" type="number" placeholder="000000000" required />
        </div>
        <div className="block mb-2">
          <label>texto largo: </label>
          <textarea className="border-gray-500 border" placeholder="habia una vez" required />
        </div>
        <div className="block mb-2">
          <label>Selecciona </label>
          <select className="border-gray-500 border">
            <option value="hotel">Hotel</option>
            <option value="hostal">Hostal</option>
            <option value="casa">Casa</option>
          </select>
        </div>
      </form>
    </div>
  );
}
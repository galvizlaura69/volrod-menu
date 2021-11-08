import React from 'react';
import './style.css';

export default function BitacoraCovid() {
  return (
    <div className="p-5">
      <h1> Reporte bitacora Covid-19</h1>

      <form>
        <div className="flex mb-10">
          <label className="w-1/5" >Cedula </label>
          <input className="border-gray-500 border w-2/5  ml-2  " type="number" placeholder="000000000" required />
          <div className="w-2/5"><button className="boton_generico float-right">Buscar</button></div>
        </div>
        <div className="flex mb-10">
          <label className="w-1/5" >Fecha </label>
          <input className="border-gray-500 border w-1/5  ml-2" type="number" placeholder=" dd/mm/aa" required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5"><p>Lugar (Departamento, Municio, Vereda)</p></label>
          <textarea className="border-gray-500 border w-4/5 ml-2  text_area" placeholder="donde" required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5">Actividad desarrollada </label>
          <textarea className="border-gray-500 border w-4/5  ml-2 text_area" placeholder="habia una vez" required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5" >Numero de personas con las que tuvo contacto </label>
          <input className="border-gray-500 border w-1/5  ml-2  " type="number" placeholder="0" required />
          <label className="w-1/5 pl-3">Nombres </label>
          <textarea className="border-gray-500 border w-2/5  ml-2 text_area" placeholder="Laura camilo" required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5">Tipo de alojamiento </label>
          <select className="border-gray-500 border w-1/5  ml-2 ">
            <option value="habitacionresidencia">Habitacion residencia</option>
            <option value="hotel">Hotel</option>
            <option value="hostal">Hostal</option>
            <option value="nucleofamiliar">Nucleo familiar</option>
          </select>
          <label className="w-1/5 pl-3">Nombre de alojamiento </label>
          <textarea className="border-gray-500 border w-2/5  ml-2 text_area" placeholder="Laura camilo" required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5">Dirección alojamiento </label>
          <input className="border-gray-500 border w-4/5  ml-2" type="text" placeholder=" cra ..." required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5">Tipo de Restaurante </label>
          <select className="border-gray-500 border w-1/5  ml-2">
            <option value="privado">Domicilio</option>
            <option value="publico">Núcleo familiar</option>
            <option value="ninguno">Restaurante</option>
          </select>
          <label className="w-1/5 p-3">Nombre restaurante </label>
          <textarea className="border-gray-500 border w-2/5  ml-2 text_area" placeholder="Laura camilo" required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5">Dirección restaurante</label>
          <input className="border-gray-500 border w-4/5  ml-2" type="text" placeholder=" cra ..." required />
        </div>
        <div className="flex mb-10">
          <label className="w-1/5">Tipo de transporte </label>
          <select className="border-gray-500 border w-1/5  ml-2">
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
            <option value="ninguno">Ninguno</option>
          </select>
          <label className="w-2/5 p-3">Distancia durante el desarrollo de la actividad </label>
          <select className="border-gray-500 border w-1/5  ml-2">
            <option value="menor">Menor a 2m</option>
            <option value="mayor">Mayor a 2m</option>
          </select>
        </div>
        <div className="flex mb-10">
          <label className="w-1/5">Tiempo que duro la actividad </label>
          <input className="border-gray-500 border w-1/5  ml-2" type="text" placeholder="1 hora" required />
          <label className="w-1/5 p-3">EPP Bioseguridad </label>
          <select className="border-gray-500 border w-1/5 ml-2">
            <option value="quirurgico">Tapabocas quirúrgico</option>
            <option value="antifluidos">Tapabocas antifluidos</option>
          </select>
          <select className="border-gray-500 border w-1/5 ml-2">
            <option value="quirurgico">Tapabocas quirúrgico</option>
            <option value="antifluidos">Tapabocas antifluidos</option>
          </select>
        </div>
      </form>

      <button className="boton_generico">GUARDAR</button>
      <button className="boton_generico">CANCELAR</button>
    </div>
  );
}
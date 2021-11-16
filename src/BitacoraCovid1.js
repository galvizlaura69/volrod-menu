import React from 'react';
import './style.css';

export default function BitacoraCovid() {
  return (
    <div className="p-5">
      <h1 className="pb-5 text-gray-600"> BITACORA COVID-19</h1>
      <div className="">
        <div>
          <img
            className="logo-formularios"
            src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/logo-03.png?alt=media&token=d5e97ddf-80b5-4b90-9652-a1431d9a8aaa"
          />
        </div>
        <div className="pb-5 ">
          <p className="tamaño_texto">Apellidos y Nombres</p>
          <p className="tamaño_texto">Cargo</p>
          <p className="tamaño_texto">Documento de identidad</p>
        </div>
        <form>
          <div className="mb-10">
            <label className=" tamaño_texto flex" >Fecha </label>
            <input className="border-gray-500 border w-1/5 " type="date" placeholder=" dd/mm/aa" required />
          </div>
          <div className=" mb-10">
            <label className="w-1/5 tamaño_texto flex"><p>Lugar (Departamento, Municio, Vereda)</p></label>
            <textarea className="border-gray-500 border w-4/5 ml-2  text_area" placeholder="donde" required />
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto">Actividad desarrollada </label>
            <textarea className="border-gray-500 border w-4/5  ml-2 text_area" placeholder="habia una vez" required />
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto" >Numero de personas con las que tuvo contacto </label>
            <input className="border-gray-500 border w-1/5  ml-2  " type="number" placeholder="0" required />
            <label className="w-1/5 pl-3 tamaño_texto">Nombres </label>
            <textarea className="border-gray-500 border w-2/5  ml-2 text_area" placeholder="Laura camilo" required />
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto">Tipo de alojamiento </label>
            <select className="border-gray-500 border w-1/5  ml-2 ">
              <option value="habitacionresidencia">Habitacion residencia</option>
              <option value="hotel">Hotel</option>
              <option value="hostal">Hostal</option>
              <option value="nucleofamiliar">Nucleo familiar</option>
            </select>
            <label className="w-1/5 pl-3 tamaño_texto">Nombre de alojamiento </label>
            <textarea className="border-gray-500 border w-2/5  ml-2 text_area" placeholder="Laura camilo" required />
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto">Dirección alojamiento </label>
            <input className="border-gray-500 border w-4/5  ml-2" type="text" placeholder=" cra ..." required />
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto">Tipo de Restaurante </label>
            <select className="border-gray-500 border w-1/5  ml-2">
              <option value="privado">Domicilio</option>
              <option value="publico">Núcleo familiar</option>
              <option value="ninguno">Restaurante</option>
            </select>
            <label className="w-1/5 p-3 tamaño_texto">Nombre restaurante </label>
            <textarea className="border-gray-500 border w-2/5  ml-2 text_area" placeholder="Laura camilo" required />
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto">Dirección restaurante</label>
            <input className="border-gray-500 border w-4/5  ml-2" type="text" placeholder=" cra ..." required />
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto">Tipo de transporte </label>
            <select className="border-gray-500 border w-1/5  ml-2">
              <option value="privado">Privado</option>
              <option value="publico">Público</option>
              <option value="ninguno">Ninguno</option>
            </select>
            <label className="w-2/5 p-3 tamaño_texto">Distancia durante el desarrollo de la actividad </label>
            <select className="border-gray-500 border w-1/5  ml-2">
              <option value="menor tamaño_texto">Menor a 2m</option>
              <option value="mayor tamaño_texto">Mayor a 2m</option>
            </select>
          </div>
          <div className="flex mb-10">
            <label className="w-1/5 tamaño_texto">Tiempo que duro la actividad </label>
            <input className="border-gray-500 border w-1/5  ml-2" type="text" placeholder="1 hora" required />
            <label className="w-1/5 p-3 tamaño_texto">EPP Bioseguridad </label>
            <select className="border-gray-500 border w-1/5 ml-2">
              <option value="quirurgico tamaño_texto">Tapabocas quirúrgico</option>
              <option value="antifluidos tamaño_texto">Tapabocas antifluidos</option>
            </select>
            <select className="border-gray-500 border w-1/5 ml-2">
              <option value="quirurgico tamaño_texto">Tapabocas quirúrgico</option>
              <option value="antifluidos tamaño_texto">Tapabocas antifluidos</option>
            </select>
          </div>
        </form>

        <button className="boton_generico">GUARDAR</button>
        <button className="boton_generico">CANCELAR</button>
      </div>
    </div>

  );
}
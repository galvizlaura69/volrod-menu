import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import handleUniversal from './hooks/handleUniversal';
import axios from 'axios';
axios.defaults.timeout = 100000;

export default function BitacoraCovid19() {

    //Definir estados para cada input

    const [fechaReporte, setFechaReporte] = useState(null);
    const [numeroPersonas, setNumeroPersonas] = useState(null);
    const [distancia, setDistancia] = useState(null);
    const [tiempoActividad, setTiempoActividad] = useState(null);

    const [lugar, setLugar] = useState(null);
    const [actividadDesarrollada, setActividadDesarrollada] = useState(null);
    const [nombres, setNombres] = useState(null);

    const [tipoAlojamiento, setTipoAlojamiento] = useState(null);
    const [nombreAlojamiento, setNombreAlojamiento] = useState(null);
    const [direccionAlojamiento, setDireccionAlojamiento] = useState(null);

    const [tipoRestaurante, setTipoRestaurante] = useState(null);
    const [nombreRestaurante, setNombreRestaurante] = useState(null);
    const [direccionRestaurante, setDireccionRestaurante] = useState(null);

    const [tipoTransporte, setTipoTransporte] = useState(null);
    const [eppBioseguridad1, setEppBioseguridad1] = useState(null);
    const [eppBioseguridad2, setEppBioseguridad2] = useState(null);

 // Aqui se hace la funcion para que reciba y guarde 
 
    const handleGuardar = (e) => {

        const objetoParaGuardar = {

            fechaReporte: fechaReporte,
            numeroPersonas: numeroPersonas,
            distancia: distancia,
            tiempoActividad: tiempoActividad,

            lugar: lugar,
            actividadDesarrollada: actividadDesarrollada,
            nombres: nombres,

            tipoAlojamiento: tipoAlojamiento,
            nombreAlojamiento: nombreAlojamiento,
            direccionAlojamiento: direccionAlojamiento,

            tipoRestaurante: tipoRestaurante,
            nombreRestaurante: nombreRestaurante,
            direccionRestaurante: direccionRestaurante,

            tipoTransporte: tipoTransporte,
            eppBioseguridad1: eppBioseguridad1,
            eppBioseguridad2: eppBioseguridad2,
        };
  // Aqui se consume el servicio de crear

        console.log(objetoParaGuardar);
        axios.post('google.com', objetoParaGuardar)
    }

    return (
        <div className=" w-4/5">
            <h1 className="pb-5 text-gray-600"> BITACORA COVID-19</h1>
            <form className="formulario">
                <div className="flex  flex-wrap ">
                    <div className="w-1/5 p flex flex-wrap ">
                        <div className="w-1/3 pt-14 p-3">
                            <img
                                className="logo-formularios float-right"
                                src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/logo-03.png?alt=media&token=d5e97ddf-80b5-4b90-9652-a1431d9a8aaa"
                            />
                        </div>
                        <div className="w-2/3 pt-10 ">
                            <p className="texto-login">Apellidos y Nombres</p>
                            <p className="texto-login">Cargo</p>
                            <p className="texto-login">Documento de identidad</p>
                        </div>

                    </div>

                    <div className="w-1/5">
                        <div className="input-small ">
                            <label className="label pt-5 label-small-2">Fecha de reporte </label>
                            <input className="border-gray-400 border w-full bg-gray-200 pequeños"
                                type="date"
                                placeholder=" 00/00/0000"
                                onChange={(e) => { handleUniversal(e, setFechaReporte) }}
                                value={fechaReporte}
                                required />
                        </div>
                    </div>
                    <div className="w-1/5 ">
                        <div className="input-small ">
                            <label className="label" >Numero de personas con las que tuvo contacto </label>
                            <input className="border-gray-400 border w-full bg-gray-200 pequeños"
                                type="number"
                                placeholder="0"
                                onChange={(e) => { handleUniversal(e, setNumeroPersonas) }}
                                value={numeroPersonas}
                                required />
                        </div>
                    </div>
                    <div className="w-1/5">
                        <div div className="input-small">
                            <label className="label">Distancia durante el desarrollo de la actividad </label>
                            <select className="border-gray-400 border w-full bg-gray-200 pequeños"
                                onChange={(e) => { handleUniversal(e, setDistancia) }}
                                value={distancia}>
                                <option value="menor">Menor a 2m</option>
                                <option value="mayor">Mayor a 2m</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-1/5 ">
                        <div className="input-small">
                            <label className="label label-small">Tiempo que duro la actividad </label>
                            <input className="border-gray-400 border w-full bg-gray-200 pequeños"
                                type="text"
                                placeholder="Hrs,Min"
                                onChange={(e) => { handleUniversal(e, setTiempoActividad) }}
                                value={tiempoActividad}
                                required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap content-center  ">
                    <div className="w-2/5">
                        <div className="input-small">
                            <label className="label">Lugar (Departamento, Municipio, Vereda)</label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Donde se desarrollo la actividad"
                                onChange={(e) => { handleUniversal(e, setLugar) }}
                                value={lugar}
                                required />
                        </div>
                    </div>
                    <div className=" w-1/5  ajuste-distancia">
                        <div className="input-small">
                            <label className="label">Actividad desarrollada</label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Describa la actividad"
                                onChange={(e) => { handleUniversal(e, setActividadDesarrollada) }}
                                value={actividadDesarrollada}
                                required />
                        </div>
                    </div>
                    <div className=" w-2/5 ">
                        <div className="input-small">
                            <label className="label">Nombres</label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Con quien desarrollo la actividad"
                                onChange={(e) => { handleUniversal(e, setNombres) }}
                                value={nombres}
                                required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap ">
                    <div className=" w-2/5 ">
                        <div className="input-small">
                            <label className="label">Tipo de alojamiento </label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Describa si era hotel,hostal,casa familiar,etc."
                                onChange={(e) => { handleUniversal(e, setTipoAlojamiento) }}
                                value={tipoAlojamiento}
                                required />
                        </div>
                    </div>
                    <div className=" w-1/5 pt-4 ajuste-distancia">
                        <div className="input-small">
                            <label className="label">Nombre de alojamiento </label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Describa la actividad"
                                onChange={(e) => { handleUniversal(e, setNombreAlojamiento) }}
                                value={nombreAlojamiento}
                                required />
                        </div>
                    </div>
                    <div className="w-2/5">
                        <div className="input-small">
                            <label className="label">Dirección alojamiento </label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Dirección del lugar donde se hospedo"
                                onChange={(e) => { handleUniversal(e, setDireccionAlojamiento) }}
                                value={direccionAlojamiento}
                                required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap ">
                    <div className=" w-2/5 ">
                        <div className="input-small">
                            <label className="label">Tipo de restaurante </label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Describa si era restaurante,casa familiar,etc."
                                onChange={(e) => { handleUniversal(e, setTipoRestaurante) }}
                                value={tipoRestaurante}
                                required />
                        </div>
                    </div>
                    <div className=" w-1/5  ajuste-distancia">
                        <div className="input-small">
                            <label className="label">Nombre de restaurante </label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Describa la actividad"
                                onChange={(e) => { handleUniversal(e, setNombreRestaurante) }}
                                value={nombreRestaurante}
                                required />
                        </div>
                    </div>
                    <div className=" w-2/5">
                        <div className="input-small">
                            <label className="label">Dirección restaurante </label>
                            <textarea className="border-gray-400 border text_area"
                                placeholder="Dirección del restaurante "
                                onChange={(e) => { handleUniversal(e, setDireccionRestaurante) }}
                                value={direccionRestaurante}
                                required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap ">
                    <div className="w-2/5 ">
                        <div className="input-small">
                            <label className="label">Tipo de transporte </label>
                            <select className="border-gray-400 border w-full"
                                onChange={(e) => { handleUniversal(e, setTipoTransporte) }}
                                value={tipoTransporte}>
                                <option value="privado">Privado</option>
                                <option value="publico">Público</option>
                                <option value="ninguno">Ninguno</option>
                            </select>
                        </div>
                    </div>
                    <div className=" w-1/5 pt-4">
                        <div className="input-small">
                            <label className="label">EPP Bioseguridad </label>
                            <select className="border-gray-400 border w-full"
                                onChange={(e) => { handleUniversal(e, setEppBioseguridad1) }}
                                value={eppBioseguridad1}>
                                <option value="quirurgico1 ">Tapabocas quirúrgico</option>
                                <option value="antifluidos1 ">Tapabocas antifluidos</option>
                            </select>
                        </div>
                    </div>
                    <div className=" w-2/5 ">
                        <div className="input-small ">
                            <label className="label">EPP Bioseguridad </label>
                            <select className="border-gray-400 border w-full"
                                onChange={(e) => { handleUniversal(e, setEppBioseguridad2) }}
                                value={eppBioseguridad2}>
                                <option value="quirurgico2">Tapabocas quirúrgico</option>
                                <option value="antifluidos2 ">Tapabocas antifluidos</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap">
                    <div className="w-3/5"></div>
                    <div className="flex flex-row-reverse w-2/5">
                        <button className="boton_form bg-red-600"
                            onClick={handleGuardar}
                        ><p>GUARDAR</p></button>
                        <Link  to="./reportediario"><p className="boton_form bg-gray-400">CANCELAR</p></Link>
                    </div>
                </div>

            </form>
        </div>
    );
}

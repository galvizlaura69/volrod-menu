import React from 'react';
import './style.css';

export default function FormularioDañoSistemas() {
    return (
        <div className=" w-4/5">
            <h1 className="pb-5 text-gray-600"> REPORTE DE DAÑO EQUIPO</h1>
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
                            <input className="border-gray-400 border w-full bg-gray-200 pequeños" type="date" placeholder=" 00/00/0000" required />
                        </div>
                    </div>
                    <div className="w-1/5 ">
                        <div className="input-small ">
                            <label className="label" >Numero de personas con las que tuvo contacto </label>
                            <input className="border-gray-400 border w-full bg-gray-200 pequeños" type="number" placeholder="0" required />
                        </div>
                    </div>
                    <div className="w-1/5">
                        <div div className="input-small">
                            <label className="label">Distancia durante el desarrollo de la actividad </label>
                            <select className="border-gray-400 border w-full bg-gray-200 pequeños">
                                <option value="menor">Menor a 2m</option>
                                <option value="mayor">Mayor a 2m</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-1/5 ">
                        <div className="input-small">
                            <label className="label label-small">Tiempo que duro la actividad </label>
                            <input className="border-gray-400 border w-full bg-gray-200 pequeños" type="text" placeholder="Hrs,Min" required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap content-center  ">
                    <div className="w-2/5">
                        <div className="input-small">
                            <label className="label">Lugar (Departamento, Municipio, Vereda)</label>
                            <textarea className="border-gray-400 border text_area" placeholder="Donde se desarrollo la actividad" required />
                        </div>
                    </div>
                    <div className=" w-1/5  ajuste-distancia">
                        <div className="input-small">
                            <label className="label">Actividad desarrollada</label>
                            <textarea className="border-gray-400 border text_area" placeholder="Describa la actividad" required />
                        </div>
                    </div>
                    <div className=" w-2/5 ">
                        <div className="input-small">
                            <label className="label">Nombres</label>
                            <textarea className="border-gray-400 border text_area" placeholder="Con quien desarrollo la actividad" required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap ">
                    <div className=" w-2/5 ">
                        <div className="input-small">
                            <label className="label">Tipo de alojamiento </label>
                            <textarea className="border-gray-400 border text_area" placeholder="Describa si era hotel,hostal,casa familiar,etc." required />
                        </div>
                    </div>
                    <div className=" w-1/5 pt-4 ajuste-distancia">
                        <div className="input-small">
                            <label className="label">Nombre de alojamiento </label>
                            <textarea className="border-gray-400 border text_area" placeholder="Describa la actividad" required />
                        </div>
                    </div>
                    <div className="w-2/5">
                        <div className="input-small">
                            <label className="label">Dirección alojamiento </label>
                            <textarea className="border-gray-400 border text_area" placeholder="Dirección del lugar donde se hospedo" required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap ">
                    <div className=" w-2/5 ">
                        <div className="input-small">
                            <label className="label">Tipo de restaurante </label>
                            <textarea className="border-gray-400 border text_area" placeholder="Describa si era restaurante,casa familiar,etc." required />
                        </div>
                    </div>
                    <div className=" w-1/5  ajuste-distancia">
                        <div className="input-small">
                            <label className="label">Nombre de restaurante </label>
                            <textarea className="border-gray-400 border text_area" placeholder="Describa la actividad" required />
                        </div>
                    </div>
                    <div className=" w-2/5">
                        <div className="input-small">
                            <label className="label">Dirección restaurante </label>
                            <textarea className="border-gray-400 border text_area" placeholder="Dirección del restaurante " required />
                        </div>
                    </div>
                </div>

                <div className="flex  flex-wrap ">
                    <div className="w-2/5 ">
                        <div className="input-small">
                            <label className="label">Tipo de transporte </label>
                            <select className="border-gray-400 border w-full ">
                                <option value="privado">Privado</option>
                                <option value="publico">Público</option>
                                <option value="ninguno">Ninguno</option>
                            </select>
                        </div>
                    </div>
                    <div className=" w-1/5 pt-4">
                        <div className="input-small">
                            <label className="label">EPP Bioseguridad </label>
                            <select className="border-gray-400 border w-full ">
                                <option value="quirurgico1 ">Tapabocas quirúrgico</option>
                                <option value="antifluidos1 ">Tapabocas antifluidos</option>
                            </select>
                        </div>
                    </div>
                    <div className=" w-2/5 ">
                        <div className="input-small ">
                            <label className="label">EPP Bioseguridad </label>
                            <select className="border-gray-500 border w-full ">
                                <option value="quirurgico2">Tapabocas quirúrgico</option>
                                <option value="antifluidos2 ">Tapabocas antifluidos</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap">
                    <div className="w-3/5"></div>
                    <div className="flex flex-row-reverse w-2/5">
                        <button className="boton_form bg-red-600">GUARDAR</button>
                        <button className="boton_form bg-gray-400">CANCELAR</button>
                    </div>
                </div>

            </form>
        </div>
    );
}
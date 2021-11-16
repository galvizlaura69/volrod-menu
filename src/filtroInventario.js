import './style.css';
import React, { useState } from 'react';

export default function FiltroInventario() {


    const datosTablaInventario = [
        {
            codigo: 'ADC2',
            marca: 'win',
            estadoDelEquipo: 'de baja',
            estadoCertificacion: 'vigente',
            nombreDelEquipo: 'medidor',
        },
        {
            codigo: 'ADC4',
            marca: 'electronic',
            estadoDelEquipo: 'dañado',
            estadoCertificacion: 'vigente',
            nombreDelEquipo: 'temporizador',
        },
        {
            codigo: 'ADC17',
            marca: 'textes',
            estadoDelEquipo: 'reparación',
            estadoCertificacion: 'vigente',
            nombreDelEquipo: 'medidor',
        },
    ];

    //aqui se definen los estados 

    const [filtroCodigo, setFiltroCodigo] = useState('');

    const [filtroMarca, setFiltroMarca] = useState('');

    const [filtroNombreDelEquipo, setFiltroNombreDelEquipo] = useState('');

    const [filtroEstadoDelEquipo, setFiltroEstadoDelEquipo] = useState('');

    const [datosFiltradosParaMostrar, setDatosFiltradosParaMostrar] = useState('');


    //Aqui se define una funcion que retorna una respuesta
    const filtradoCodigo = (serie) => {
        //aqui se hace el filtrado//
        const respuesta = datosTablaInventario.filter(
            (registro) => registro.codigo === serie
        );
        //la funcion retorna el resultado del filtro
        return respuesta;
    };

    const filtradonombreDelEquipo = (nombre) => {
        const respuesta = datosTablaInventario.filter(
            (registro) => registro.nombreDelEquipo === nombre
        );
        return respuesta;
    };

    const filtradoMarca = (nombre) => {
        const respuesta = datosTablaInventario.filter(
            (registro) => registro.marca === nombre
        );
        return respuesta;
    };

    const filtradoEstadoDelEquipo = (estado) => {
        const respuesta = datosTablaInventario.filter(
            (registro) => registro.estadoDelEquipo === estado
        );
        return respuesta;
    };

    // Aqui llamo la funcion y almaceno su respuesta en una constante

    const datosFiltradocodigo = filtradoCodigo(filtroCodigo);

    const datosFiltradosmarca = filtradoMarca(filtroMarca);

    const datosFiltradosnombreDelEquipo = filtradonombreDelEquipo(filtroNombreDelEquipo);

    const datosFiltradosEstadoDelEquipo = filtradoEstadoDelEquipo(filtroEstadoDelEquipo);

    //Esta funcion se dispara o es llamada cuando cambia el valor dentro del input es decir cuando se dispara el evento onChange del input.

    const handleInputChange = (event) => {
        setFiltroCodigo(event.target.value);
    };
    const inputMarcaChange = (event) => {
        setFiltroMarca(event.target.value);
    };
    const inputNombreDelEquipoChange = (event) => {
        setFiltroNombreDelEquipo(event.target.value);
    };
    const inputEstadoDelEquipoChange = (event) => {
        setFiltroEstadoDelEquipo(event.target.value);
    };

    return (
        <div>
            {datosFiltradosEstadoDelEquipo.map((item) => (
                <div>
                    <p>{item.codigo}</p>
                    <p>{item.marca}</p>
                    <p>{item.estadoDelEquipo}</p>
                    <p>{item.nombreDelEquipo}</p>
                    <p>{item.estadoCertificacion}</p>
                </div>
            ))}
            <div>
                <div className="flex mb-10">
                    <input
                        type="text"
                        placeholder="CODIGO"
                        className="form-control"
                        onChange={handleInputChange}
                        name="nombre"
                        value={filtroCodigo}>
                    </input>
                </div>

                <div className="flex mb-10">
                    <input
                        type="text"
                        placeholder="MARCA"
                        className="form-control"
                        onChange={inputMarcaChange}
                        name="nombre"
                        value={filtroMarca}>
                    </input>
                </div>
                <div className="flex mb-10">
                    <input
                        type="text"
                        placeholder="NOMBRE DEL EQUIPO"
                        className="form-control"
                        onChange={inputNombreDelEquipoChange}
                        name="nombre"
                        value={filtroNombreDelEquipo}>
                    </input>
                </div>
                <div className="flex mb-10">
                    <input
                        type="text"
                        placeholder="ESTADO DEL EQUIPO"
                        className="form-control"
                        onChange={inputEstadoDelEquipoChange}
                        name="nombre"
                        value={filtroEstadoDelEquipo}>
                    </input>
                </div>
            </div>
        </div>
    );
}

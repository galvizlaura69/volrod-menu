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
            estadoCertificacion: 'vencida',
            nombreDelEquipo: 'medidor',
        },
    ];

    //aqui se definen los estados 

    const [filtroCodigo, setFiltroCodigo] = useState('');

    const [filtroMarca, setFiltroMarca] = useState('');

    const [filtroNombreDelEquipo, setFiltroNombreDelEquipo] = useState('');

    const [filtroEstadoDelEquipo, setFiltroEstadoDelEquipo] = useState('');

    const [filtroEstadoCertificacion, setFiltroEstadoCertificacion] = useState('');

    const [datosListaMostrar, setListaMostrar] = useState(datosTablaInventario);


    //Aqui se define una funcion que retorna una respuesta

    const filtradoCodigo = (serie) => {
        //aqui se hace el filtrado//
        const respuesta = datosTablaInventario.filter(
            (registro) => registro.codigo === serie
        );
        setListaMostrar(datosTablaInventario);
        setListaMostrar(respuesta);
    };

    const filtradonombreDelEquipo = (nombre) => {
        const respuesta = datosTablaInventario.filter(
            (registro) => registro.nombreDelEquipo === nombre
        );
        setListaMostrar(datosTablaInventario);
        setListaMostrar(respuesta);
    };


    const filtradoMarca = (nombre) => {
        const respuesta = datosTablaInventario.filter((registro) => registro.marca === nombre
        );
        setListaMostrar(datosTablaInventario);
        setListaMostrar(respuesta);
    };

    const filtradoEstadoDelEquipo = (estado) => {
        const respuesta = datosTablaInventario.filter((registro) => registro.estadoDelEquipo === estado
        );
        setListaMostrar(datosTablaInventario);
        setListaMostrar(respuesta);
    };

    const filtradoEstadoCertificacion = (estado) => {
        const respuesta = datosTablaInventario.filter((registro) => registro.estadoCertificacion === estado
        );
        setListaMostrar(datosTablaInventario);
        setListaMostrar(respuesta);
    };

    const limpiarfiltro = () => {
        setListaMostrar(datosTablaInventario);
    };

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

    const inputEstadoCertificacionChange = (event) => {
        setFiltroEstadoCertificacion(event.target.value)
    };

    return (
        <div className="w-4/5">
            <div className="flex" >
                <div className=" w-1/5">
                    <div className=" p-3">
                        <input 
                            type="text"
                            placeholder="CODIGO"
                            className="filtros border border-gray-500"
                            onChange={handleInputChange}
                            name="nombre"
                            value={filtroCodigo}>
                        </input>
                        <button className="boton_filtro" onClick={() => { filtradoCodigo(filtroCodigo) }}>Codigo</button>
                    </div>
                </div>
                <div className="w-1/5">
                    <div className="p-3 ">
                        <input
                            type="text"
                            placeholder="MARCA"
                            className="filtros"
                            onChange={inputMarcaChange}
                            name="nombre"
                            value={filtroMarca}>
                        </input>
                        <button className="boton_filtro" onClick={() => { filtradoMarca(filtroMarca) }}>Marca</button>
                    </div>
                </div>
                <div className="w-1/5">
                    <div className="p-3">
                        <input 
                            type="text"
                            placeholder="NOMBRE EQUIPO"
                            className="filtros"
                            onChange={inputNombreDelEquipoChange}
                            name="nombre"
                            value={filtroNombreDelEquipo}>
                        </input>
                        <button className="boton_filtro" onClick={() => { filtradonombreDelEquipo(filtroNombreDelEquipo) }}>Nombre</button>
                    </div>
                </div>
                <div className=" w-1/5 ">
                    <div className=" p-3 ">
                        <input
                            type="text"
                            placeholder="EST EQUIPO"
                            className="filtros"
                            onChange={inputEstadoDelEquipoChange}
                            name="nombre"
                            value={filtroEstadoDelEquipo}>
                        </input>
                        <button className="boton_filtro" onClick={() => { filtradoEstadoDelEquipo(filtroEstadoDelEquipo) }}>Estado equipo</button>
                    </div>
                </div>
                <div className= "w-1/5 ">
                    <div className=" p-3">
                        <input 
                            type="text"
                            placeholder="EST CERTIFICADO"
                            className="filtros"
                            onChange={inputEstadoCertificacionChange}
                            name="nombre"
                            value={filtroEstadoCertificacion}>
                        </input>
                        <button className="boton_filtro" onClick={() => { filtradoEstadoCertificacion(filtroEstadoCertificacion) }}>Estado Certificado</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap pt-10">
                <div className="w-3/5"></div>
                <div className="flex flex-row-reverse w-2/5">
                    <button className="boton_generico" onClick={() => {
                        limpiarfiltro();
                    }}>Limpiar filtro</button>
                </div>
            </div>
            {datosListaMostrar.map((item) => (
                <div>
                    <p>{item.codigo}</p>
                    <p>{item.marca}</p>
                    <p>{item.estadoDelEquipo}</p>
                    <p>{item.nombreDelEquipo}</p>
                    <p>{item.estadoCertificacion}</p>
                </div>
            ))}
     </div>
    );
}
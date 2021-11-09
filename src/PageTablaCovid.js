import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function PageTablaCovid() {

  const datosTabla = [
    {
      cedula: 1023962858,
      fechaReportada: '22/07/21',
      lugarDepartamento: 'Caqueta',
      actividadDesarrolada: 'soldadura',
      numeroDePersonas: 4,
      nombres:'susana, cristina, camilo, fabian',
      tipoAlojamiento:'hotel',
      nombreAlojamiento:'paraiso',
      direccionAlojamiento:'cra 6 sur',
      tipoRestaurante:'domicilio',
      nombreRestaurante:' sopas',
      direccionRestaurante:'carrera 56 norte',
      tipoTransporte:'publico',
      distanciaActividad:'menos de 2m',
      tiempoActividad:'30 minutos',
      bioseguridad1:'tapabocas antifluidos',
      bioseguridad2:'tapabocas quirurgico',

    },
    {
      cedula: 52166961,
      fechaReportada: '18/05/21',
      lugarDepartamento: ' Casanare',
      actividadDesarrolada: 'Mantenimiento',
      numeroDePersonas: 2,
      nombres:'laura,yeison',
      tipoAlojamiento:'Nucleo familiar',
      nombreAlojamiento:'paraiso',
      direccionAlojamiento:'cra 4 sur',
      tipoRestaurante:'domicilio',
      nombreRestaurante:' caldero doña ceci',
      direccionRestaurante:'carrera 56 norte',
      tipoTransporte:'privado',
      distanciaActividad:'mas de 2m',
      tiempoActividad:'1 hora',
      bioseguridad1:'tapabocas antifluidos',
      bioseguridad2:'tapabocas quirurgico',
    },
    {
      cedula: 1023879657,
      fechaReportada: '08/02/21',
      lugarDepartamento: 'Arauca',
      actividadDesarrolada: 'Soldadura',
      numeroDePersonas: 3,
      nombres:'cristina,yeison,laura',
      tipoAlojamiento:'hotel',
      nombreAlojamiento:'paraiso',
      direccionAlojamiento:'cra 4 sur',
      tipoRestaurante:'domicilio',
      nombreRestaurante:' caldero doña ceci',
      direccionRestaurante:'carrera 56 norte',
      tipoTransporte:'privado',
      distanciaActividad:'mas de 2m',
      tiempoActividad:'1 hora',
      bioseguridad1:'tapabocas antifluidos',
      bioseguridad2:'tapabocas quirurgico',
    }
  ];

  return (
    <div className="pagina pr-5 min-w-max">
      <Link  to="./reportediario"><p className="boton_generico w-40 p-3 text-center ">VOLVER</p></Link>
      <div className="tabla mt-5">
        <div className=" titulotabla flex min-w-max bg-gray-800 text-white pt-2">
          <div className="w-80 text-center border-solid">
            Cedula
          </div>
          <div className=" w-80 text-center ">
            Fecha reportada
          </div>
          <div className=" w-80 text-center">
            Lugar (Departamento, Municio, Vereda)
          </div>
          <div className="w-80 text-center">
            Actividad desarrollada
          </div>
          <div className="w-80 text-center">
            Numero de personas con las que tuvo contacto
          </div>
          <div className="w-80 text-center">
            Nombres
          </div>
          <div className="w-80 text-center">
            Tipo de Alojamiento
          </div>
          <div className="w-80 text-center">
            Nombre alojamiento
          </div>
          <div className="w-80 text-center">
            Dirección alojamiento
          </div>
          <div className="w-80 text-center">
            Tipo de Restaurante
          </div>
          <div className="w-80 text-center">
            Nombre restaurante
          </div>
          <div className="w-80 text-center">
            Dirección restaurante
          </div>
          <div className="w-80 text-center">
           Tipo de Transporte
          </div>
          <div className="w-80 text-center">
           Distancia durante el desarrollo de la actividad
          </div>
          <div className="w-80 text-center">
           Tiempo en el que duro la actividad
          </div>
          <div className="w-80 text-center">
           Epp Bioseguridad
          </div>
          <div className="w-80 text-center">
           Epp Bioseguridad
          </div>
        </div>



        {datosTabla.map(registro => {
          return (
            <div className=" filatabla flex min-w-max  bg-white">
              <div className="w-80 text-center border-red-500 border">
                {registro.cedula}
              </div>
              <div className=" w-80 text-center border-red-500 border">
                {registro.fechaReportada}
              </div>
              <div className=" w-80 text-center border-red-500 border">
                {registro.lugarDepartamento}
              </div>
              <div className=" w-80 text-center border-red-500 border">
                {registro.actividadDesarrolada}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.numeroDePersonas}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.nombres}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.tipoAlojamiento}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.nombreAlojamiento}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.direccionAlojamiento}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.tipoRestaurante}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.nombreRestaurante}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.direccionRestaurante}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.tipoTransporte}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.distanciaActividad}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.tiempoActividad}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.bioseguridad1}
              </div>
              <div className="w-80 text-center border-red-500 border">
                {registro.bioseguridad2}
              </div>
            </div>

          )
        })
        }

      </div>
    </div>
  );
}

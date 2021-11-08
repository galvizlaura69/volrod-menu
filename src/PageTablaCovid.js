import React from 'react';
import './style.css';

export default function PageTablaCovid() {

  const datosTabla = [
    {
      cedula: 1023962858,
      fechaReportada: '22/07/21',
      lugarDepartamento: 'Caqueta',
      actividadDesarrolada: 'soldadura',
      numeroDePersonas: 4,
    },
    {
      cedula: 52166961,
      fechaReportada: '18/05/21',
      lugarDepartamento: ' Casanare',
      actividadDesarrolada: 'Mantenimiento',
      numeroDePersonas: 2,
    },
    {
      cedula: 1023879657,
      fechaReportada: '08/02/21',
      lugarDepartamento: ' Casanare',
      actividadDesarrolada: 'Soldadura',
      numeroDePersonas: 3,
    }
  ];

  return (
    <div className="pagina">
      <h1>Tabla Covid</h1>
      <div className="tabla">
        <div className=" titulotabla flex min-w-max bg-gray-800 text-white p-3">
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
            Nombre
          </div>
          <div className="w-80 text-center">
            Dirrección
          </div>
          <div className="w-80 text-center">
            Tipo de Restaurante
          </div>
          <div className="w-80 text-center">
            Nombre
          </div>
          <div className="w-80 text-center">
            Dirrección
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
            </div>

          )
        })
        }

      </div>
    </div>
  );
}

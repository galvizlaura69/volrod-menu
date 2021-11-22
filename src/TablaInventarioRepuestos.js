import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function TablaInventarioRepuestos() {

  const repuestos = [
    {
     nombreRepuesto:'xxx',
     cantidad:'2 unidades',
     estadoRepuesto:'nuevo',
     marca:'xxx'


    },
    {
        nombreRepuesto:'xxx',
        cantidad:'2 unidades',
        estadoRepuesto:'nuevo',
        marca:'xxx'
   
    },
    {
        nombreRepuesto:'yyy',
        cantidad:' 100 unidades',
        estadoRepuesto:'usado',
        marca:'patico'   
    }
  ];

  return (
    <div className="pagina pr-5 min-w-max">
      <Link  to="./almacen"><p className="boton_generico w-40 p-3 text-center ">VOLVER</p></Link>
      <div className="tabla mt-5">
        <div className=" titulotabla flex min-w-max bg-gray-800 text-white pt-2">
          <div className="w-80 text-center border-solid">
            Nombre del repuesto
          </div>
          <div className=" w-80 text-center ">
            Cantidad
          </div>
          <div className=" w-80 text-center">
            Estado del repuesto
          </div>
          <div className="w-80 text-center">
            Marca
          </div>
        </div>



        {repuestos.map(registro => {
          return (
            <div className=" filatabla flex min-w-max  bg-white">
              <div className="w-80 text-center border-red-500 border">
                {registro.nombreRepuesto}
              </div>
              <div className=" w-80 text-center border-red-500 border">
                {registro.cantidad}
              </div>
              <div className=" w-80 text-center border-red-500 border">
                {registro.estadoRepuesto}
              </div>
              <div className=" w-80 text-center border-red-500 border">
                {registro.marca}
              </div>
            </div>

          )
        })
        }

      </div>
    </div>
  );
}

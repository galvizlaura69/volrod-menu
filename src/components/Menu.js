import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className=" menu w-full min-w-min	h-screen bg-gray-800 p-5">
      <h2 className="pb-8 text-xs pt-6">Bienvenido superadmin</h2>
      <Link className="block pb-16 text-xs" to="/">
        Dash board
      </Link>
      <div className="grid grid-cols-2 pb-9 items-stretch">
        <div className="col-span-1  ">
          <img
            className=" m-auto mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="col-span-1 ">
          <ul>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/almacen">
                ALMACÉN
              </Link>
            </li>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/vehiculos">
                VEHÍCULOS
              </Link>
            </li>
            <li>
              <Link className="block text-xs text-gray-400" to="/sistemas">
                SISTEMAS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 pb-9 items-stretch">
        <div className="col-span-1  ">
          <img
            className=" m-auto mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="col-span-1 ">
          <ul>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/reportediario">
                REPORTE DIARIO
              </Link>
            </li>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/talentohumano">
                TALENTO HUMANO
              </Link>
            </li>
            <li>
              <Link className="block text-xs text-gray-400" to="/solicitudesth">
                SOlICITUDES TH
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 pb-9 items-stretch">
        <div className="col-span-1  ">
          <img
            className=" m-auto mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="col-span-1 ">
          <ul>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/calidad">
                CALIDAD
              </Link>
            </li>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/compras">
                COMPRAS
              </Link>
            </li>
            <li>
              <Link className="block text-xs text-gray-400" to="/contabilidad">
                CONTABILIDAD
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 pb-9 items-stretch">
        <div className="col-span-1  ">
          <img
            className=" m-auto mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="col-span-1 ">
          <ul>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/hse">
                HSE
              </Link>
            </li>
            <li>
              {' '}
              <Link className="block text-xs text-gray-400 m-0" to="/operaciones">
                OPERACIONES
              </Link>
            </li>
            <li>
              <Link className="block text-xs text-gray-400" to="/comercial">
                COMERCIAL
              </Link>
            </li>
          </ul>
        </div>
      </div>
   </div>   
  );
}

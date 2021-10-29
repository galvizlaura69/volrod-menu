import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className=" menu w-1/6 overflow-hidden	h-screen bg-gray-800 ">
      <div className="listadomenu pl-4">
      <img className=" m-auto mt-5 w-3/5" src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/WhatsApp%20Image%202021-10-29%20at%2011.47.02%20AM.jpeg?alt=media&token=d4216141-6be3-4f1b-8258-d19b8dcece17"/>
      <h2 className=" text-xs pt-6 text-white">
        <img
          className="inline-block brand-icon"
          src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/WhatsApp%20Image%202021-10-29%20at%2011.47.18%20AM.jpeg?alt=media&token=b9882166-61f9-43a5-bcb1-6b65c923da8d"
        />
        <b className="text-red-500">Bienvenido</b> superadmin
      </h2>
      <Link className="block  text-xs" to="/">
      <p className="pb-8 text-xs pt-6 text-white">
      <img
          className="inline-block brand-icon"
          src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/WhatsApp%20Image%202021-10-29%20at%2012.02.11%20PM.jpeg?alt=media&token=183c14ff-4dc0-40ed-bc16-8b3d5e2cf688"
        />
        <b className="text-red-500">Dash</b>board
      </p>
      </Link>
      <div className="flex flex-wrap overflow-hidden pb-6">
        <div className="w-1/3 ">
          <img
            className=" mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="w-2/3  ">
          <ul>
            <li>
              <Link className="block text-xs text-gray-400 m-0" to="/almacen">
                ALMACÉN
              </Link>
            </li>
            <li>
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

      <div className="flex flex-wrap overflow-hidden pb-6">
         <div className="w-1/3 ">
          <img
            className=" mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="w-2/3  ">
          <ul>
            <li>
              <Link className="block text-xs text-gray-400 m-0" to="/reportediario">
                REPORTE DIARIO
              </Link>
            </li>
            <li>
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

      <div className="flex flex-wrap overflow-hidden pb-6">
         <div className="w-1/3 ">
          <img
            className=" mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="w-2/3  ">
          <ul>
            <li>
              <Link className="block text-xs text-gray-400 m-0" to="/calidad">
                CALIDAD
              </Link>
            </li>
            <li>
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

      <div className="flex flex-wrap overflow-hidden pb-6">
        <div className="w-1/3 ">
          <img
            className="mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/20176.png?alt=media&token=95585479-cf4c-48d1-a605-7a27ee8a3685"
          />
        </div>
        <div className="w-2/3  ">
          <ul>
            <li>
              <Link className="block text-xs text-gray-400 m-0" to="/hse">
                HSE
              </Link>
            </li>
            <li>
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
      <div className="h-1/4 bg-gray-900">
         <ul>
             <li>
              <Link className=" p-2 pl-5 text-xs text-gray-400 m-0" to="/vip">
                VIP
              </Link>
              <img
             className="inline-block brand-icon float-right mr-5"
             src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/WhatsApp%20Image%202021-10-29%20at%2012.33.15%20PM.jpeg?alt=media&token=3273a79c-b3a7-4b4c-8a1d-89977b3f8c43"
             />
              <img
             className="inline-block brand-icon float-right"
             src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/WhatsApp%20Image%202021-10-29%20at%2012.33.06%20PM.jpeg?alt=media&token=d1f177c2-8476-439e-86a2-29297cf251bf"
             />
             </li>
         </ul>
      </div>
   </div>   
  );
}

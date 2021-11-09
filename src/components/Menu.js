import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className=" menu w-1/6 overflow-hidden	h-screen bg-gray-800 ">
      <div className="listadomenu h-4/5 pl-4">
      <img className=" m-auto mt-5 w-3/5 menu-logo" src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/logo-02.png?alt=media&token=5c545e59-ca54-4612-89d2-467e4fbd8566"/>
      <h2 className=" text-xs pt-6 text-white">
        <img
          className="inline-block brand-icon"
          src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/logo-03.png?alt=media&token=d5e97ddf-80b5-4b90-9652-a1431d9a8aaa"
        />
        <b className="text-red-500 pl-2">Bienvenido</b> superadmin
      </h2>
      <Link className="block pb-6  text-xs" to="/">
      <p className="pb-5 text-xs pt-6 text-white">
      <img
          className="inline-block brand-icon"
          src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/Icons-red-08.png?alt=media&token=dce14ad7-2a20-4436-ad8b-a01dc205c209"
        />
        <b className="text-red-500 pl-2"> Dash</b>board
      </p>
      </Link>
      <div className="flex flex-wrap overflow-hidden pb-6">
        <div className="w-1/3 ">
          <img
            className=" mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/Icons-04.png?alt=media&token=7dd075e0-7e4d-46bc-b7f7-1e59021e1e74"
          />
        </div>
        <div className="w-2/3  ">
          <ul>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800" to="/almacen">
                ALMACÉN
              </NavLink>
            </li>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800" to="/vehiculos">
                VEHÍCULOS
              </NavLink>
            </li>
            <li>
              <NavLink className="block text-xs text-gray-400" activeClassName="bg-red-800" to="/sistemas">
                SISTEMAS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden pb-6">
         <div className="w-1/3 ">
          <img
            className=" mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/Icons-05.png?alt=media&token=9140c0ba-29be-45ec-92d2-663e3f2c9605"
          />
        </div>
        <div className="w-2/3  ">
          <ul>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800" to="/reportediario">
                REPORTE DIARIO
              </NavLink>
            </li>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800"  to="/talentohumano">
                TALENTO HUMANO
              </NavLink>
            </li>
            <li>
              <NavLink className="block text-xs text-gray-400 " activeClassName="bg-red-800"   to="/solicitudesth">
                SOlICITUDES TH
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden pb-6">
         <div className="w-1/3 ">
          <img
            className=" mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/Icons-03.png?alt=media&token=c24abdf9-073e-47bd-a0ac-8a408553df03"
          />
        </div>
        <div className="w-2/3  ">
          <ul>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800" to="/calidad">
                CALIDAD
              </NavLink>
            </li>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800" to="/compras">
                COMPRAS
              </NavLink>
            </li>
            <li>
              <NavLink className="block text-xs text-gray-400" activeClassName="bg-red-800" to="/contabilidad">
                CONTABILIDAD
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden pb-6">
        <div className="w-1/3 ">
          <img
            className="mt-2 icon-menu  object-center opacity-20	"
            src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/Icons-02.png?alt=media&token=e5d34a33-ee2f-45a7-9374-d4a7e060ba83"
          />
        </div>
        <div className="w-2/3 pb-4 ">
          <ul>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800" to="/hse">
                HSE
              </NavLink>
            </li>
            <li>
              <NavLink className="block text-xs text-gray-400 m-0" activeClassName="bg-red-800"b to="/operaciones">
                OPERACIONES
              </NavLink>
            </li>
            <li>
              <NavLink className="block  text-xs text-gray-400" activeClassName="bg-red-800" to="/comercial">
                COMERCIAL
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div className="h-1/5 bg-gray-900">
         <ul className="menu-vip">
             <li>
              <NavLink className=" p-2 pl-5 text-xs text-gray-400 m-0" activeClassName="bg-red-800" to="/vip">
                VIP
              </NavLink>
              <img
             className="inline-block brand-iconvip float-right mr-5"
             src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/Icons-red-06.png?alt=media&token=9028a99e-6d2e-497c-a7c3-f404b3da3fd5"
             />
              <img
             className="inline-block brand-iconvip float-right"
             src="https://firebasestorage.googleapis.com/v0/b/volrod-menu.appspot.com/o/Icons-red-07.png?alt=media&token=01c4c10c-bb22-4322-8293-4d859409be8d"
             />
             </li>
         </ul>
      </div>
   </div>   
  );
}

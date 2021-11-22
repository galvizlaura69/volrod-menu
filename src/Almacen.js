import React, { useEffect, useState } from 'react';
import './style.css';
import obtenerInventario from './services/obtenerInventario';
import borrarProducto from './services/borrarProducto';
import actualizarProducto from './services/actualizarProducto';
import crearProducto from './services/crearProducto';


export default function Almacen() {


  const [mostrarInventario, setMostrarInventario] = useState([]);

  useEffect(async () => {
    const inventario = await obtenerInventario();
    setMostrarInventario(inventario);
  }, []);

  const handleBorrar = async (id) => {
    const respuestaBorrar = await borrarProducto(id);
    console.log(respuestaBorrar);
  };

  const objetoCualquiera = { id: 1, codigo: 'ACD1', marca: 'win' };


  const handleActualizar = async (id, productoRecibido ) => { 
    const respuestaActualizar = await actualizarProducto(id,productoRecibido );
    console.log(respuestaActualizar);
  };

  
  const handleCrear= async ( productoRecibido ) => { 
    const respuestaCrear= await crearProducto(productoRecibido );
    console.log(respuestaCrear);
  };



  return (

    <div>
      <button
      className="boton_generico"
        onClick={() => { handleBorrar(0) }}
      >borrar</button>
      <button
      className="boton_generico"
        onClick={() => { handleActualizar(0, objetoCualquiera ) }}>
        actualizar
      </button>
      <button
       className="boton_generico"
        onClick={() => { handleCrear( objetoCualquiera ) }}>
        crear
      </button>
      <h1>Almacen</h1>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './style.css';
import obtenerInventario from './services/obtenerInventario';
import borrarProducto from './services/borrarProducto';


export default function Almacen() {


  const [mostrarInventario, setMostrarInventario] = useState([]);

  useEffect(async () => {
    const inventario = await obtenerInventario();
    console.log(inventario[0]);
    setMostrarInventario(inventario);
  }, []);

  const handleBorrar = async (id) => {
    const respuestaBorrar = await borrarProducto(id);
    console.log(respuestaBorrar);
  };
  
  const objetocualquiera = {id:1,codigo:'ACD1',marca:'win'};

  return (

    <div>
     
      <h1>Almacen</h1>
    </div>
  );
}

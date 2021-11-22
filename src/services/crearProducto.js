import axios from 'axios';
axios.defaults.timeout = 100000;




 const crearProducto = async ( nuevoProducto) => {

   const url = 'http://localhost:8000/crear-producto/';

  try {
    const {data} = await axios.post(url ,nuevoProducto);
    return data;
  } catch (e) {
    console.log(e, 'el error q busco');
  }
};

export default crearProducto;
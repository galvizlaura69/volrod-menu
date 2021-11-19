import axios from 'axios';
axios.defaults.timeout = 100000;




 const crearProducto = async (id) => {

   const url = 'http://localhost:8000/crear-producto/'+ id;

  try {
    const {data} = await axios.post(url ,{});
    return data;
  } catch (e) {
    console.log(e, 'el error q busco');
  }
};

export default crearProducto;
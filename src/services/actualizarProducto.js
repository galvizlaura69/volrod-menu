import axios from 'axios';
axios.defaults.timeout = 100000;




 const actualizarProducto = async (id) => {

   const url = 'http://localhost:8000/actualizar-producto/'+ id;

  try {
    const {data} = await axios.put(url ,{});
    return data;
  } catch (e) {
    console.log(e, 'el error q busco');
  }
};

export default actualizarProducto;
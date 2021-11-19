import axios from 'axios';
axios.defaults.timeout = 100000;




 const borrarProducto = async (id) => {

   const url = 'http://localhost:8000/borrar-producto/'+ id;

  try {
    const {data} = await axios.delete(url ,{});
    return data;
  } catch (e) {
    console.log(e, 'el error q busco');
  }
};

export default borrarProducto;
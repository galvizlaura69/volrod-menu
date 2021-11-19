import axios from 'axios';
axios.defaults.timeout = 100000;



const url = 'http://localhost:8000/obtener-inventario';

 const obtenerInventario = async () => {
  try {
    const {data} = await axios.get(url);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e, 'el error q busco');
  }
};

export default obtenerInventario;
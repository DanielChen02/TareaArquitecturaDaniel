import {firebaseCrear } from '../database/firebase';

const crearArticulo = (nombre, descripcion, fecha,precio,url,categoria) => {
    const data = {
      nombre : nombre,
      descripcion : descripcion,
      fecha : fecha,
      precio : precio,
      url : url,
      categoria : categoria,
    };
  
    if (categoria == "Dormitorio"){
      firebaseCrear('articulosDormi', data);
    }
    else if (categoria == "Comedor"){
      firebaseCrear('articulosCome', data);
    }

    else if (categoria == "Cocina"){
      firebaseCrear('articulosCoci', data);
    }

    else if (categoria == "Sala de estar"){
      firebaseCrear('articulosSala', data);
    }
    else{
      firebaseCrear('articulosBan', data);
    }


  }
  export default crearArticulo



import * as React from 'react';
import {Card,CardContent, CardMedia, CardActionArea} from '@material-ui/core';
import { Button } from '@material-ui/core'
import './dormitorioPage.css';
import { useEffect, useState } from 'react';
import './SideBar.css';
import {firebaseBuscar} from "../database/firebase";
import {firebaseEliminar} from "../database/firebase";
import Navbar from "./SideBar"

import {Typography} from '@material-ui/core';


const DormitorioPage=()=>{

 const [articulo, setArticulos] = useState([]);

  useEffect(() => {
    buscarArticulos();
  }, []);

  const buscarArticulos = async () => {
    let resultado = await firebaseBuscar('articulosDormi');
    setArticulos(resultado);
  }

  const elimina = async (coleccion, id) => {
    debugger;
    await firebaseEliminar(coleccion, id);
    alert("Exito al realizar tu compra");
    window.location.reload();
  }

  

  return(

    <div>
     <div>
     <Navbar/>
    </div>
<div id="cardcss">
    {articulo.map((customer) => (
    <Card key={customer.id} >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={customer.url}
        alt="El url debe ser una imagen en linea de formato jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {customer.nombre}
        </Typography>
        <Typography variant="body2" >
          {customer.descripcion}
        </Typography>

        <Typography variant="body2"  >
          {customer.fecha}
        </Typography>
        <Typography variant="body2"  >
          {customer.precio}
        </Typography>
        <Button type='button' variant='contained' color='primary' id="comprar" onClick={() => elimina('articulosDormi', customer.id)}>Comprar</Button>
        <Button  />
      </CardContent>
    </CardActionArea>
  </Card>
  
  ))}
  </div>
    </div>
    
  )
}

export default DormitorioPage

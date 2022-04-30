import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import {Link} from "react-router-dom";
import { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles
} from '@material-ui/core';
import './signup.css';
import crearArticulo from '../logicaNegocios.js/guardarArticulos';


//export const urlDada = valorURL;

const estilo = makeStyles(theme => ({
  FormControl:{
    minWidth:100,
    margin: "0 auto"
  }
}));
  
const Sellform = () => {



    const estilos = estilo();
    const paperStyle = { padding :20,height:'79vh',width:300, margin:"0 auto"}
    const headerStyle = { margin: 0, marginTop: -50}
    const headerStyle2 = { margin: 20 }



    const [valorCategoria, setValorCategoria] = useState('');
    
    const onChangeCategoria = function(valor) {
      setValorCategoria(valor.target.value)
    }

    const [valorURL, setValorURL] = useState('');
    
    const  onChangeURL = function(valor) {
      setValorURL(valor.target.value)
    }
  
  
   

    const [valorNombre, setValorNombre] = useState('');
    
    const onChangeNombre = function(valor) {
        setValorNombre(valor.target.value)
    }

    const [valorDescrip, setValorDescrip] = useState('');
    
    const onChangeDescrip = function(valor) {
        setValorDescrip(valor.target.value)
      }
      
    const [valorPrecio, setValorPrecio] = useState('');
    
    const onChangePrecio = function(valor) {
          setValorPrecio(valor.target.value)
        }


    const [valorFecha, setValorFecha] = useState('');
    
    const onChangeFecha = function(valor) {
          setValorFecha(valor.target.value)
        }

    const Guardado = () => {
      crearArticulo(valorNombre, valorDescrip,valorFecha,valorPrecio,valorURL,valorCategoria);
        debugger;
        alert("Exito al realizar tu formulario");
    }
        
    return (
   
        <Grid align='center'>
            <Paper style={paperStyle} >
            <Grid align='rigth' background-color='black'>
                    <h2 style={headerStyle2} >Proceso de venta del artículo</h2>
                    <div> &nbsp;</div>
                    <div> &nbsp;</div>
                    <div> &nbsp;</div>
                </Grid>
                <Grid align='left'>
                    <h3 style={headerStyle}>Formulario</h3>
                </Grid>
                <form>
                    <TextField fullWidth label='Nombre del artículo' placeholder="Ingresa el nombre"  onChange={onChangeNombre}/>
                    <div> &nbsp;</div>
                    <TextField fullWidth label='Descripción' placeholder="Ingresa la descripción" onChange={onChangeDescrip} />
                    <div> &nbsp;</div>
                    <TextField fullWidth label='Precio del artículo (en dólares)' placeholder="Ingresa el precio" onChange={onChangePrecio} />
                    <div> &nbsp;</div>
                    <TextField fullWidth label='Fecha de publicacion' placeholder="Ingresa la fecha" onChange={onChangeFecha} />
                    <div> &nbsp;</div>
                    <FormControl className={estilos.FormControl}>
                      <InputLabel>Categoria</InputLabel>
                      <Select onChange={onChangeCategoria}>
                        <MenuItem value={"Dormitorio"}>Dormitorio</MenuItem>
                        <MenuItem value={"Comedor"}>Comedor</MenuItem>
                        <MenuItem value={"Cocina"}>Cocina</MenuItem>
                        <MenuItem value={"Sala de estar"}>Sala de estar</MenuItem>
                        <MenuItem value={"Baño"}>Baño</MenuItem>
                        </Select>
                        </FormControl>
                    <TextField fullWidth label='URL con formato jpg' placeholder="Ingresa el URL" onChange={onChangeURL} />
                    <div> &nbsp;</div>
                    <Link to="/dormitorioPage">
                    <Button type='button' variant='contained' color='primary'  onClick={Guardado}>Confirmar</Button>
                    </Link>

                    <Link to="/dormitorioPage">
                    <Button type='button' variant='contained' color='primary' id="regresar">Regresar</Button>
                    </Link>

                </form>
            </Paper>
        </Grid>
    )
}

export default Sellform;



import React from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import { useState } from 'react';
import './signup.css';
import {firebaseRegistrarUsuario} from "../database/firebase";
import {Link} from "react-router-dom";

  
const Signup = () => {

     async function registrarUsuario() {
        await firebaseRegistrarUsuario(valorEmail, valorCon);
        alert("El usuario se registró con éxito.");
      }

      

    const paperStyle = { padding :20,height:'82vh',width:300, margin:"0 auto"}
    const headerStyle = { margin: 0, marginTop: -50}
    const headerStyle2 = { margin: 20 }




    const [valorEmail, setValorEmail] = useState('');
    
    const onChangeEmail = function(valor) {
        setValorEmail(valor.target.value)
      }
    
        

    const [valorCon, setValorCon] = useState('');
    
    const onChangeCon = function(valor) {
        setValorCon(valor.target.value)
    }

    return (

      
        
        <div className="fondoInicio">
        <Grid align='center'>
            <div className="imagenInicio">
            <img 
      src="https://image.freepik.com/psd-gratis/historia-instagram-plantilla-banner-redes-sociales-venta-muebles-lujo-verde_123605-254.jpg"
      alt="new" 
      />
             </div>
            <Paper style={paperStyle} >
            <Grid align='rigth' background-color='black'>
                    <h2 style={headerStyle2} >TheCheapestHome</h2>
                    <div> &nbsp;</div>
                    <div> &nbsp;</div>
                    <div> &nbsp;</div>
                </Grid>
                <Grid align='left'>
                    <h3 style={headerStyle}>Registrate</h3>
                    <Typography variant='caption' gutterBottom>Completa este formulario para crear tu cuenta </Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Nombre' placeholder="Introduce tu nombre" />
                    <div> &nbsp;</div>
                    <TextField fullWidth label='Email' placeholder="Introduce tu email" onChange={onChangeEmail} />
                    <div> &nbsp;</div>
                    <TextField fullWidth label='Numero telefónico' placeholder="Introduce tu número de telefono" />
                    <div> &nbsp;</div>
                    <TextField fullWidth label='Contraseña' placeholder="Introduce tu contraseña" onChange={onChangeCon}/>
                    <div> &nbsp;</div>
                    <div> &nbsp;</div>
                    <Link to="/">
                    <Button type='button' variant='contained' color='primary'  onClick={registrarUsuario}>Confirmar</Button>
                    </Link>
                    
                    
                </form>
            </Paper>
        </Grid>
        </div>
    )
}

export default Signup;




import React from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import {firebaseIniciarSesion} from "../database/firebase";




const Login=()=>{

    let navigate = useNavigate()
    async function iniciarSesion () {
        debugger;
        let sesionIniciada = await firebaseIniciarSesion(valorEmail, valorCon);

        if (sesionIniciada) {
            alert("exito al iniciar");
            navigate("/dormitorioPage");
        } else {
          alert('Las credenciales no son correctas');
          

        }
      }
    

    

    const [valorEmail, setValorEmail] = useState('');
    
    const onChangeEmail = function(valor) {
        setValorEmail(valor.target.value)
      }

      const [valorCon, setValorCon] = useState('');
    
    const onChangeCon = function(valor) {
        setValorCon(valor.target.value)
    }
      

    const paperStyle={padding :20,height:'82vh',width:300, margin:"0 auto", }
    const headerStyle2 = { margin: 50 }
    const headerStyle = { margin: 0 }
    const margenButton={margin:'8px 0'}
    return(


 
        <div className="fondoLogin">
        <div className="imagenInicio">
            <img 
      src="https://image.freepik.com/psd-gratis/historia-instagram-plantilla-banner-redes-sociales-venta-muebles-lujo-verde_123605-254.jpg"
      alt="new" 
      />
             </div>
        <Grid align='center'>
            <Paper  style={paperStyle}>
            <Grid align='rigth' background-color='black'>
                    <h2 style={headerStyle2} >TheCheapestHome</h2>
                </Grid>
            <Grid align='center'>
                    <h2 style={headerStyle}>Bienvenido</h2>
                    <Typography > Encuentra las mejores ofertas al mejor precio</Typography>
                </Grid>
                <TextField label='Email' placeholder='Introduce tu nombre de usuario' fullWidth required onChange={onChangeEmail}/>
                <TextField label='contraseña' placeholder='Introduce tu contraseña' type='password' fullWidth required onChange={onChangeCon} />
                <Button type='button' color='primary' variant="contained" style={margenButton} id="botonVerde" onClick={iniciarSesion} fullWidth>Ingresar</Button>
                <div> &nbsp;</div>
               <Typography > Aún no tienes una cuenta?
                <Link to="/Signup">Registrate</Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}

export default Login
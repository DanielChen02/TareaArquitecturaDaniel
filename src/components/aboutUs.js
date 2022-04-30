import React from 'react'
import { Grid, Paper,Button } from '@material-ui/core'
import './signup.css';
import {Link} from "react-router-dom";
import './aboutUs.css'

const AboutUs = () => {
    const paperStyle = { padding :20,height:'90vh',width:300, margin:"0 auto"}
    const headerStyle2 = { margin: 20 }

    return (
        
        <div className>
        <Grid align='center'>
            <div className="bordeVerdeArriba">
            </div>
            <Paper style={paperStyle} >
            <Grid align='rigth' background-color='black'>
                    <h2 style={headerStyle2} >Conoce a TheCheapestHome</h2>
                    <div> &nbsp;</div>
                    <p>
                    TheCheapestHome es una página web creada y conformada por un grupo de emprendedores
                    costarricenses con años de experiencia en compra y venta de artículos.
                    </p>
                    <div> &nbsp;</div>

                    <p>
                    Aquí podrás encontrar una gran variedad de artículos tecnológicos, de ocio, decoración
                    y herramientas que de  seguro te serán de interes para tu hogar.
                    </p>
                    <div> &nbsp;</div>
                    <p>
                    TheChesapestHome reune las mejores ofertas en cuanto a artículos usados en el mercado y 
                    los pone a tu disposición con tan solo un click. 
                    </p>
                </Grid>
                <form>
                    <div> &nbsp;</div>
                    <Link to='/dormitorioPage'> <Button type='button' variant='contained' color='primary' >Confirmar</Button></Link>
                </form>
            </Paper>
        </Grid>
        </div>
    )
}

export default AboutUs;
import React from 'react'
import './SideBar.css'
import {Link} from "react-router-dom";



const Navbar = () => {

  const headerStyle2 = { margin: "0 auto" }
  return (

    
    <div className = "linksMenu">
          <div className="barraArribaColor">
          
          <Link to="/">
          <button type="button" className = "botonSalir">Salir</button>
          </Link>
          <h2 style={headerStyle2} >TheCheapestHome</h2>
          <Link to="/">
          </Link>
          </div>
          <br/>
          <br/>
      <li> <Link to="/dormitorioPage">Dormitorio</Link></li>
      <br/>
      <br/>
      <li><Link to="/comedorPage">Comedor</Link></li>
      <br/>
      <br/>
      <li><Link to="/cocinaPage">Cocina</Link></li>
      <br/>
      <br/>
      <li><Link to="/salaPage">Sala de estar</Link></li>
      <br/>
      <br/>
      <li><Link to="/banoPage">Baño</Link></li>
      <br/>
      <br/>
      <li><Link to="/Sellform">Realizar una venta</Link></li>
      <br/>
      <br/>
      <li><Link to="/aboutUs">Acerca de nosotros</Link></li>
    </div>
    
  )
}

export default Navbar;
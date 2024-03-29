import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";



export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} width="80" height="50" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item col-6 col-md-auto ">
                <Link className="nav-link active text-primary" aria-current="page" to="/src/views/Urucup/urucup.js">Urucup</Link>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link text-primary" to="/src/views/Eventos/eventos.js">Eventos</Link>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link text-primary" to="/src/views/Quienes-somos/quienesSomos.js">Quienes Somos</Link>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link text-primary" to="/src/views/Contacto/contacto.js">Contacto</Link>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link text-primary" to="/src/views/Uteco/uteco.js">Uteco</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};
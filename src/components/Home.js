import React from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../images/logo-product.svg";


function Home() {
    return (
        <div className="container">
          
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="" target="_blank">
            <img src={logo} width="30" height="30" alt="" />
          </a>
          <Link to="/" className="navbar-brand">Raitha Setu</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/userRegistration" className="nav-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/Info" className="nav-link">Info</Link>
              </li>
            </ul>
          </div>
        </nav>

     
      </div>
    )
}

export default Home

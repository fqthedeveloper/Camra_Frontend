import React from "react";
import Review from './Review.css';
import avatar from './logo512.png';
import { Link } from "react-router-dom";



function Header(){

    return (

                <div style={Review} className="bg-primary">
                    <nav className="navbar navbar-primary" >
                        <div className="container-fluid">
                            <Link className="navbar-brand font-weight-bold " to="/"><img src={avatar} width='40px' height='40px' alt="logo" className="logo" /> &nbsp;  EAGLE EYE </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end text-bg-primary" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">EAGLE EYE Computers</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                            
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/service">Servise</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/gallery">Gallery</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-primary bg-primary">
                                                <li><Link to="/contact" className="dropdown-item">Contact US</Link></li>
                                                <li><Link to="/reviewadd" className="dropdown-item">Review Add</Link></li>
                                                <li><Link to="/proudect" className="dropdown-item" > Proudect </Link></li>
                                            </ul>
                                        </li>
                                    </ul>                                                                      
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

    );
}

export default Header;
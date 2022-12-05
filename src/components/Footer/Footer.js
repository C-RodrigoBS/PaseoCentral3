import React, { useState, useSyncExternalStore } from "react";
import { useAuth } from "../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faMobileScreen  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (

        <div id="irInformacion">
            <footer>
                <div class="footer-top">
                    <div class="container">
                        <div class="footer-day-time">
                            <div class="row">
                                <div class="col-md-8">
                                    <ul>
                                        <li>Abrimos todos los dias de Lunes a Domingo</li>
                                        <li>Desde las: 8:00 AM - 10:00 PM</li>
                                    </ul>
                                </div>
                                <div class="col-lg-4">
                                    <div class="phone-no">
                                        <a href="+51 932 315 710" style={{textDecoration:'none'}}><i  aria-hidden="true"><FontAwesomeIcon icon={faMobileScreen}/></i>+51 932 315 710</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">

                                <h4>Bienvenidos a Paseo Central</h4>
                                <p>Hola somos Paseo Central el primer mall Arequipeño, puedes venir a visitarnos te esperaremos con muchos regalos y premios. Ven a pasarla bien. </p>

                            </div>

                            <div class="col-md-4">
                                <h4>Información</h4>
                                <ul class="address1">
                                    <li><i> <FontAwesomeIcon icon={faLocationDot}/> </i>Arturo Ibañez, Jacobo Hunter 04011</li>
                                    <li><i> <FontAwesomeIcon icon={faEnvelope}/> </i><a href="mailto:#">gfernandez@bastis.pe</a></li>
                                    <li><i aria-hidden="true"> <FontAwesomeIcon icon={faMobileScreen}/> </i> <a href="tel:+51 932 315 710">+51 932 315 710</a></li>
                                </ul>
                            </div>

                            <div class="col-md-4">
                                <h4>Redes Sociales</h4>
                                <ul class="social-icon">
                                    <li><a href="#"><i aria-hidden="true"><FontAwesomeIcon icon={faFacebook}/>  </i></a></li>
                                    <li><a href="#"><i aria-hidden="true"><FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                  
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-5">
                                <p class="copyright text-uppercase">Copyright © 2018
                                </p>
                            </div>
                            <div class="col-sm-7">
                                <ul>
                                    <li><a href="#" style={{textDecoration:'none'}}>Inicio</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    )
}
export default Navbar
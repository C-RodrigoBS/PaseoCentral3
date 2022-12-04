import React from "react";
import './styleMenu.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop,faLocation,faPercent, faStar,faAddressBook} from '@fortawesome/free-solid-svg-icons'

export const Menu = () => {
  return (
    <div className="App">
       
    <div className="wrapper">
   
      <button  className="info_but1">
        
        <div className="butbor1">
          <FontAwesomeIcon icon={faShop} style={{fontSize:"36px", color:"#F5B7B1"}} />
        </div>
        <p className="letra">Tiendas</p>
      </button>

      <button className="info_but2">
        <div className="butbor2"> 
          <FontAwesomeIcon icon={faLocation}style={{fontSize:"36px", color:"#F5B7B1"}} />
        </div>  
        <p className="letra">Mapa Mall </p>
      </button>
      
      <button className="info_but3">
        <div className="butbor3">
          <FontAwesomeIcon icon={faPercent}style={{fontSize:"36px", color:"#F5B7B1"}} />
        </div>
        <p className="letra">Ofertas</p>
      </button>
      
      <button className="info_but4">
        <div className="butbor4">
          <FontAwesomeIcon icon={faStar}style={{fontSize:"36px", color:"#F5B7B1"}} />
        </div>
        <p className="letra">novedades</p>
      </button>
      
      <button className="info_but5">
        <div className="butbor5">
          <FontAwesomeIcon icon={faAddressBook}style={{fontSize:"36px", color:"#F5B7B1"}} />
        </div>
        <p className="letra">Contacto</p>
      </button>
    </div>
  </div>
  );
};
import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { CssBaseline } from "@material-ui/core";
import { Header } from "../components/Header";
import PlaceToVisit from "../components/PlaceToVisit";
import Carousel from "../components/Carousel/Carousel";
import { Menu } from "../components/Menu/Menu"
import { Cine } from "../components/Cine/Cine"
import { Restaurantes } from "../components/Restaurantes/Restaurantes";

// const useStyles = makeStyles((theme) => ({
 

// }));
export function Home() {
  // const classes = useStyles();
  return (
    <div>
      <Header/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col">
            <Carousel/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
          <Cine/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
          <Restaurantes/>
          </div>
        </div>
      </div> 
    </div>
  )
}
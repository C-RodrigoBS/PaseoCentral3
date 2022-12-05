import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { CssBaseline } from "@material-ui/core";
import { Header } from "../components/Header";
import PlaceToVisit from "../components/PlaceToVisit";
import Carousel from "../components/Carousel/Carousel";
import { Menu } from "../components/Menu/Menu"
import { Cine } from "../components/Cine/Cine"
import { Restaurantes } from "../components/Restaurantes/Restaurantes";
import { Artistas } from "../components/Artista/Artista";
import Footer from "../components/Footer/Footer";
// const useStyles = makeStyles((theme) => ({


// }));
export function Home() {
  // const classes = useStyles();
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <Carousel />
          </div>
        </div>

        {/* <div className="row">
          <div className="col">
            <Menu/>
          </div>
        </div> */}

        <br />
        <div className="row " id="irCine" style={{ marginTop: '50px', marginBottom: '80px' }}>
          <div className="col">
            
            <Cine />
          </div>
        </div>


        <br />
        <div className="row" id="irArtistas" style={{ marginTop: '50px', marginBottom: '100px' }}>
          <div className="col">
            <Artistas />
          </div>
        </div>
        <div className="row" id="irRestaurantes" style={{ marginTop: '150px', marginBottom: '100px' }}>
          <div className="col">
            <Restaurantes />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
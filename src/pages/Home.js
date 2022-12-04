import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { CssBaseline } from "@material-ui/core";
import { Header } from "../components/Header";
import PlaceToVisit from "../components/PlaceToVisit";
import Carousel from "../components/Carousel/Carousel";
import { Menu } from "../components/Menu/Menu"


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
        <div className="row">
          <div className="col">
            <Menu />
          </div>

        </div>
      </div>
    </div>
  )
}
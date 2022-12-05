import React from "react";
import "../components/Artista/eventos.css";
import { HeaderArtistas } from "../components/Artista/headerArtista";
import { BodyArtistas } from "../components/Artista/bodyArtistas";
import { VideoArtistas } from "../components/Artista/videoArtistas";
import { Header } from "../components/Header"
export const Eventos = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col">
            <HeaderArtistas />
          </div>
        </div>

        <p className="letra-p mt-4 mb-0 text-center">PRESENTACIONES</p>
        <br></br>

        <BodyArtistas />

        <VideoArtistas />


      </div>


    </div>
  );
};
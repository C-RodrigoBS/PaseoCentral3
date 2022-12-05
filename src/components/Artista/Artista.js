import React from "react";
import '../Cine/styleCine.css';




export const Artistas = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-8">

                    <img src="assets/artistas/festirock.png" alt="..." />

                </div>
                <div className="col-4">
                    <h1 className="letrarock">Festirock</h1>
                    <h5 className="letrarock">⋆Axl Rose  </h5>
                    <h5 className="letrarock">⋆Kurt Cobain  </h5>
                    <h5 className="letrarock">⋆Bon Jovi  </h5>
                    <h5 className="letrarock">⋆Alejandro Fernández </h5>
                    <h5 className="letrarock">⋆Marc Anthony </h5>

                </div>
            </div>
        </div>
    )
}
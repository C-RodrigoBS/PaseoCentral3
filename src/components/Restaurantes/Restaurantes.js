import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "./stylesRestaurantes.css";



export const Restaurantes = () => {
    return (

        <div class="container" >
            <h1>
                Patio de comidas
            </h1>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div class=" cardi " >
                        <img src="assets/restaurantes/r1.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>
                <div className='col col-sm-3'>

                    <div class=" cardi " >
                        <img src="assets/restaurantes/r2.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>
                <div className='col col-sm-3'>
                    <div class=" cardi " >
                        <img src="assets/restaurantes/r3.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>
                <div className='col col-sm-3'>
                    <div class=" cardi " >
                        <img src="assets/restaurantes/r4.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div class=" cardi " >
                        <img src="assets/restaurantes/r5.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>

                <div className='col col-sm-3'>
                    <div class=" cardi " >
                        <img src="assets/restaurantes/r6.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>
                <div className='col col-sm-3'>
                    <div class=" cardi " >
                        <img src="assets/restaurantes/r7.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>
                <div className='col col-sm-3'>
                    <div class=" cardi " >
                        <img src="assets/restaurantes/r8.png" class="card-img-top imgsres imgRestaurantes" alt="..." />
                    </div>
                </div>
            </div>


        </div>

    )
}
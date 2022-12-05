import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import './styleCine.css';
import { Pagination } from "swiper";


export const Cine = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col '>
                    <h2 className='text-center letra-p'> Cartelera de la semana</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}

                        modules={[Pagination]}
                        className="mySwiper"
                        pagination={{
                            clickable: true,
                        }}


                    >
                        <SwiperSlide className='bor'>
                            <a href='https://www.cineplanet.com.pe/peliculas/un-mundo-extrano' target={'_blank'}>
                                <div className='new_card'>
                                    <img className='border' src='https://cdn.discordapp.com/attachments/961091079090888704/1048101792598212649/Un_mundo_extrano.png' />
                                    <h4></h4>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='https://www.cineplanet.com.pe/peliculas/pantera-negra-wakanda-por-siempre' target={'_blank'}>
                                <div className='new-card'>
                                    <img src='https://media.discordapp.net/attachments/961091079090888704/1048101792245886996/Wakanda.png?width=701&height=701' />
                                    <h4></h4>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='https://www.cineplanet.com.pe/peliculas/la-maldicion-el-despertar-de-los-muertos' target={'_blank'}>
                                <div className='new-card'>
                                    <img src='https://cdn.discordapp.com/attachments/961091079090888704/1048101792929546321/La_maldicion.png' />
                                    <h4></h4>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='https://www.cineplanet.com.pe/peliculas/jeepers-creepers--la-reencarnacion-del-demonio' target={'_blank'}>
                                <div className='new_card'>
                                    <img src='https://cdn.discordapp.com/attachments/961091079090888704/1048101793290268753/Jeepers_creepers.png' />
                                    <h4></h4>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='https://www.cineplanet.com.pe/peliculas/cenicienta' target={'_blank'}>
                                <div className='new_card'>
                                    <img src='https://media.discordapp.net/attachments/961091079090888704/1048101794087174164/Cenicienta.png?width=701&height=701' />
                                    <h4></h4>
                                </div>
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href='https://www.cineplanet.com.pe/peliculas/harry-potter-y-la-camara-secreta' target={'_blank'}>
                                <div className='new_card'>
                                    <img src='https://media.discordapp.net/attachments/961091079090888704/1048101793713897532/Harry_potter_y_la_camara_secreta.png?width=701&height=701' />
                                    <h4></h4>
                                </div>
                            </a>
                        </SwiperSlide>
                        <span class="swiper-pagination-bullet"></span>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}
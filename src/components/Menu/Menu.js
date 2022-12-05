import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styleMenu.css";
import { Pagination } from "swiper";

export const Menu = () => {
  return (
    <div className="contenier-m">
      <div className="App">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}
        >
          <div class="container">
            <div class="row ">
              <div class="col-3">
                <SwiperSlide className="new-card">
                  <a>
                    <div className="new_card">
                      <div className="bor-m">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faShop}
                          style={{ fontSize: "30px" }}
                        />
                      </div>
                      <h6>Demo 1</h6>
                    </div>
                  </a>
                </SwiperSlide>
              </div>
              <div class="col-10">
                <SwiperSlide className="new-card">
                  <a>
                    <div className="new_card">
                      <div className="bor-m">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faShop}
                          style={{ fontSize: "30px" }}
                        />
                      </div>
                      <h6>Demo 1</h6>
                    </div>
                  </a>
                </SwiperSlide>
              </div>
              <div class="col-12">
                <SwiperSlide className="new-card">
                  <a>
                    <div className="new_card">
                      <div className="bor-m">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faShop}
                          style={{ fontSize: "30px" }}
                        />
                      </div>
                      <h6>Demo 1</h6>
                    </div>
                  </a>
                </SwiperSlide>
              </div>
              <div class="col">
                <SwiperSlide className="new-card">
                  <a>
                    <div className="new_card">
                      <div className="bor-m">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faShop}
                          style={{ fontSize: "30px" }}
                        />
                      </div>
                      <h6>Demo 1</h6>
                    </div>
                  </a>
                </SwiperSlide>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
import React from "react";
import "./Portfolio.css";
import slidebar from "../../img/sidebar.png";
import ecommerce from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider swiper"
      >
        <SwiperSlide className="swiper-slider">
          <img src={slidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <img src={hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          <img src={musicapp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

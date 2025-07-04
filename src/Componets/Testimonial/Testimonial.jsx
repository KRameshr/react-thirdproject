import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePicl from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const Clients = [
    {
      img: profilePicl,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasirecusandae aspernatur sunt animi, aliquam quaerat dolor distinctioasperiores error atque doloremque, dicta cum velit perspiciatis debitis officiis odio nesciunt temporibus.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasirecusandae aspernatur sunt animi, aliquam quaerat dolor distinctioasperiores error atque doloremque, dicta cum velit perspiciatis debitis officiis odio nesciunt temporibus.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasirecusandae aspernatur sunt animi, aliquam quaerat dolor distinctioasperiores error atque doloremque, dicta cum velit perspiciatis debitis officiis odio nesciunt temporibus.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasirecusandae aspernatur sunt animi, aliquam quaerat dolor distinctioasperiores error atque doloremque, dicta cum velit perspiciatis debitis officiis odio nesciunt temporibus.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Client always get</span>
        <span>Exceptional Work</span>
        <span>from Me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Clients.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonils">
                <img src={value.img} alt="" />
                <span>{value.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

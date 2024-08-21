import React, { useState } from "react";
import Slider from "react-slick";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nav } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const moreAbout = () => {
    return (
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="book-now">
            <span> Book Now</span>
          </div>

          <div className="circle">
            <FaArrowRight />
          </div>
        </Link>
      </div>
    );
  };

  const slides = [
    {
      id: 1,
      img: "https://c4.wallpaperflare.com/wallpaper/973/1004/995/interior-design-room-carpets-couch-wallpaper-preview.jpg",
      text: "1 Beautiful Living Solution",
      text2: "Give your hone a new look",
    },
    {
      id: 2,
      img: "https://e1.pxfuel.com/desktop-wallpaper/650/461/desktop-wallpaper-luxury-house-interior-%E2%9D%A4-for-ultra-luxury-house.jpg",
      text: "2 Beautiful Living Solution",
      text2: "Give your hone a new look",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/21/de/be/21debe76191a921dd71285ac1bf0e2dc.png",
      text: "3 Beautiful Living Solution",
      text2: "Give your hone a new look",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="text-box">
        <h3 className="txt-h3">{slides[currentSlide].text}</h3>
        <h2>{slides[currentSlide].text2}</h2>
        {moreAbout()}
      </div>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div></div>
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBanner;

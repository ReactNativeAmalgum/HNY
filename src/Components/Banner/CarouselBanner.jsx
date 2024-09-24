import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../Assets/images/homebanner1.webp'
import banner2 from '../../Assets/images/homebanner2.webp'
import { Fade, Slide } from "react-awesome-reveal";
const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    interval: 3000, // This replaces `autoplaySpeed` from react-slick
    pause: 'hover', // Pause on hover
    controls: true, // Show controls if needed
    indicators: true, // Show indicators if needed
  };

  const moreAbout = () => {
    return (
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="banner-book-now">
            <span style={{color:'#e5646e', fontWeight:500}}> Book Now</span>
          </div>

          <div className="book-now-circle">
            <FaArrowRight style={{color:'#e5646e'}} />
          </div>
        </Link>
      </div>
    );
  };

  const moreAbout2 = () => {
    return (
      <div className="booknow-circle-cont">
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <div className="banner-book-now2">
            <span style={{color:'#e5646e'}}> Book Now</span>
          </div>
        </Link>
      </div>
    );
  };

  const slides = [
    {
      id: 1,
      img: 'https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-2024-1720241010-wAOzD/mbr-1721373677-rlhqT/mbr-23-1721373698-6QPrf.jpg',
      text: "Beautiful Living Solution",
      text2: "HNY is a design firm that brings dimension to the design create for you",
    },
    {
      id: 2,
      img: 'https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/mbr-1711965351-TMqEb/mbr-22-1-1718971159-Bj4YG.jpg',
      text: "Beautiful Living Solution",
      text2: "Give your home a new look with these interior design ideas create for you",
    },
    // {
    //   id: 3,
    //   img: "https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-2024-1720241010-wAOzD/mbr-1721373677-rlhqT/mbr-11-1721373690-sJ0m2.jpg",
    //   text: "Beautiful Living Solution",
    //   text2: "HNY is a design firm that brings dimension to the design create for you",
    // },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        data-bs-theme="dark"
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
        interval={settings.interval}
        pause={settings.pause}
        controls={settings.controls}
        indicators={settings.indicators}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${slide.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="text-box">
        <Slide direction="down">
          <h3 className="txt-h3">{slides[currentSlide].text}</h3>

        </Slide>
        <Slide direction="right">
        <h2>{slides[currentSlide].text2}</h2>

        </Slide>
        <Fade cascade damping={0.5} >
        <div className="moreAbout">{moreAbout()}</div>

        </Fade>
        <div className="moreAbout2">{moreAbout2()}</div>
      </div>
    </div>
  );
};

export default CarouselBanner;

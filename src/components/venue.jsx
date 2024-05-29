import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Venue = ({ className = "" }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: "/pikaso-texttoimage-educationalinstitutionsschoolsanduniversities-1@2x.png",
      text: "Auditorium"
    },
    {
      image: "/imag2.png",
      text: "Residential Spaces"
    },
    {
      image: "/imag3.png",
      text: "Hospitality Sector"
    },
    {
      image: "/imag4.png",
      text: "Conference room"
    },
    {
      image: "/imag6.png",
      text: "Commercial Places"
    },
    {
      image: "/imag7.png",
      text: "Entertainment"
    },
  ];

  return (
    <section className={`relative top-[1300px] xl:top-[600px]  lg:top-[900px]  left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center justify-start gap-14 text-left text-51xl text-black font-poppins ${className}`}>
      <div className="w-full flex flex-row items-start justify-center py-0 px-5 box-border">
        <h1 className="m-0 max-w-full text-center tracking-[-0.05em] font-semibold font-poppins inline-block shrink-0 text-32xl-2 sm:text-lg md:text-24 lg:text-3xl xl:text-3xl">{`Venues & Spaces`}</h1>
      </div>
      <div className="w-full h-auto flex flex-row items-start justify-start pt-0 pb-8 px-5 box-border">
        <Slider {...settings} className="w-full">
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex flex-col items-center justify-center py-0 px-4 box-border">
              <div className="max-w-[60%] mx-auto sm:max-w-[100%] ">
                <img
                  className="w-full h-auto max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src={slide.image}
                />
              </div>
              <div className="w-full text-center py-2 flex items-center justify-center h-16">
                <p className="text-black font-medium text-lg-5 md:text-5xl">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

Venue.propTypes = {
  className: PropTypes.string,
};

export default Venue;

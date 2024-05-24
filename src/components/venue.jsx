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
    <section
      className={`absolute top-[2500px] left-[298px] w-[1362px] flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-51xl text-black font-poppins ${className}`}
    >
      <div className="w-[1323px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 w-[581px] relative text-inherit tracking-[-0.05em] font-semibold font-poppins inline-block shrink-0 max-w-full mq450:text-23xl mq925:text-37xl">{`Venues & Spaces`}</h1>
      </div>
      <div className="w-[1348px] h-[652px] flex flex-row items-start justify-start pt-0 pb-[30px] pr-5 pl-0 box-border max-w-full">
        <Slider {...settings} className="self-stretch flex-1 max-w-full">
          {slides.map((slide, index) => (
            <div key={index} className="self-stretch flex-1 bg-gray-700 flex flex-col items-start justify-start py-0 px-[163px] box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src={slide.image}
              />
              <div className="w-full text-center py-2 flex items-center justify-center h-[70px]">
                <p className="text-black font- text-xl">{slide.text}</p>
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

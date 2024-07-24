import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrameComponent2 = ({ className = "" }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust the number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  return (
    <section
      className={`relative w-full flex-col items-center justify-start lg:justify-center py-20 lg:py-5 box-border gap-24 max-w-full text-center text-51xl text-black font-poppins ${className}`}
    >
      <div className="w-full justify-center items-center py-0 max-w-full text-2.5xl lg:text-lg">
        <h1 className="text-center mb-4 font-semibold m-0 pb-10 relative text-inherit tracking-[-0.05em] px-10 py-2.5 font-poppins shrink-0 max-w-full ">{`Our Clients`}</h1>
      </div>

      <div className="w-full pl-28 lg:pl-3 py-5">
        <Slider {...settings}>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-32 lg:h-24  max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p2-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-32 lg:h-24 max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p1-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-32 lg:h-24 max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p17-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-32 lg:h-24 max-w-full lg:object-fit"
              loading="lazy"
              alt=""
              src="/p14-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-fit px-2">
            <img
              className="h-32 lg:h-24 max-w-full lg:object-contain
              "
              loading="lazy"
              alt=""
              src="/p12-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-32 lg:h-24 max-w-full lg:object-contain
              "
              loading="lazy"
              alt=""
              src="/p10-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-32 lg:h-24 max-w-full lg:object-contain
              "
              loading="lazy"
              alt=""
              src="/dslogo.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-32 lg:h-24 max-w-full lg:object-contain
              "
              loading="lazy"
              alt=""
              src="/c1-1@2x.png"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

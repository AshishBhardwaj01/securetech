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
    autoplaySpeed: 3000,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className={`absolute top-[5950px] lg:top-[6200px] left-[0px] w-full flex flex-col items-center justify-start lg:justify-center py-0 px-[20px] box-border gap-[34px] max-w-full text-center text-51xl text-black font-poppins ${className}`}
    >
      <div className="w-full justify-center py-0 px-5 max-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-0.05em] font-semibold font-poppins inline-block shrink-0 max-w-full mq450:text-23xl mq925:text-37xl">{`Our Clients`}</h1>
      </div>

      <div className="w-full">
        <Slider {...settings}>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-[215px] max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p2-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-fit px-2">
            <img
              className="h-[215px] max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p1-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-fit px-2">
            <img
              className="h-[215px] max-w-full lg:object-fit"
              loading="lazy"
              alt=""
              src="/p17-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-fit px-2">
            <img
              className="h-[215px] max-w-full lg:object-fit"
              loading="lazy"
              alt=""
              src="/p14-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-fit px-2">
            <img
              className="h-[215px] max-w-full lg:object-fit"
              loading="lazy"
              alt=""
              src="/p12-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-[215px] max-w-full lg:object-fit"
              loading="lazy"
              alt=""
              src="/p10-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-[215px] max-w-full lg:object-fit"
              loading="lazy"
              alt=""
              src="/p8-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-[215px] max-w-full lg:object-fit"
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

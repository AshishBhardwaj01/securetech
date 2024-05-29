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
      className={`relative top-[1700px] xl:top-[900px] lg:top-[1500px] w-full flex-col items-center justify-start lg:justify-center py-[20px] px-[20px] box-border gap-[100px] max-w-full text-center text-51xl text-black font-poppins ${className}`}
    >
      <div className="w-full justify-center items-center py-0 px-5 max-w-full md:text-left text-[3vw] xl:text-[3vw] lg:text-[2vw]">
        <h1 className="text-center mb-4 text-2l font-semibold m-0 relative text-inherit tracking-[-0.05em] p-10 py-[10px] font-poppins shrink-0 max-w-full ">{`Our Clients`}</h1>
      </div>

      <div className="w-full py-[10px]">
        <Slider {...settings}>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-[150px] max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p2-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-[150px] max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p1-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-[150px] max-w-full lg:max-w-full"
              loading="lazy"
              alt=""
              src="/p17-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-contain px-2">
            <img
              className="h-[150px] max-w-full lg:object-fit"
              loading="lazy"
              alt=""
              src="/p14-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center lg:object-fit px-2">
            <img
              className="h-[150px] max-w-full lg:object-contain
              "
              loading="lazy"
              alt=""
              src="/p12-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-[150px] max-w-full lg:object-contain
              "
              loading="lazy"
              alt=""
              src="/p10-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-[150px] max-w-full lg:object-contain
              "
              loading="lazy"
              alt=""
              src="/p8-1@2x.png"
            />
          </div>
          <div className="flex items-center justify-center px-2">
            <img
              className="h-[150px] max-w-full lg:object-contain
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

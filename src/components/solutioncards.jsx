import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`relative top-[1200px] lg:top-[100px] xl:top-[500px] left-0 w-full max-w-full ${className}`}>
      <h2 className="text-center text-black font-poppins font-semibold mb-8 text-32xl-2 sm:text-lg md:text-24 lg:text-3xl xl:text-3xl">Solutions and Services</h2>
      <Slider {...settings} className="flex items-center justify-center gap-8 px-4 sm:px-1">
        <div className="flex flex-col items-start justify-start pt-0 pb-16 pr-0 pl-3 box-border relative gap-8 max-w-[95%] bg-white rounded-4 overflow-hidden">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="ml-[-1.25vmax] w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/pikaso-texttoimage-stylizedvectorillustrationshowcasingadiverse@2x.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-center justify-center py-2 pr-3 pl-3 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-1 lg:text-1.3vmax 2xl:text-1.89vmax">
              Architectural Acoustics
            </h2>
            <div className="self-stretch relative text-1vmax tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 font-poppins text-inherit pl-[1.1vmax]">
                <li className="mb-0">Soundproofing solutions</li>
                <li className="mb-0">Acoustic design and consulting</li>
                <li>Noise control and mitigation...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 pr-0 pl-3 box-border relative gap-8 max-w-[95%] bg-white rounded-4 overflow-hidden">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="ml-[-1.25vmax] w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/imag9.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-center justify-center py-2 pr-3 pl-3 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-1 lg:text-1.3vmax 2xl:text-1.89vmax">
              Audio Visual
            </h2>
            <div className="self-stretch relative text-1vmax tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 font-poppins text-inherit pl-[1.1vmax]">
                <li className="mb-0">Soundproofing solutions</li>
                <li className="mb-0">Acoustic design and consulting</li>
                <li>Noise control and mitigation...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 pr-0 pl-3 box-border relative gap-8 max-w-[95%] bg-white rounded-4 overflow-hidden">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="ml-[-1.25vmax] w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="imag10.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-center justify-center py-2 pr-3 pl-3 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-1 lg:text-1.3vmax 2xl:text-1.89vmax">
              Information technology
            </h2>
            <div className="self-stretch relative text-1vmax tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 font-poppins text-inherit pl-[1.1vmax]">
                <li className="mb-0">Soundproofing solutions</li>
                <li className="mb-0">Acoustic design and consulting</li>
                <li>Noise control and mitigation...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 pr-0 pl-3 box-border relative gap-8 max-w-[95%] bg-white rounded-4 overflow-hidden">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="ml-[-1.25vmax] w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/imag11.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-center justify-center py-2 pr-3 pl-3 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-1 lg:text-1.3vmax 2xl:text-1.89vmax">
              Light Structures
            </h2>
            <div className="self-stretch relative text-1vmax tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 font-poppins text-inherit pl-[1.1vmax]">
                <li className="mb-0">Soundproofing solutions</li>
                <li className="mb-0">Acoustic design and consulting</li>
                <li>Noise control and mitigation...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 pr-0 pl-3 box-border relative gap-8 max-w-[95%] bg-white rounded-4 overflow-hidden">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="ml-[-1.25vmax] w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/pikaso-texttoimage-stylizedvectorillustrationshowcasingadiverse@2x.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-center justify-center py-2 py-0 pr-3 pl-3 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-1 lg:text-1.3vmax 2xl:text-1.89vmax">
              project management
            </h2>
            <div className="self-stretch relative text-1vmax tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 font-poppins text-inherit pl-[1.1vmax]">
                <li className="mb-0">Soundproofing solutions</li>
                <li className="mb-0">Acoustic design and consulting</li>
                <li>Noise control and mitigation...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-0 pb-16 pr-0 pl-3 box-border relative gap-8 max-w-[95%] bg-white rounded-4 overflow-hidden">
          <div className="max-w-full sm:max-w-[70%] mx-auto relative">
            <img
              className="ml-[-1.25vmax] w-full h-auto relative rounded-16 sm:rounded-0 object-cover z-1"
              alt=""
              src="/pikaso-texttoimage-stylizedvectorillustrationshowcasingadiverse@2x.png"
            />
          </div>
          <div className="w-full sm:w-[30em] flex flex-col items-center justify-center py-2 pr-3 pl-3 box-border gap-8 max-w-[95%]">
            <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-1 lg:text-1.3vmax 2xl:text-1.89vmax">
              post project services
            </h2>
            <div className="self-stretch relative text-1vmax tracking-[-0.05em] inline-block shrink-0 z-1">
              <ul className="m-0 font-poppins text-inherit pl-[1.1vmax]">
                <li className="mb-0">Soundproofing solutions</li>
                <li className="mb-0">Acoustic design and consulting</li>
                <li>Noise control and mitigation...</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Repeat the above div for additional slides as needed */}
      </Slider>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;

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
    <Slider
      {...settings}
      className={`absolute top-[1800px] left-[34px] w-[1856.3px] flex flex-column items-start justify-start gap-[50.1px] max-w-full grid-cols-[repeat(3,_minmax(439px,_1fr))] text-left lg:max-w-full text-11xl text-black font-poppins mq925:grid-cols-[minmax(439px,_1fr)] mq1825:justify-center mq1825:grid-cols-[repeat(2,_minmax(439px,_761px))] ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-0 pb-[41.1px] pr-0 pl-3 box-border relative gap-[33px] max-w-[95%]">
        <img
          className="w-full h-full absolute !m-[0] top-0 right-0 bottom-0 left-0 rounded-[41.89px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-53716-2.svg"
        />
        <img
          className="ml-[-12.5px] w-[585px] relative rounded-[41.89px] max-h-full object-cover w-[100%] z-[1]"
          alt=""
          src="/pikaso-texttoimage-stylizedvectorillustrationshowcasingadiverse@2x.png"
        />
        <div className="w-[540px] flex flex-col items-start justify-start py-0 pr-5 pl-5 box-border gap-[33px] max-w-[95%]">
          <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-[1] mq450:text-lg mq925:text-5xl">
            Architectural Acoustics
          </h2>
          <div className="self-stretch h-[82px] relative text-base tracking-[-0.05em] inline-block shrink-0 z-[1]">
            <ul className="m-0 font-poppins text-inherit pl-[21px]">
              <li className="mb-0">Soundproofing solutions</li>
              <li className="mb-0">Acoustic design and consulting</li>
              <li>Noise control and mitigation...</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 pb-[41.1px] pr-0 pl-3 box-border relative gap-[33px] max-w-[95%]">
        <img
          className="w-full h-full absolute !m-[0] top-0 right-0 bottom-0 left-0 rounded-[41.89px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-53716-2.svg"
        />
        <img
          className="ml-[-12.5px] w-[585px] relative rounded-[41.89px] max-h-full object-cover w-[100%] z-[1]"
          alt=""
          src="/pikaso-texttoimage-35mmfilmphotographycomprehensivenetworkbluepr@2x.png"
        />
        <div className="w-[540px] flex flex-col items-start justify-start py-0 pr-5 pl-5 box-border gap-[33px] max-w-[95%]">
          <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-[1] mq450:text-lg mq925:text-5xl">
            Audio Visuals
          </h2>
          <div className="self-stretch h-[82px] relative text-base tracking-[-0.05em] inline-block shrink-0 z-[1]">
            <ul className="m-0 font-poppins text-inherit pl-[21px]">
              <li className="mb-0">Custom audio-visual system design</li>
              <li className="mb-0">Installation and integration of AV systems</li>
              <li>High-definition projection systems...</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 pb-[41.1px] pr-0 pl-3 box-border relative gap-[33px] max-w-[95%]">
        <img
          className="w-full h-full absolute !m-[0] top-0 right-0 bottom-0 left-0 rounded-[41.89px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-53716-2.svg"
        />
        <img
          className="ml-[-12.5px] w-[585px] relative rounded-[41.89px] max-h-full object-cover w-[100%] z-[1]"
          alt=""
          src="/pikaso-texttoimage-architecturalacousticssoundproofingsolutionsac@2x.png"
        />
        <div className="w-[540px] flex flex-col items-start justify-start py-0 pr-5 pl-5 box-border gap-[33px] max-w-[95%]">
          <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-[1] mq450:text-lg mq925:text-5xl">
            Light Architecture
          </h2>
          <div className="self-stretch h-[82px] relative text-base tracking-[-0.05em] inline-block shrink-0 z-[1]">
            <ul className="m-0 font-poppins text-inherit pl-[21px]">
              <li className="mb-0">Lighting design and consultancy</li>
              <li className="mb-0">LED and architectural lighting solutions</li>
              <li>Dynamic lighting control systems...</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 pb-[41.1px] pr-0 pl-3 box-border relative gap-[33px] max-w-[95%] overflow-hidden">
      <img
          className="w-full h-full absolute !m-[0] top-0 right-0 bottom-0 left-0 rounded-[41.89px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-53716-2.svg"
        />
        <img
          className="ml-[-12.5px] w-[585px] relative rounded-[41.89px] max-h-full object-cover w-[100%] z-[1]"
          alt=""
          src="/imag9.png"
        />
        <div className="w-[540px] flex flex-col items-start justify-start py-0 pr-5 pl-5 box-border mb-2 gap-[3px] max-w-[95%]">
          <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-[1] mq450:text-lg mq925:text-5xl">
         Information Communication Technology
          </h2>
          <div className="self-stretch h-[82px] relative text-base tracking-[-0.05em] inline-block shrink-0 z-[1]">
            <ul className="m-0 font-poppins text-inherit pl-[21px]">
              <li className="mb-0">Network infrastructure design and implementation</li>
              <li className="mb-0">Unified communications solutions</li>
              <li>Data center planning and managements...</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start pt-0 pb-[41.1px] pr-0 pl-3 box-border relative gap-[33px] max-w-[95%]">
        <img
          className="w-full h-full absolute !m-[0] top-0 right-0 bottom-0 left-0 rounded-[41.89px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-53716-2.svg"
        />
        <img
          className="ml-[-12.5px] w-[585px] relative rounded-[41.89px] max-h-full object-cover w-[100%] z-[1]"
          alt=""
          src="/imag11.png"
        />
        <div className="w-[540px] flex flex-col items-start justify-start py-0 pr-5 pl-5 box-border gap-[33px] max-w-[95%]">
          <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-[1] mq450:text-lg mq925:text-5xl">
          Technology Project Management
          </h2>
          <div className="self-stretch h-[82px] relative text-base tracking-[-0.05em] inline-block shrink-0 z-[1]">
            <ul className="m-0 font-poppins text-inherit pl-[21px]">
              <li className="mb-0">Comprehensive project planning and execution</li>
              <li className="mb-0">Project oversight and coordination</li>
              <li>Timely delivery and budget adherence...</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 pb-[41.1px] pr-0 pl-3 box-border relative gap-[33px] max-w-[95%]">
        <img
          className="w-full h-full absolute !m-[0] top-0 right-0 bottom-0 left-0 rounded-[41.89px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-53716-2.svg"
        />
        <img
          className="ml-[-12.5px] w-[585px] relative rounded-[41.89px] max-h-full object-cover w-[100%] z-[1]"
          alt=""
          src="/imag10.png"
        />
        <div className="w-[540px] flex flex-col items-start justify-start py-0 pr-5 pl-5 box-border gap-[33px] max-w-[95%]">
          <h2 className="m-0 relative text-inherit tracking-[-0.05em] font-normal font-poppins z-[1] mq450:text-lg mq925:text-5xl">
          Post-Project Service
          </h2>
          <div className="self-stretch h-[82px] relative text-base tracking-[-0.05em] inline-block shrink-0 z-[1]">
            <ul className="m-0 font-poppins text-inherit pl-[21px]">
              <li className="mb-0">Maintenance contracts for AV, lighting, and ICT systems</li>
              <li className="mb-0">Upgrades and system optimization</li>
              <li>On-call technical support and troubleshooting...</li>
            </ul>
          </div>
        </div>
      </div>
    </Slider>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;

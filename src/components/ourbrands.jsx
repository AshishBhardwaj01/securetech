import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/senheiserlogo.png",
  "/britishacousticscommerciallogo2019copy300webp@2x.png",
  "/qnclogo.png",
  "/christielogo.png",
  "/images2webp@2x.png",
  "/sonylogo685450c77eseeklogocomwebp@2x.png",
  "/p9-1@2x.png",
  "/boselogo.png",
  "/jbllogo.png",
  "/ciscologo.png",
  "/p16-1@2x.png",
  "/p19@2x.png",
  "/lglogo.png",
  "/p18@2x.png",
  "/p4-1@2x.png",
  "/p5-1@2x.png",
  "/p4-2@2x.png",
  "/p6-1@2x.png",
];

const ImageItem = ({ src, pt }) => (
  <div
    className={`h-[208.5px] w-[215px] flex flex-col items-start justify-start pt-${pt} px-0 pb-0 box-border shrink-0`}
  >
    <img
      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain shrink-0"
      alt=""
      src={src}
    />
  </div>
);

ImageItem.propTypes = {
  src: PropTypes.string.isRequired,
  pt: PropTypes.string.isRequired,
};

const FrameComponent3 = ({ className = "" }) => {
  const paddingTops = [
    "7",
    "7.5",
    "15.7",
    "0",
    "7.5",
    "7.5",
    "54",
    "2",
    "2",
    "50.7",
    "69",
    "78.7",
    "2",
    "40.7",
    "2",
    "47.7",
    "54.3",
    "45.3",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5, // Adjust the number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      className={`relative top-[43vw] xl:top-[950px] lg:top-[2000px] w-full pl-[10px] py-[10px] flex-col items-center justify-center ${className}`}
    >
      <div className="m-0 text-2.5xl">
        <h1 className="text-center mb-4 relative text-inherit font-semibold tracking-[-0.05em] p-10 py-[10px] font-poppins shrink-0 max-w-full ">
          Our Brands
        </h1>
      </div>
      <div className="w-full ">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-[150px] max-w-full lg:h-[50px]"
            >
              <ImageItem src={src} pt={paddingTops[index]} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/p10-2@2x.png",
  "/britishacousticscommerciallogo2019copy300webp@2x.png",
  "/p11-1@2x.png",
  "/p12-2@2x.png",
  "/images2webp@2x.png",
  "/sonylogo685450c77eseeklogocomwebp@2x.png",
  "/p9-1@2x.png",
  "/boseprofessionallogo12baa3345eseeklogocomwebp@2x.png",
  "/jbllogo053cc7bcdfseeklogocomwebp@2x.png",
  "/p17-2@2x.png",
  "/p16-1@2x.png",
  "/p19@2x.png",
  "/1024pxlg-logo-2015svg300webp@2x.png",
  "/p18@2x.png",
  "/p4-1@2x.png",
  "/p5-1@2x.png",
  "/p4-2@2x.png",
  "/p6-1@2x.png"
];

const ImageItem = ({ src, pt }) => (
  <div className={`h-[208.5px] w-[215px] flex flex-col items-start justify-start pt-${pt} px-0 pb-0 box-border shrink-0`}>
    <img
      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-fit shrink-0"
      alt=""
      src={src}
    />
  </div>
);

ImageItem.propTypes = {
  src: PropTypes.string.isRequired,
  pt: PropTypes.string.isRequired
};

const FrameComponent3 = ({ className = "" }) => {
  const paddingTops = [
    "7", "7.5", "15.7", "0", "7.5", "7.5", "54", "2", "2", "50.7", "69", "78.7",
    "2", "40.7", "2", "47.7", "54.3", "45.3"
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
      className={`absolute top-[6050px] lg:top-[6650px] left-[0px] w-full flex flex-col items-center justify-center ${className}`}
    >
      <h3 className="text-center mb-4 text-2l font-semibold m-0 relative text-inherit tracking-[-0.05em] font-poppins inline-block shrink-0 max-w-full mq450:text-23xl mq925:text-37xl">Our Brand</h3>
      <div className="w-full">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex items-center justify-center p-2">
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

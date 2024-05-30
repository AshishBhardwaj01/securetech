import React from 'react';
import PropTypes from 'prop-types';
import image4 from '/image4@2x.png'; // Adjust the path as necessary

const MySection = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-screen flex items-start justify-center ${className}`}>
      
      <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[1vw] pl-[1vw] box-border max-w-full">
        <h1 className="m-0 h-[30vw] w-[50vw] text-inherit font-semibold font-poppins flex items-start shrink-0 max-w-full z-[1] mq450:text-[5vw] mq925:text-[7vw]">
          <span className="w-full text-[3vw] text-orangered-100 2xl:text-[3.5vmax] md:text-[3vw]">
            <span>Elevating</span>
            <span className="text-white"> </span>
            <span>Experiences</span>
            <span className="text-white">, </span>
            <span className="text-gray-800">Redefining Technology</span>
          </span>
        </h1>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image4}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <button className="absolute bottom-0 right-0 mb-[4vw] mr-[4vw] cursor-pointer border-none pt-[1vw] px-[1.5vw] pb-[1vw] bg-darkslateblue w-[18vw] justify-between rounded-tl-[1vw] rounded-br-[1vw] overflow-hidden flex items-center gap-[2.5vw] whitespace-nowrap z-[50] hover:bg-steelblue-400">
        <div className="text-[1.5vw] leading-[2vw] font-poppins text-white text-center flex-shrink-0">
          Learn more
        </div>
        <img
          className="h-[1.5vw] w-[1.5vw]"
          alt=""
          src="/figure.svg"
        />
      </button>
    </div>
  );
};

MySection.propTypes = {
  className: PropTypes.string,
};

export default MySection;

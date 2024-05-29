import React from 'react';
import PropTypes from 'prop-types';
import image4 from '/image4@2x.png'; // Adjust the path as necessary

const MySection = ({ className = "" }) => {
  return (
    <div className={`absolute left-0 w-full flex flex-col items-end justify-start pt-0 px-[4vw] pb-[4vw] box-border gap-[15vw] max-w-full text-center text-51xl text-orangered-100 font-poppins ${className} mq925:gap-[10vw] mq1350:gap-[20vw] mq1350:pl-[2vw] mq1350:pr-[2vw] mq1350:box-border`}>
      <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[1vw] pl-[1.5vw] box-border max-w-full">
        <h1 className="m-0 h-[30vw] w-[75vw] text-inherit font-normal font-poppins flex items-center shrink-0 max-w-full z-[1] mq450:text-[5vw] mq925:text-[7vw]">
          <span className="w-full text-[6vw] 2xl:text-[3.5vmax] md:text-[3vw]">
            <span>Elevating</span>
            <span className="text-white"> </span>
            <span>Experiences</span>
            <span className="text-white">, </span>
            <span className="text-gray-800">Redefining Technology</span>
          </span>
        </h1>
      </div>
      <button className="cursor-pointer 2xl:top-[100px] border-none pt-[1vw] px-[1.5vw] pb-[1vw] bg-darkslateblue w-[18vw] justify-between rounded-tl-[1vw] rounded-br-[1vw] overflow-hidden flex items-start justify-center box-border gap-[2.5vw] whitespace-nowrap z-[50] hover:bg-steelblue-400">
        <div className="w-[1.5vw] relative text-[1.5vw] leading-[2vw] font-poppins text-white text-center flex shrink-0">
          Learn more
        </div>
        <img
          className="h-[1.5vw] w-[1.5vw] relative "
          alt=""
          src="/figure.svg"
        />
      </button>
      <div className="absolute 2xl:h-[1000px] lg:h-[900] inset-0 z-0 overflow-hidden">
        <img
          src={image4}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

MySection.propTypes = {
  className: PropTypes.string,
};

export default MySection;

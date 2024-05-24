import React from 'react';
import PropTypes from 'prop-types';
import image4 from '/image4@2x.png'; // Adjust the path as necessary

const MySection = ({ className = "" }) => {
  return (
    <section className="relative mt-[-20px] left-0 w-full flex flex-col items-end justify-start pt-0 px-[61px] pb-[56.2px] box-border gap-[594px] max-w-full text-center text-51xl text-orangered-100 font-poppins mq925:gap-[148px] mq1350:gap-[297px] mq1350:pl-[30px] mq1350:pr-[30px] mq1350:box-border">
      <div
        className="w-full h-[1114px] absolute m-0 right-0 bottom-[2px] left-0 bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${image4})` }}
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <h1 className="m-0 h-[431px] w-[1144px] relative text-inherit font-normal font-poppins flex items-center shrink-0 max-w-full z-[1] mq450:text-23xl mq925:text-37xl">
          <span className="w-full">
            <span>Elevating</span>
            <span className="text-white"> </span>
            <span>Experiences</span>
            <span className="text-white">, </span>
            <span className="text-gray-800">Redefining Technology</span>
          </span>
        </h1>
      </div>
      <button className="cursor-pointer border-none pt-[13.7px] px-4 pb-[15px] bg-darkslateblue w-[270.5px] rounded-tl-11xl rounded-tr-none rounded-br-11xl rounded-bl-none overflow-hidden flex flex-row items-end justify-start box-border gap-[38.4px] whitespace-nowrap z-[1] hover:bg-steelblue-400">
        <div className="w-[153.3px] relative text-5xl leading-[23.1px] font-poppins text-white text-center flex items-center justify-center shrink-0">
          Learn more
        </div>
        <img
          className="h-[19.8px] w-[20.8px] relative"
          alt=""
          src="/figure.svg"
        />
      </button>
    </section>
  );
};

MySection.propTypes = {
    className: PropTypes.string,
  };
  
  export default MySection;

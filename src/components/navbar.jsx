import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ className = "" }) => {
  return (
    <header className={`sticky w-full top-0 right-0 left-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray-500 flex flex-row items-start justify-between pt-1 pb-4 pr-16 pl-28 box-border z-[99] gap-5 max-w-full text-center text-16xl text-white font-poppins mq925:pl-7 mq925:box-border mq1350:pl-14 mq1350:pr-8 mq1350:box-border ${className}`}>
      <div className="w-[607px] flex flex-row items-start justify-start gap-4 max-w-full">
        <img
          className="h-[126px] w-[136px] relative object-cover"
          loading="lazy"
          alt="SecureTech Logo"
          src="/image-5@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border max-w-full">
          <h1 className="m-0 self-stretch h-8 relative text-inherit leading-[120.6%] font-semibold font-poppins flex items-center justify-center shrink-0 whitespace-nowrap">
            SecureTech AV Designs
          </h1>
        </div>
      </div>
      <nav className="w-[701px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border max-w-full text-left text-lg text-orangered-200">
        <div className="self-stretch flex flex-row items-start justify-start gap-9 max-w-full mq925:gap-4.5">
          <div className="w-[94px] flex flex-row items-start justify-start mq1350:hidden mq1350:w-0">
            <div className="flex-1 relative leading-8 font-medium whitespace-nowrap mq1350:hidden hover:text-white hover:underline">
              Home
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <div className="flex flex-row items-start justify-start py-0 px-0 mq1350:hidden">
              <div className="w-[108px] relative leading-8 font-medium whitespace-nowrap flex items-center shrink-0 mq1350:hidden hover:text-white hover:underline">
                About Us
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start max-w-full mq925:hidden">
              <div className="w-[140px] flex flex-row items-start justify-start py-0 px-px box-border">
                <div className="w-[120px] relative leading-8 font-medium whitespace-nowrap flex items-center shrink-0 hover:text-white hover:underline">
                  Solution
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start z-1 ml-[-5px]">
                <div className="flex-1 relative leading-8 font-medium whitespace-nowrap hover:text-white hover:underline">
                  Corporate Profile
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-row items-start justify-start py-0 px-0 box-border">
              <div className="w-[111.7px] relative leading-8 font-medium flex items-center shrink-0 whitespace-nowrap hover:text-white hover:underline">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;

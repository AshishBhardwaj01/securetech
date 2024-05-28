import React from 'react';
import PropTypes from 'prop-types';

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`relative top-[3700.2px] lg:top-[950.2px] w-full flex flex-col items-center justify-center gap-10 p-5 box-border text-center text-5xl text-darkslategray-200 font-sans sm:flex-col ${className}`}>
      <div className="flex flex-row items-start justify-end gap-5 sm:flex-col sm:items-center sm:justify-center sm:gap-5">
        <div className="flex flex-col items-center justify-center gap-5 sm:items-center sm:justify-center sm:gap-5">
          <div className="w-60 rounded-2xl bg-whitesmoke flex flex-col items-start justify-start p-5 box-border relative shrink-0">
            <h3 className="m-0 text-gray-400 font-poppins leading-tight text-lg sm:text-base md:text-lg lg:text-base xl:text-xl">
              Ready to elevate your tech?
            </h3>
            <div className="h-[15px] w-[30px] absolute bottom-[-13.8px] left-[50px] box-border border-t-[15px] border-solid border-whitesmoke border-r-[15px] border-l-[15px]" />
          </div>
          <img
            className="w-36 h-auto object-contain mx-auto sm:w-24 md:w-28 lg:w-36"
            loading="lazy"
            alt=""
            src="/scott2xpng@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-5 text-center text-gray-400 font-sans sm:text-xs md:text-lg lg:text-sm xl:text-xl">
          <h1 className="self-stretch text-transparent bg-clip-text bg-gradient-to-r from-[#c83a8c] to-[#3498db] font-bold text-4xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
            Contact SecureTech AV now!
          </h1>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <h2 className="text-gray-400 font-normal text-lg leading-tight sm:text-sm md:text-base lg:text-sm xl:text-lg">
              <p className="tracking-wide leading-relaxed sm:tracking-normal sm:leading-snug">
                Transform your space with SecureTech AV's cutting-edge solutions. From audio-visual integration to dynamic lighting and acoustics, we deliver customized, innovative technology tailored to your needs.
              </p>
              <p className="leading-relaxed sm:leading-snug">
                Our expert team ensures seamless implementation and ongoing support.
              </p>
            </h2>
            <button className="cursor-pointer py-2 px-5 mt-5 bg-darkslategray-300 rounded-2xl flex items-center justify-center text-white border-2 border-darkslategray-300 hover:bg-steelblue-300 hover:border-steelblue-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

import React from 'react';
import PropTypes from 'prop-types';

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`relative top-[1700.2px] xl:top-[800.2px] lg:top-[00.2px] w-full flex flex-col items-center justify-center gap-10 p-10 box-border text-center text-5xl text-darkslategray-200 font-sans lg:flex-col ${className}`}>
      <div className="flex flex-row items-start justify-start gap-2 py-[10px] lg:flex-col lg:items-center lg:justify-center lg:gap-5">
        <div className="flex flex-col 2xl:mt-[-80px] items-center justify-center 2xl:items-start 2xl:justify-start gap-5 lg:items-center lg:justify-center lg:gap-5">
          <div className="w-60 rounded-2xl bg-whitesmoke flex flex-col items-start justify-start p-5 box-border relative shrink-0">
            <h3 className="m-0 text-gray-400 font-poppins leading-tight text-lg lg:text-base 2xl:text-base xl:text-xl">
              Ready to elevate your tech?
            </h3>
            <div className="h-[15px] w-[30px] absolute bottom-[-13.8px] left-[50px] box-border border-t-[15px] border-solid border-whitesmoke border-r-[15px] border-l-[15px]" />
          </div>
          <img
            className="w-36 h-auto object-contain mx-auto lg:w-24 xl:w-28 2xl:w-36"
            loading="lazy"
            alt=""
            src="/scott2xpng@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-5 text-center text-gray-400 font-sans lg:text-xs xl:text-lg 2xl:text-sm ">
          <h1 className="self-stretch text-transparent bg-clip-text bg-gradient-to-r from-[#c83a8c] to-[#3498db] font-bold text-4xl leading-tight lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Contact SecureTech AV now!
          </h1>
          <div className="flex flex-col items-center justify-start gap-2.5">
            <h2 className="text-gray-400 font-normal text-lg leading-tight lg:text-sm xl:text-base 2xl:text-sm 3xl:text-lg">
              <p className="tracking-[0.09vw] leading-[01vw] sm:tracking-normal sm:leading-snug">
                Transform your space with SecureTech AV's cutting-edge solutions.</p>
                <p className="tracking-[0.09vw] leading-[01vw] sm:tracking-normal sm:leading-snug">
                 From audio-visual integration to dynamic lighting and acoustics, we deliver customized, innovative technology tailored to your needs.
              </p>
              <p className="tracking-[0.1vw] leading-[01vw] sm:tracking-normal sm:leading-snug">
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

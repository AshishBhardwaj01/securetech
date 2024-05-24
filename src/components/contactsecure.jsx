import React from 'react';
import PropTypes from 'prop-types'; 
const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[4550.2px] left-[214px] w-[1561px] flex flex-row items-start justify-start gap-[84px] max-w-full text-center text-5xl text-darkslategray-200 font-sans mq925:pl-5 mq925:pr-5 mq925:box-border ${className}`}
    >
      <div className="h-[470.8px] w-[312px] flex flex-col items-start justify-start gap-[74px] mq925:hidden">
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="w-60 rounded-2xl bg-whitesmoke flex flex-row items-start justify-start pt-[38px] pb-[8.8px] pr-0 pl-0.5 box-border relative shrink-0 [debug_commit:bf4bc93]">
            <h3 className="m-0 flex-1 relative text-inherit tracking-[1px] leading-[20.8px] font-normal font-poppins mq450:text-lgi mq450:leading-[17px]">
              <p className="m-0">{`Ready to elevate your tech? `}</p>
            </h3>
            <div className="h-[15px] w-[30px] absolute !m-[0] bottom-[-13.8px] left-[50px] box-border border-t-[15px] border-solid border-whitesmoke border-r-[15px] border-l-[15px]" />
          </div>
        </div>
        <img
          className="w-[145px] flex-1 max-h-full overflow-hidden object-contain shrink-0 [debug_commit:bf4bc93]"
          loading="lazy"
          alt=""
          src="/scott2xpng@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[7.8px] px-0 pb-0 box-border max-w-[calc(100%_-_396px)] text-left text-51xl text-gray-400 font-sans mq925:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[121px] max-w-full ">
          <h1 className="m-0 self-stretch relative text-inherit leading-[80px] font-bold font-sans text-transparent !bg-clip-text [background:linear-gradient(253.42deg,_#c83a8c,_#3498db)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-23xl mq450:leading-[30px] mq925:text-37xl mq925:leading-[39px]">
            Contact SecureTech AV now!
          </h1>
          <div className="w-[887px] flex flex-col items-start mt-[-10px] justify-start py-0 pr-5 pl-0 box-border gap-[5px] max-w-full text-11xl">
            <h2 className="m-0 self-stretch relative text-inherit leading-[28.16px] font-normal font-sans mq450:text-lg mq450:leading-[17px] mq925:text-5xl mq925:leading-[23px]">
              <p className="m-0 tracking-[0.05rem]">{`Transform your space with SecureTech AV's cutting-edge solutions. From audio-visual integration to dynamic lighting and acoustics, we deliver customized, innovative technology tailored to your needs. `}</p>
              <p className="m-0 ">
                Our expert team ensures seamless implementation and ongoing
                support
              </p>
            </h2>
            <div className="w-[177.1px] flex flex-row items-start justify-start py-0 px-[21px] box-border">
            <button className="cursor-pointer py-[10px] pr-[17px] pl-[22px] mt-5 bg-darkslategray-300 flex-1 rounded-21xl flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-darkslategray-300 hover:bg-steelblue-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-steelblue-300">
              <div className="relative text-mini leading-[16px] font-semibold font-sans text-white text-center inline-block min-w-[92px]">
                Get in Touch
              </div>
            </button>
          </div>

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

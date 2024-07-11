import PropTypes from "prop-types";

const IndustrySolutions = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-20 px-10 box-border max-w-full text-center text-21xl text-black font-open-sans ${className}`}
    >
      <div className="w-[408px] flex flex-col text-center gap-[15px] max-w-full">
        <h1 className="m-0 relative text-lg leading-[48px] font-bold font-inherit text-orange-500 ">
          Explore AV solutions
        </h1>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full text-base">
          <div className="h-[83px] flex-1 relative leading-[24px] flex items-center max-w-full">
            <span>
              <p className="m-0">
                Learn more about SecureTech AV’s venue solutions and how you can
                put data to work and accomplish
              </p>
              <p className="m-0"> more in your sector.</p>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-sm">
          <a className=" relative leading-[40px] uppercase font-semibold text-[inherit] flex items-center justify-center shrink-0  whitespace-nowrap">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

IndustrySolutions.propTypes = {
  className: PropTypes.string,
};

export default IndustrySolutions;
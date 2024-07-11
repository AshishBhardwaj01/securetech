import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Solutionimg = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 [background:linear-gradient(180deg,_#fff,_#ff8022)] overflow-hidden flex flex-row items-start justify-start py-10 pr-0 pl-24 box-border gap-10 max-w-full text-left text-21xl text-gray-900 font-open-sans  ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[149px] px-0 pb-0 box-border min-w-[461px] max-w-full ">
        <div className="flex flex-col items-start justify-start gap-[29px] max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-1px] leading-[48px] font-bold font-inherit inline-block max-w-full mq825:text-13xl mq825:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            <p className="m-0 text-6xl ">Improve every process,</p>
            <p className="m-0 text-6xl">power every outcome.</p>
          </h1>
          <b className="relative text-lg leading-[27px] uppercase flex text-cyan-500 items-center">
            Venue Based solutions
          </b>
          <div className="relative text-base leading-[24px]">
            <p className="m-0">
              Empower teams to work faster and smarter by putting data at
            </p>
            <p className="m-0">
              the heart of their everyday work and give them the tools to
            </p>
            <p className="m-0">start uncovering new business value.</p>
          </div>
          <Link to="/Contactus" className="bg-darkorange-100 box-border no-underline overflow-hidden flex flex-row items-start justify-start pt-[1.5px] pb-0 pr-[15px] pl-5 whitespace-nowrap text-center hover:text-orange-400 hover:bg-white text-sm text-white border-[2px] border-solid border-darkorange-100">
            <div className="relative leading-[40px] uppercase font-semibold inline-block min-w-[85px]">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
      <img
        className="h-[668px] flex-1 relative max-w-full overflow-hidden object-contain "
        loading="lazy"
        alt=""
        src="/solutionback.jpeg"
      />
    </div>
  );
};

Solutionimg.propTypes = {
  className: PropTypes.string,
};

export default Solutionimg;
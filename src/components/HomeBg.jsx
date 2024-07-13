// import React from 'react';
// import PropTypes from 'prop-types';
// import image4 from '/image4@2x.png'; // Adjust the path as necessary

// const MySection = ({ className = "" }) => {
//   return (
//     <div className={`relative w-full h-screen flex items-start justify-center ${className}`}>

//       <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[1vw] pl-[1vw] box-border max-w-full">
//         <h1 className="m-0 h-[30vw] w-[50vw] text-inherit font-semibold font-poppins flex items-start shrink-0 max-w-full z-[1] mq450:text-[5vw] mq925:text-[7vw]">
//           <span className="w-full text-[3vw] text-orangered-100 2xl:text-[3.5vmax] md:text-[3vw]">
//             <span>Elevating</span>
//             <span className="text-white"> </span>
//             <span>Experiences</span>
//             <span className="text-white">, </span>
//             <span className="text-gray-800">Redefining Technology</span>
//           </span>
//         </h1>
//       </div>
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img
//           src={image4}
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <button className="absolute bottom-0 right-0 mb-[2vw] mr-[2vw] cursor-pointer border-none py-[vw] px-[1vw] bg-gradient-to-r from-blue-700 to-purple-700 w-[12vw] justify-between rounded-tl-[1vw] rounded-br-[1vw] overflow-hidden flex items-center gap-[2.5vw] whitespace-nowrap z-[50] hover:bg-steelblue-400">
//         <a href="/AboutUs" className="text-[1.2vw] leading-[2vw] no-underline font-poppins text-white text-center flex-shrink-0">
//           Learn more
//         </a>
//         <img
//           className="h-[1.2vw] w-[1.2vw]"
//           alt=""
//           src="/figure.svg"
//         />
//       </button>
//     </div>
//   );
// };

// MySection.propTypes = {
//   className: PropTypes.string,
// };

// export default MySection;
import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[49.688rem] flex flex-row flex-wrap items-center justify-center py-[6.25rem] px-[0rem] box-border relative gap-[0rem_0.625rem] bg-[url('/Banner.gif')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[4.375rem] text-orangered font-poppins ${className}`}
    >
      <div className="h-[48.813rem] w-[120rem] relative bg-[url('Banner.gif')] bg-cover bg-no-repeat bg-[top] hidden max-w-full z-[0]" />
           <div className="flex flex-col">
            <h1 className="!m-[0] w-[50.563rem] absolute top-[7.313rem] left-[7.563rem] text-inherit font-normal font-inherit flex items-center z-[1] mq450:text-[2.625rem] mq925:text-[3.5rem]">
              <span className="w-full ">
                <span className="text-orange-500">Elevating</span>
                <span className="text-orange-500">{` `}</span>
                <span className="text-orange-500">Experiences</span>
                <span className="text-orange-500">{`, `}</span>
                <span className="text-gray-800 whitespace-pre-wrap">
                  {" "}
                  Redefining Technology
                </span>
              </span>
            </h1>
            <div className="w-[39.375rem] absolute !m-[0] top-[23.531rem] left-[7.563rem] text-[1.25rem] text-white flex items-center z-[1] mq450:text-[1rem]">
              We provide tailored, cutting-edge audio and video solutions. Whether
              enhancing home entertainment, optimizing business conferencing, or
              creating a state-of-the-art media room, our experts are here to guide
              you.
            </div>
            <div className="flex flex-row ">
            <a href="/AboutUs" className="cursor-pointer no-underline rounded-xl px-[1rem] py-3 bg-orange-500 hover:text-orange-500 text-white w-[13.813rem] !m-[0] absolute top-[35.875rem] left-[7.563rem] overflow-hidden shrink-0 flex flex-row items-end justify-start box-border gap-[0.381rem] whitespace-nowrap z-[1] hover:bg-white">
  <div className="w-[9.581rem] relative text-[1.5rem] leading-[1.444rem] font-poppins text-center flex items-center justify-center shrink-0">
    Learn more
  </div>
  <img
    className="m-0 h-[1.5rem] w-[1.5rem] relative transition-opacity duration-300 opacity-100 hover:opacity-0"
    loading="lazy"
    alt=""
    src="arrow1.png"
  />
</a>


<a href="/Contactus" className="!m-[0] h-[1.444rem] w-[9.581rem] absolute top-[36.0rem] no-underline left-[26.038rem] text-[1.5rem] leading-[5.512rem] font-normal font-inherit p-3 text-white hover:text-orange-500 text-center flex items-center justify-center z-[1] mq450:text-[1.188rem] mq450:leading-[4.438rem] hover:border-orange-500 group">
  Contact Us
  <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
  <span className="absolute top-0 left-0 h-0 w-0.5 bg-white transition-all duration-500 ease-out group-hover:h-full"></span>
  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
  <span className="absolute bottom-0 right-0 h-0 w-0.5 bg-white transition-all duration-500 ease-out group-hover:h-full"></span>
</a>

            </div>
            </div>
    </div>
    
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;

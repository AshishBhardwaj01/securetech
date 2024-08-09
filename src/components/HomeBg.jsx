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
import React from "react";
import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <div
      className={`relative flex flex-col xl:px-10 contrast-125 w-screen max-h-dvh items-start lg:items-center lg:justify-center justify-start py-10 md:py-5 lg:px-2 bg-[url('/Banner.gif')] bg-cover bg-no-repeat bg-top text-left lg:text-center font-poppins ${className}`}
    >
      <div className="container items-start justify-start mx-auto px-4 py-40 lg:py-20 lg:px-1">
        <h1 className="text-8xl md:text-6xl xl:text-7xl font-normal mb-6  lg:m-0">
          <span className="text-orange-500 lg:text-2xl">Elevating Experiences, </span>
          <br className=" md:block" />
          <span className="text-gray-800 lg:text-2xl">Redefining Technology</span>
        </h1>
        <p className="text-white text-left ml-2 pb-10 text-mid md:text-lg lg:text-base max-w-2xl mx-auto mb-8 lg:mb-12">
          We provide tailored, cutting-edge audio and video solutions. Whether
          enhancing home entertainment, optimizing business conferencing, or
          creating a state-of-the-art media room, our experts are here to guide
          you.
        </p>
        <div className="flex flex-row sm:flex-row lg:pl-2  justify-start items-center gap-4">
          <a
            href="/AboutUs"
  className="inline-flex items-center justify-center lg:text-base no-underline px-6 py-3 bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl text-lg font-poppins transition-colors duration-300"
>
  <span>Learn more</span>
  <img
    className="h-6 w-6 ml-2"
    loading="lazy"
    alt=""
    src="arow-unscreen.gif"
  />
</a>
          <a href="/Contactus" className="relative px-8 py-3 text-lg lg:text-base no-underline hover:text-orange-500 text-center text-white flex items-center justify-center hover:border-orange-500 group">
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

// import React from "react";
// import PropTypes from "prop-types";

// const HeroContent = () => {
//   return (
//     <div className="relative flex items-center justify-center w-screen h-screen bg-cover bg-center bg-[url('/Banner.gif')]">
//       {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
//       <div className="relative z-10 text-left items-center justify-center font-poppins py-10 text-white px-36 md:px-8 lg:px-16">
//       <div className="leading-normal">
//         <h1 className="text-8xl text-orange-500 md:text-5xl text-left lg:text-6xl font-semibold mb-4">Elevating</h1>
//         <h1 className="text-8xl md:text-5xl text-left lg:text-6xl font-semibold mb-4">Experiences, Redefining</h1>
//         <h1 className="text-8xl md:text-5xl text-left lg:text-6xl font-semibold mb-4">Technology</h1>

//         </div>
//         <p className="text-lg md:text-xl lg:text-2xl mb-8">We provide tailored, cutting-edge audio and video solutions. Whether enhancing home entertainment, optimizing business conferencing, or creating a state-of-the-art media room, our experts are here to guide you.</p>
//         <div className="flex flex-row md:flex-row gap-4 justify-center py-20">
//           <a href="/about" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Learn More</a>
//           <a href="/Contactus" className="relative px-8 py-3 hover:text-orange-500 text-center text-white flex items-center justify-center hover:border-orange-500 group">
//   Contact Us
//   <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
//   <span className="absolute top-0 left-0 h-0 w-0.5 bg-white transition-all duration-500 ease-out group-hover:h-full"></span>
//   <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
//   <span className="absolute bottom-0 right-0 h-0 w-0.5 bg-white transition-all duration-500 ease-out group-hover:h-full"></span>
// </a>       
//  </div>
//       </div>
//     </div>
//   );
// };

// HeroContent.propTypes = {
//     className: PropTypes.string,
//   };
  

// export default HeroContent;

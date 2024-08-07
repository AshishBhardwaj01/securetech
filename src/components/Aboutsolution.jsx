// import React from "react";
// import PropTypes from "prop-types";
// import solutionsImage from "/avsolution.jpg";
// import { Link } from "react-router-dom";

// const Solution = ({ className = "" }) => {
//   return (
//     <div className={`flex flex-row items-center justify-center gap-10 pb-20 ${className}`}>
//       {/* Left Section */}
//       <div className="flex flex-col items-center h-96 justify-center">
//         <h3 className="font-poppins">View our Solution</h3>
//         <p className="pb-28">
//           We have provided solution and services in a lot of sectors.
//         </p>
//         <Link to="/Solutionpage">
//           <button className="bottom-4 transform bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
//             Our Solutions
//           </button>
//         </Link>
//       </div>

//       {/* Right Section: 2x2 Image Matrix */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="flex flex-col items-center justify-center">
//           <img
//             src="connference.png"
//             alt="Image 1"
//             className="w-full h-48 object-cover"
//           />
//           <h4 className="mt-2 font-semibold">conference room</h4>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <img
//             src="imag2.png"
//             alt="Image 2"
//             className="w-full h-48 object-cover"
//           />
//           <h4 className="mt-2 font-semibold">Image 2</h4>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <img
//             src="imag3.png"
//             alt="Image 3"
//             className="w-full h-48 object-cover"
//           />
//           <h4 className="mt-2 font-semibold">Image 3</h4>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <img
//             src="imag4.png"
//             alt="Image 4"
//             className="w-full h-48 object-cover"
//           />
//           <h4 className="mt-2 font-semibold">Image 4</h4>
//         </div>
//       </div>

//       {/* Original Image Section */}
//       {/* <div className="max-w-full">
//         <img
//           src={solutionsImage}
//           alt="AV Solutions"
//           className="max-w-full"
//         />
//       </div> */}
//     </div>
//   );
// };

// Solution.propTypes = {
//   className: PropTypes.string,
// };

// export default Solution;

import React from "react";
import { Link } from "react-router-dom";

const Solution = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center p-10 justify-center ${className}`}>
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center">Audio Video Solutions</h1>

      {/* Description */}
      <p className="text-md text-center max-w-2xl">
      Our Audio Video Solutions are tailored to enhance productivity, engagement, and overall user experience, making them ideal for businesses, educational institutions, healthcare facilities, and entertainment venues. With a focus on cutting-edge technology and exceptional service, we strive to provide solutions that meet the unique needs of each client.      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M15 10l4.553-4.553a1 1 0 00-1.415-1.414L15 7.586V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h9a1 1 0 001-1v-2.586l3.138 3.137a1 1 0 001.414-1.414L15 10z" />
        </svg>
          <h3 className="text-xl font-semibold mb-2">Video Integration</h3>
          <p className="text-center">
            High-quality video conferencing solutions tailored to your needs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.023 7.359A.5.5 0 005 7.5v5a.5.5 0 00.83.377l4.58-3.75a.5.5 0 000-.754l-4.58-3.75A.5.5 0 005.023 7.359zM11 14a1 1 0 10-2 0v2.5a1 1 0 102 0V14zM14 3a1 1 0 10-2 0v12.5a1 1 0 102 0V3z" clipRule="evenodd" />
        </svg>
          <h3 className="text-xl font-semibold mb-2">Audio Solutions</h3>
          <p className="text-center">
            State-of-the-art audio systems for immersive sound experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v5a1 1 0 002 0V3zm1 5.293l4.243-4.243a1 1 0 10-1.414-1.414L11 6.879 7.879 3.757a1 1 0 00-1.414 1.414L9.293 8H3a1 1 0 000 2h5.293L5.757 13.243a1 1 0 001.414 1.414L11 11.121l3.121 3.121a1 1 0 001.414-1.414L12.707 10H17a1 1 0 100-2h-5.293L13 8.293z" clipRule="evenodd" />
        </svg>
          <h3 className="text-xl font-semibold mb-2">Lighting Solutions</h3>
          <p className="text-center">
            Innovative lighting solutions to enhance your environment.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
      </svg>
          <h3 className="text-xl font-semibold mb-2">Integration Services</h3>
          <p className="text-center">
            Seamless integration of AV solutions into your infrastructure.
          </p>
        </div>
      </div>

      {/* Button with Animation */}
      <Link to="/Solutionpage" className="inline-block p-10 relative overflow-hidden">
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg shadow-lg relative z-10">
        Explore Solutions
        <span className="absolute inset-y-0 left-0 w-0 bg-white transition duration-300 transform translate-x-full group-hover:translate-x-0"></span>
      </button>
    </Link>
    
    </div>
  );
};

export default Solution;

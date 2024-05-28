import React from 'react';
import PropTypes from 'prop-types'; 
const FooterLeft = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col lg:flex-wrap h-[543.9px] relative max-w-full text-center text-11xl text-white font-sans mq925:h-auto mq925:min-h-[543.90] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[600px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <img
          className="h-[136px] w-[150px] relative object-cover"
          alt=""
          src="/image-5@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[292px] max-w-full">
          <div className="self-stretch relative leading-[120.6%] font-medium mq450:text-lg mq450:leading-[22px] mq925:text-5xl mq925:leading-[29px]">
            <p className="m-0">{`SECURETECH AV `}</p>
            <p className="m-0 gap-[50px]">DESIGNS PRIVATE LIMITED</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[200.9px] left-[0px] w-full h-[411px] max-w-full text-left text-smi-3">
      <div className="absolute top-[0px] w-[543.4px] flex flex-col items-start justify-start gap-[10px] max-w-full text-center text-mini-9 font-sans">
          <div className="self-stretch h-[100.9px] relative text-smi-4 tracking-[0.38px] leading-[19.86px] font-light text-darkgray text-left flex items-center shrink-0">{`Secure TechAV Designs Private Limited is driven by a passion for absolute technology. Our company is a sound unit comprising eminent audio engineers & top of the league infrastructure.The core strength of the company is Architectural Acoustics, sound system designing, project execution with skilled workforce & post-project service.`}</div>
        </div>
       
        <div className="absolute top-[300px] left-[0px] flex items-center w-[698px] h-[68px]">
          <span className="w-full">
            <p className="m-0">
              <span className="text-chocolate">Company Address</span>
              <span>
                : Secure TechAV Designs Private Limited A-70-SECTOR 33 NOIDA,
                UTTAR PRADESH, 201301
              </span>
            </p>
            <p className="m-0">INDIA</p>
          </span>
        </div>
        <img
          className="absolute top-[48.1px] left-[50%] rounded-sm w-[611px] h-[249.9px] object-cover"
          alt=""
          src="/image-21@2x.png"
        />
          <div className="absolute top-[0.1px] left-[1657.4px] flex flex-col items-start justify-start gap-[30.5px] text-lgi-1">
            <div className="relative tracking-[-0.8px] leading-[21.4px] font-semibold inline-block min-w-[71.4px]">
              Sitemap
            </div>
            <div className="flex flex-col items-start justify-start gap-[9.9px] text-mid">
              <a
                className="relative tracking-[-0.68px] leading-[23px] font-extralight text-inherit inline-block [text-decoration:none] min-w-[45.6px] hover:font-bold hover:underline cursor-pointer"
                href="https://www.figma.com/design/IApfjMwLHH2HcQEzFuA1Df?node-id=528-2"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
              <div       className="relative tracking-[-0.68px] leading-[23px] font-extralight text-inherit inline-block [text-decoration:none] min-w-[45.6px] hover:font-bold hover:underline cursor-pointer">
                Events Services
              </div>
              <div       className="relative tracking-[-0.68px] leading-[23px] font-extralight text--inherit inline-block [text-decoration:none] min-w-[45.6px] hover:font-bold hover:underline cursor-pointer">
                About Us
              </div>
              <div       className="relative tracking-[-0.68px] leading-[23px] font-extralight text-inherit inline-block [text-decoration:none] min-w-[45.6px] hover:font-bold hover:underline cursor-pointer">
                Our Work
              </div>
              <div       className="relative tracking-[-0.68px] leading-[23px] font-extralight text-inherit inline-block [text-decoration:none] min-w-[45.6px] hover:font-bold hover:underline cursor-pointer">
                Venues
              </div>
              <div       className="relative tracking-[-0.68px] leading-[23px] font-extralight text-inherit inline-block [text-decoration:none] min-w-[45.6px] hover:font-bold hover:underline cursor-pointer">
                News
              </div>
              <div       className="relative tracking-[-0.68px] leading-[23px] font-extralight text-inherit inline-block [text-decoration:none] min-w-[45.6px] hover:font-bold hover:underline cursor-pointer">
                Contact
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

FooterLeft.propTypes = {
  className: PropTypes.string,
};

export default FooterLeft;



// import React from 'react';
// import PropTypes from 'prop-types';
// const FooterLeft = () => {
//   return (
//      <footer className="absolute top-[6942px] bg-black text-white p-6 w-full">
//       <div className="w-full mx-auto flex flex-cols-3 justify-between lg:flex-wrap lg:w-full md:grid-cols-3 gap-8">
        
//         {/* Left Column */}
//         <div className="flex flex-col items-center space-y-4">
//           <div className="flex items-start space-x-2">
//             <img src="/image-5@2x.png" alt="Company Logo" className="w-12 h-12" />
//             <span className="text-2xl font-bold">SecureTech AV</span>
//             {/* <span className="text-2xl font-bold">Designs Private Limited</span> */}

//           </div>
//           <p className="text-white font-poppins">
//           Secure TechAV Designs Private Limited is driven by a passion for absolute technology. </p>
//           <p className="text-white font-poppins"> Our company is a sound unit comprising eminent audio engineers & top of the league infrastructure.</p>
//           <p className="text-white font-poppins">The core strength of the company is Architectural Acoustics, sound system designing, </p>
//           <p className="text-white font-poppins">project execution with skilled workforce & post-project service.          </p>
//           <address className="text-white font-poppins h-full">
//           <span className="text-chocolate font-poppins">Company Address</span>
//                <span className="font-poppins">
//                 : Secure TechAV Designs Private Limited A-70-SECTOR 33 NOIDA,
//                 UTTAR PRADESH, 201301
//               </span>
//           </address>
//         </div>
        
//         {/* Middle Column */}
//         <div className="flex flex-col space-y-4">
//           <div className="w-full h-64">
//             <iframe 
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.9537353153167!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f3e21670d0d!2sGoogle!5e0!3m2!1sen!2sus!4v1611112651997!5m2!1sen!2sus" 
//               width="100%" 
//               height="100%" 
//               allowFullScreen="" 
//               loading="lazy"
//               className="rounded"
//             ></iframe>
//           </div>
//           <p className="text-gray-400">
//             Visit us at our office for more information.
//           </p>
//         </div>
        
//         {/* Right Column */}
//         <div className="flex flex-col space-y-2">
//           <span className="font-bold">Sitemap:</span>
//           <a href="/" className="text-gray-400 hover:text-white">Home</a>
//           <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
//           <a href="/events" className="text-gray-400 hover:text-white">Events</a>
//           <a href="/events" className="text-gray-400 hover:text-white">Solutions</a>
//           <a href="/events" className="text-gray-400 hover:text-white">Contact</a>
//         </div>
//       </div>
//     </footer>
    
//   );
// };
// FooterLeft.propTypes = {
//   className: PropTypes.string,
// };
// export default FooterLeft;


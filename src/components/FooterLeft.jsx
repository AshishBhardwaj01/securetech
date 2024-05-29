import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const FooterLeft = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  // if (isMobile) {
  //   return (
  //     <footer className="relative top-[2000px] bg-black text-white p-6 w-full">
  //       <div className="w-full mx-auto flex flex-cols-3 justify-between lg:flex-wrap lg:w-full md:grid-cols-3 gap-8">
  //         {/* Left Column */}
          // <div className="flex flex-col items-center space-y-4">
          //   <div className="flex items-start space-x-2">
          //     <img src="/image-5@2x.png" alt="Company Logo" className="w-12 h-12" />
          //     <span className="text-2xl font-bold">SecureTech AV</span>
          //   </div>
          //   <p className="text-white font-poppins">
          //     Secure TechAV Designs Private Limited is driven by a passion for absolute technology.
          //   </p>
          //   <p className="text-white font-poppins">
          //     Our company is a sound unit comprising eminent audio engineers & top of the league infrastructure.
          //   </p>
          //   <p className="text-white font-poppins">
          //     The core strength of the company is Architectural Acoustics, sound system designing,
          //   </p>
          //   <p className="text-white font-poppins">
          //     project execution with skilled workforce & post-project service.
          //   </p>
          //   <address className="text-white font-poppins h-full">
          //     <span className="text-chocolate font-poppins">Company Address</span>
          //     <span className="font-poppins">
          //       : Secure TechAV Designs Private Limited A-70-SECTOR 33 NOIDA, UTTAR PRADESH, 201301
          //     </span>
          //   </address>
          // </div>
          
  //         {/* Middle Column */}
          // <div className="flex flex-col space-y-4">
          //   <div className="w-full h-64">
          //     <iframe 
          //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.9537353153167!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f3e21670d0d!2sGoogle!5e0!3m2!1sen!2sus!4v1611112651997!5m2!1sen!2sus" 
          //       width="100%" 
          //       height="100%" 
          //       allowFullScreen="" 
          //       loading="lazy"
          //       className="rounded"
          //     ></iframe>
          //   </div>
          //   <p className="text-gray-400">
          //     Visit us at our office for more information.
          //   </p>
          // </div>
          
  //         {/* Right Column */}
        //   <div className="flex flex-col space-y-2">
        //     <span className="font-bold">Sitemap:</span>
        //     <a href="/" className="text-gray-400 hover:text-white">Home</a>
        //     <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
        //     <a href="/events" className="text-gray-400 hover:text-white">Events</a>
        //     <a href="/events" className="text-gray-400 hover:text-white">Solutions</a>
        //     <a href="/events" className="text-gray-400 hover:text-white">Contact</a>
        //   </div>
        // </div>
  //     </footer>
  //   );
  // }    

  return (
    <div
      className={`self-stretch flex flex-col-3 2xl:grid 2xl:grid-cols-3 2xl:gap-50 lg:flex-row items-center justify-center px-10 gap-20 h-auto w-full lg:flex-wrap text-center text-11xl text-white font-sans ${className}`}
      style={{ minHeight: '543.9px' }}
    >
      <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/image-5@2x.png" alt="Company Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold">SecureTech AV</span>
            </div>
            <p className="text-white font-poppins">
              Secure TechAV Designs Private Limited is driven by a passion for absolute technology.
            
              Our company is a sound unit comprising eminent audio engineers & top of the league infrastructure.
           
              The core strength of the company is Architectural Acoustics, sound system designing,
           
              project execution with skilled workforce & post-project service.
            </p>
            <address className="text-white font-poppins h-full">
              <span className="text-chocolate font-poppins">Company Address</span>
              <span className="font-poppins">
                : Secure TechAV Designs Private Limited A-70-SECTOR 33 NOIDA, UTTAR PRADESH, 201301
              </span>
            </address>
          </div>
          <div className="flex flex-col lg:py-2 space-y-4">
            <div className="w-full h-auto gap-5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.9537353153167!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775f3e21670d0d!2sGoogle!5e0!3m2!1sen!2sus!4v1611112651997!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>
            <p className="text-gray-400">
              Visit us at our office for more information.
            </p>
          </div>
        <div className="flex top-0 right-0 flex flex-col items-start justify-start gap-4 text-lg p-5">
          <div className="tracking-tighter leading-snug font-semibold">Sitemap</div>
          <div className="flex flex-col items-start justify-start gap-2 text-base hover:no-underline">
            <a
              className="tracking-tight leading-snug font-light text-inherit hover:font-bold cursor-pointer"
              href="https://www.figma.com/design/IApfjMwLHH2HcQEzFuA1Df?node-id=528-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              Home
            </a>
            <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
              Events Services
            </div>
            <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
              About Us
            </div>
            <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
              Our Work
            </div>
            <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
              Venues
            </div>
            <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
              News
            </div>
            <div className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
              Contact
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

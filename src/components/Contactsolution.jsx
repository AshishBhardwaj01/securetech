import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Contactsolution = ({ className = "" }) => {
  return (
  <div className={`flex flex-row gap-x-96 py-32 h-auto w-full items-center justify-center shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-lg text-black font-poppins ${className}`}>
  <div className=" flex flex-col items-start px-10 py-10 rounded-2xl shadow-2xl ">
    <h1 className="m-0 tracking-normal font-semibold text-shadow-md">
      Get Ready to get
    </h1>
    <h1 className="m-0 tracking-[-1.7px] font-semibold mt-[-0.7px] text-shadow-md">
      <span>Your </span>
      <span className="text-orange-500">AV Solution</span>
    </h1>
    <div className="relative flex flex-row  items-center gap-3">
    <div className="p-4 border border-gray-500 rounded">
        <span className="text-base leading-[27px]">info@securetech.com</span>
      </div>
      <div className="p-4 border border-gray-500 rounded">
        <span className="text-base leading-[27px]">+91 7008166042</span>
      </div>
     
    </div>
  </div>
  <div className="border-gray-1500 flex flex-col items-start justify-start  gap-6 text-base">
    <div className="flex flex-row gap-20  text-base">
      <div className="flex flex-col gap-5">
      <h3 className="m-0 tracking-[-0.5px] leading-[36px] font-semibold">
        Quick Links
      </h3>
        <Link to="/" className="leading-6 text-black no-underline hover:underline">Home</Link>
        <Link to="/AboutUs" className="leading-6 text-black no-underline hover:underline">About Us</Link>
        <Link to="#" className="leading-6 text-black no-underline hover:underline">Services</Link>
        <Link to="#" className="leading-6 text-black no-underline hover:underline">Corporate Profile</Link>
      </div>
      <div className="flex flex-col gap-5">
      <h3 className="m-0 tracking-[-0.5px] leading-[36px] font-semibold">
        Services
      </h3>
        <Link to="#" className="leading-6 text-black no-underline hover:underline">Audio Visual</Link>
        <Link to="#" className="leading-6 text-black no-underline hover:underline">Architecture Acoustics</Link>
        <Link to="#" className="leading-6 text-black no-underline hover:underline">Post project management</Link>
        <Link to="#" className="leading-6 text-black no-underline hover:underline">Information Technology</Link>
      </div>
    </div>
  </div>
</div>
  );
};

Contactsolution.propTypes = {
  className: PropTypes.string,
};

export default Contactsolution;
import React from "react";
import PropTypes from "prop-types";

const FooterLinks = ({ className = "" }) => {
  return (
    <footer className={`max-w-full bg-slate-900 flex flex-col text-white ${className}`}>
      <div className="flex flex-row items-center justify-center p-5 gap-14">
            <a href="https://www.linkedin.com/company/securetechav-designs/">
            <img
              className="cursor-pointer h-[29.6px] w-[25px] relative min-h-[30px]"
              alt=""
              src="/linkdin.svg"
            />
            </a>
            <a href="https://instagram.com/secuetechav?utm_source=qr">
            <img
              className="cursor-pointer h-[29.6px] w-[25px] relative min-h-[30px]"
              alt=""
              src="instagram.svg"
            />
            </a>
            <a  href="https://www.facebook.com/profile.php?id=61553741201034&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <img
              className="cursor-pointer h-[29.6px] w-[25px] relative min-h-[30px]"
              alt=""
              src="/facebook.svg"
            />
            </a>
          </div>
      <div
        className={` flex flex-col-4 2xl:grid 2xl:grid-cols-4 2xl:pl-40 xl:pl-20 2xl:pb-5 2xl:gap-20 lg:flex-row items-center justify-between px-10 gap-20 lg:gap-9 max-w-full lg:flex-wrap text-center text-11xl text-white font-sans`}
        
      >
        <div className="flex flex-col xl:w-96 items-center space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/image-5@2x.png"
              alt="Company Logo"
              className="w-12 h-12"
            />
            <span className="text-2xl font-semibold">SecureTech AV</span>
          </div>
          <p className="text-white text-left font-poppins">
            Secure TechAV Designs Private Limited is driven by a passion for
            absolute technology. Our company is a sound unit comprising eminent
            audio engineers & top of the league infrastructure. The core
            strength of the company is Architectural Acoustics, sound system
            designing, project execution with skilled workforce & post-project
            service.
          </p>
        </div>
        <div className="flex flex-col lg:py-2 space-y-4">
          <div className="max-w-full h-auto gap-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6174.160431626374!2d77.3509790616948!3d28.588703179313608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51b9a3bb81f%3A0x806219bd741a009f!2sSECURETECH%20AV%20DESIGNS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1716970778201!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
          <address className="text-white font-poppins h-full">
            <span className="text-chocolate font-poppins">Company Address</span>
            <span className="font-poppins">
              : SecureTech AV Designs Private Limited A-70-SECTOR 33 NOIDA,
              UTTAR PRADESH, 201301
            </span>
          </address>
        </div>
        <div className="flex top-0 left-0 flex-col items-center justify-start gap-4 py-5 text-lg p-5">
          <div className="tracking-tighter leading-snug font-semibold">
            Sitemap
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-base hover:no-underline">
            <a
              className="tracking-tight leading-snug no-underline font-light text-inherit hover:underline cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a href="/Solutionpage" className="tracking-tight no-underline leading-snug font-light text-inherit hover:underline cursor-pointer">
              AV Solutions
            </a>
            <a href="/AboutUs" className="tracking-tight no-underline leading-snug font-light text-inherit hover:underline cursor-pointer">
              About Us
            </a>
            <a className="tracking-tight leading-snug font-light text-inherit hover:underline cursor-pointer">
              Our Projects
            </a>
            {/* <a className="tracking-tight leading-snug font-light text-inherit hover:font-bold hover:no-underline cursor-pointer">
              Venue
            </a> */}
            <a href="/Contactus" className="tracking-tight no-underline leading-snug font-light text-inherit hover:underline cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
        <div className="justify-center items-center p-5  w-60">
          <h3>Check out our Corporate Profile</h3>
          <a
      href="https://drive.google.com/file/d/1VDGplc_6wfvQ7Y9-0vvbBtACm-72q_Cj/view"
      download
      className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white no-underline font-bold py-2 px-4 rounded"
    >
      Download
    </a>
        </div>

      </div>
      <div
        className={`w-full flex flex-row items-start justify-center p-2 text-left text-sm-5 text-white font-sans`}
      >  
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <div className="flex flex-row flex-wrap items-end justify-start gap-[11.2px] max-w-full">
              <div className="h-[18.9px] box-border flex flex-row items-end justify-start pt-0 pb-[0.5px] pr-2 pl-0 border-r-[1px] border-solid border-white">
                <div className="relative tracking-[-0.56px] leading-[18.9px] font-extralight">
                  © 2024 SecureTech AV Private Limited
                </div>
              </div>
              <div className="relative tracking-[-0.56px] leading-[18.9px] font-extralight inline-block min-w-[78.4px]">
                Privacy Policy
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.4px] pr-0 pl-[9px] text-sm-6 border-l-[1px] border-solid border-white">
                <div className="relative tracking-[-0.56px] leading-[18.9px] font-extralight">{`Cookie Policy & Settings`}</div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[0.3px] pr-0 pl-[9px] text-sm-7 border-l-[1px] border-solid border-white">
                <div className="relative tracking-[-0.56px] leading-[19px] font-extralight inline-block min-w-[69px] whitespace-nowrap">
                  Our Policies
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

FooterLinks.propTypes = {
  className: PropTypes.string,
};

export default FooterLinks;

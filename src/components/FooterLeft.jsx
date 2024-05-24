import React from 'react';
import PropTypes from 'prop-types'; 
const FooterLeft = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[543.9px] relative max-w-full text-center text-11xl text-white font-sans mq925:h-auto mq925:min-h-[543.9000000000015] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[600px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <img
          className="h-[136px] w-[150px] relative object-cover"
          alt=""
          src="/image-5-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[292px] max-w-full">
          <div className="self-stretch relative leading-[120.6%] font-medium mq450:text-lg mq450:leading-[22px] mq925:text-5xl mq925:leading-[29px]">
            <p className="m-0">{`SECURETECH AV `}</p>
            <p className="m-0">DESIGNS PRIVATE LIMITED</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[132.9px] left-[0px] w-full h-[411px] max-w-full text-left text-smi-3">
        <img
          className="absolute top-[48.1px] left-[0px] rounded-sm w-[611px] h-[249.9px] object-cover"
          alt=""
          src="/image-21@2x.png"
        />
        <div className="absolute top-[343px] left-[0px] flex items-center w-[698px] h-[68px]">
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
        <div className="absolute top-[0px] left-[906px] w-[543.4px] flex flex-col items-start justify-start gap-[50px] max-w-full text-center text-mini-9 font-sans">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
            <div className="relative tracking-[0.38px] leading-[18px] uppercase font-semibold inline-block min-w-[80px]">
              ABOUT US
            </div>
          </div>
          <div className="self-stretch h-[55.9px] relative text-smi-4 tracking-[0.38px] leading-[19.86px] font-light text-darkgray text-left flex items-center shrink-0">{`Secure TechAV Designs Private Limited is driven by a passion for absolute technology. Our company is a sound unit comprising eminent audio engineers & top of the league infrastructure.The core strength of the company is Architectural Acoustics, sound system designing, project execution with skilled workforce & post-project service.`}</div>
        </div>
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

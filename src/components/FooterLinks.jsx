import React from 'react';
import PropTypes from 'prop-types'; 

const FooterLinks = ({ className = "" }) => {
  return (
    <div className={`w-[1756.6px] flex flex-row items-start justify-center max-w-full text-left text-sm-5 text-white font-sans ${className}`}>
      <div className="w-[1299.9px] flex flex-col items-start justify-start gap-[32.5px] max-w-full mq925:gap-[16px]">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <img className="h-[29.6px] w-[25px] relative min-h-[30px]" alt="" src="/link.svg" />
          <img className="h-[29.6px] w-[25px] relative min-h-[30px]" alt="" src="/link-1.svg" />
          <img className="h-[29.6px] w-[25px] relative min-h-[30px]" alt="" src="/link-2.svg" />
          <img className="h-[29.6px] w-[25px] relative min-h-[30px]" alt="" src="/link-3.svg" />
          <img className="h-[29.6px] w-[25px] relative min-h-[30px]" alt="" src="/link-4.svg" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="flex flex-row flex-wrap items-end justify-start gap-[11.2px] max-w-full">
            <div className="h-[18.9px] box-border flex flex-row items-end justify-start pt-0 pb-[0.5px] pr-2 pl-0 border-r-[1px] border-solid border-white">
              <div className="relative tracking-[-0.56px] leading-[18.9px] font-extralight">
                © 2024 Eclipse Presentations Ltd
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
            <div className="h-[18.9px] w-[154.3px] box-border flex flex-row items-end justify-start pt-0 px-[9px] pb-[0.4px] text-sm border-l-[1px] border-solid border-white">
              <div className="relative tracking-[-0.56px] leading-[18.9px] font-extralight inline-block min-w-[67.9px] shrink-0">{`Website by `}</div>
              <div className="flex flex-col items-start justify-start py-0 px-0 text-sm-9">
                <div className="ml-[-0.2px] relative tracking-[-0.56px] leading-[19px] font-extralight inline-block min-w-[78px] whitespace-nowrap">
                  Above Digital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {
  className: PropTypes.string,
};

export default FooterLinks;

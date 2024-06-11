import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ className = "" }) => {
  return (
    <div class="flex flex-row py-28 items-start justify-center gap-96 text-left text-base text-black font-poppins">
  <div class="flex flex-col items-center justify-center max-w-full">
    <div class="flex flex-col items-start justify-start gap-[20.2px] max-w-full">
      <div class="flex flex-col items-start justify-start gap-[0.3px] text-29xl">
        <h1 class="m-0 mt-10 tracking-[-0.96px] leading-[50px] font-semibold">
          Get in Touch with
        </h1>
        <div class="flex flex-row items-start justify-start gap-[33px] text-orange-500">
          <h1 class="m-0 tracking-[-0.96px] leading-[58px] font-semibold">
            Securetech AV Designs
          </h1>
          <img class="h-12 w-12 " loading="lazy" alt="" src="/hand1.svg" />
        </div>
      </div>
      <div class="flex flex-col items-start justify-start text-darkslategray-400">
        <p class="m-0 leading-[29px]">
          Feel free to connect with us for any of your needs regarding our
        </p>
        <p class="m-0 leading-[28.48px]">
          services. Our support team is ready to solve any of your issues.
        </p>
        <p class="m-0 leading-[29px]">
          Just push a text to us and we will get back to you immediately.
        </p>
      </div>
      <h3 classname="text-gray-300">INDIA</h3>
      <div class="w-[455px] flex flex-row items-start justify-start pb-[14.8px] border-t-[2px] border-solid border-darkslategray-500"></div>
      <div class="w-[455px] flex flex-col items-start justify-start gap-[10.9px] text-darkslategray-500">
        <div class="flex flex-row items-start justify-start gap-[10px]">
          <img class="h-5 w-5 mt-1" loading="lazy" alt="" src="/locator.png" />
          <div class="leading-[29px]">
            A-70-SECTOR 33 NOIDA, UTTAR PRADESH, 201301
          </div>
        </div>
        <div class="flex flex-row items-start justify-start gap-[10px]">
          <img class="h-5 w-5 mt-1" loading="lazy" alt="" src="/message.png" />
          <div class="leading-[29px] whitespace-nowrap">
            ashish@securetechav.com
          </div>
        </div>
        <div class="flex flex-row items-start justify-start gap-[10px]">
          <img class="h-5 w-5 mt-1" loading="lazy" alt="" src="/phone.png" />
          <div class="leading-[29px] whitespace-nowrap">
            +91 7017247344
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex bg-gray-900  flex-col items-start justify-center py-5 px-10 gap-2 text-white">
    <h1 className="font-poppins font-semibold items-start">Drop Us A Message</h1>
    <div class="w-[555px] flex flex-col items-start justify-start pb-2 gap-[26px]">
      <div class="flex flex-col items-start justify-start gap-[10px]">
        <div class="bg-gray-900 flex flex-row items-start justify-start pt-[12.3px] pb-[11px] border-b-[1px] border-solid border-slategray">
          <input
            class="w-[371px] bg-[transparent] h-[22.4px] text-white"
            placeholder="Name*"
            type="text"
          />
        </div>
        <div class="bg-gray-900 flex flex-row items-start justify-start pt-[12.3px] pb-[11px] border-b-[1px] border-solid border-slategray">
        <img class="w-[34.4px] h-[22px] object-contain" loading="lazy" alt="" src="/flag.png" />
          <input
            class="w-[371px] bg-[transparent] h-[22.4px] text-white"
            placeholder="Phone No.*"
            type="text"
          />
        </div>
        <div class="bg-gray-900 flex flex-row items-start justify-start pt-[12.3px] pb-[11px] border-b-[1px] border-solid border-slategray">
          <input
            class="w-[180.5px] bg-[transparent] h-[22.4px] text-white"
            placeholder="Email*"
            type="text"
          />
        </div>
        <div class="bg-gray-900 flex flex-row items-start justify-start pt-[12.3px] pb-[11px] border-b-[1px] border-solid border-slategray">
          <input
            class="w-[371px] bg-[transparent] h-[22.4px] text-white"
            placeholder="Which Business do you have ?*"
            type="text"
          />
        </div>
        <div class="bg-gray-900 flex flex-row items-start justify-start pt-[12.3px] pb-[11px] border-b-[1px] border-solid border-slategray">
          <input
            class="w-[371px] bg-[transparent] h-[22.4px] text-white"
            placeholder="Location*"
            type="text"
          />
        </div>
        <textarea
      class="bg-gray-900 h-[232px] w-[553px] text-white border-b-[1px] py-4 border-solid border-slategray"
      placeholder="Message*"
      rows="10"
      cols="28"
    ></textarea>
      </div>
    </div>
    <div class="flex flex-row items-center justify-center">
      <button class="cursor-pointer bg-orange-500 px-36 py-5 bg-chocolate-100 flex flex-row items-end justify-start gap-[9.4px] border-[1px] border-solid border-aquamarine ">
        <div class="text-base leading-[19px] capitalize font-normal text-white">
          Connect with Securetech today
        </div>
        <img class="h-4 w-4" alt="" src="/Icon.png" />
      </button>
    </div>
  </div>
</div>

    
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;

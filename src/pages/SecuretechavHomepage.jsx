import React from 'react';
import Background from "../components/navbar.jsx";
import MySection from "../components/backgroundimg.jsx";
import Component from "../components/solutioncards.jsx";
import Venue from "../components/venue.jsx";
import VenueSpacesContainer from "../components/whysecure2.jsx";
import FrameComponent6 from "../components/whysecure1.jsx"
import FrameComponent from "../components/contactsecure.jsx";
import FrameComponent1 from "../components/review.jsx";
import FrameComponent2 from "../components/ourclients.jsx";
import FrameComponent3 from "../components/ourbrands.jsx";
import FooterLeft from "../components/FooterLeft";
import FooterLinks from "../components/FooterLinks";
import App from '../components/navbar.jsx';

const SecuretechavHomepage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq925:gap-[353px] mq1350:gap-[706px]">
      <main className="h-[7630px] flex-1 relative bg-white max-w-full text-center text-51xl text-black font-poppins mq925:h-auto mq925:min-h-[7630]">
      <App />
      <MySection/>
         {/* <div className="absolute top-[1600px] left-[50%] transform -translate-x-1/2 bg-gray-100 w-full max-w-[1923px] flex flex-row items-center justify-center pt-[60px] px-5 pb-[67px] box-border text-center text-black font-palatino-linotype">
  <h1 className="m-0 h-auto w-full max-w-[673px] tracking-[-0.05em] font-semibold font-poppins text-32xl-2 sm:text-lg md:text-24 lg:text-3xl xl:text-3xl">
    {`Solutions & Services`}
  </h1>
      </div>  */}
      <Component />
      <Venue/>
      <VenueSpacesContainer />
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
        <footer className="absolute top-[6942px] xl:relative xl:top-[1142px] left-[0px] bg-gray-300 w-full flex flex-col items-end justify-start pt-9 pb-[23.4px] pr-[81px] pl-[71px] box-border gap-[3.2px] max-w-full mq1350:pl-[35px] mq1350:pr-10 mq1350:box-border">
          <FooterLeft />
          <FooterLinks />
        </footer>
       
       
        {/* <h1 className="m-0 absolute top-[6110px] left-[745px] text-inherit leading-[83px] font-semibold font-poppins flex items-center justify-center mq450:text-23xl mq450:leading-[49px] mq925:text-37xl mq925:leading-[66px]">
          Our Clients
        </h1> */}
        {/* <b className="absolute top-[5425.7px] left-[644.4px] text-[44.8px] leading-[49.28px] flex font-inter text-[transparent] text-left items-center w-[109.9px] h-[49.3px] mq450:text-[27px] mq450:leading-[30px] mq925:text-[36px] mq925:leading-[39px]">
          touch
        </b> */}
        
       
        
      
      
       
      
       
      </main>
    </div>
  );
};

export default SecuretechavHomepage;

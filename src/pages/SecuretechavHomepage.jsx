import React from 'react';
import MySection from "../components/backgroundimg.jsx";
import Component from "../components/solutioncards.jsx";
import Venue from "../components/venue.jsx";
import VenueSpacesContainer from "../components/whysecure2.jsx";
import FrameComponent from "../components/contactsecure.jsx";
import FrameComponent1 from "../components/review.jsx";
import FrameComponent2 from "../components/ourclients.jsx";
import FrameComponent3 from "../components/ourbrands.jsx";
// import FooterLeft from "../components/FooterLeft";
import FooterLinks from "../components/FooterLinks";
import App from '../components/navbar.jsx';

const SecuretechavHomepage = () => {
  return (
    <div className="w-full [background:linear-gradient(#fff,_#fff),_#fff] overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq925:gap-[353px] mq1350:gap-[706px]">
      <main className="2xl:h-[380vw] xl:h-[6930px] mq1550:h-auto flex-1 relative bg-white max-w-full text-center text-51xl text-black font-poppins mq925:h-auto ">
        <App />
        <MySection />
        <Component  />
        <Venue />
        <VenueSpacesContainer />
        <FrameComponent  />
        <FrameComponent1  />
       
       <FrameComponent2 />
        <FrameComponent3 /> 
        <footer className=" absolute bottom-0 bg-gray-300 max-w-full flex flex-col items-center justify-center box-border gap-[3.2px]">
          <FooterLinks />
        </footer>
      </main>
    </div>
  );
};

export default SecuretechavHomepage;

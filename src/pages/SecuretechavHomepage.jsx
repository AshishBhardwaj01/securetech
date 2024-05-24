import FooterLeft from "../components/FooterLeft";
import FooterLinks from "../components/FooterLinks";
import FrameComponent3 from "../components/ourbrands.jsx";
import FrameComponent2 from "../components/ourclients.jsx";
import FrameComponent1 from "../components/review.jsx";
import FrameComponent from "../components/contactsecure.jsx";
import VenueSpacesContainer from "../components/whysecure2.jsx";
import Venue from "../components/venue.jsx";
import Component from "../components/solutioncards.jsx";
import Background from "../components/navbar.jsx";
import MySection from "../components/backgroundimg.jsx";

const SecuretechavHomepage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq925:gap-[353px] mq1350:gap-[706px]">
      <main className="h-[7630px] flex-1 relative bg-white max-w-full text-center text-51xl text-black font-poppins mq925:h-auto mq925:min-h-[7630]">
        <footer className="absolute top-[6942px] left-[0px] bg-gray-300 w-full flex flex-col items-end justify-start pt-9 pb-[23.4px] pr-[81px] pl-[71px] box-border gap-[3.2px] max-w-full mq1350:pl-[35px] mq1350:pr-10 mq1350:box-border">
          <FooterLeft />
          <FooterLinks />
        </footer>
        <FrameComponent3 />
        <FrameComponent2 />
        {/* <h1 className="m-0 absolute top-[6110px] left-[745px] text-inherit leading-[83px] font-semibold font-poppins flex items-center justify-center mq450:text-23xl mq450:leading-[49px] mq925:text-37xl mq925:leading-[66px]">
          Our Clients
        </h1> */}
        {/* <b className="absolute top-[5425.7px] left-[644.4px] text-[44.8px] leading-[49.28px] flex font-inter text-[transparent] text-left items-center w-[109.9px] h-[49.3px] mq450:text-[27px] mq450:leading-[30px] mq925:text-[36px] mq925:leading-[39px]">
          touch
        </b> */}
        <FrameComponent1 />
        <FrameComponent />
        <VenueSpacesContainer />
        <Venue/>
        <Component />
        <section className="absolute top-[1300px] left-[961px)] bg-gray-100 w-[1923px] flex flex-row items-start justify-center pt-[60px] px-5 pb-[67px] box-border text-left text-51xl text-black font-palatino-linotype">
          <h1 className="m-0 h-[81px] w-[673px] relative text-inherit tracking-[-0.05em] font-semibold font-poppins inline-block shrink-0 max-w-full mq450:text-23xl mq925:text-37xl">{`Solutions & Services`}</h1>
        </section>
        <Background />
        <MySection/>
        {/* <section className="absolute top-[129px] left-[0px] w-full flex flex-col items-end justify-start pt-0 px-[61px] pb-[56.2px] box-border gap-[594px] max-w-full text-center text-51xl text-orangered-100 font-poppins mq925:gap-[148px] mq1350:gap-[297px] mq1350:pl-[30px] mq1350:pr-[30px] mq1350:box-border">
          <div className="w-full h-[1114px] absolute !m-[0] right-[0px] bottom-[2px] left-[0px] bg-[url('image4@2x.png')] bg-cover bg-no-repeat bg-[top]" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
            <h1 className="m-0 h-[431px] w-[1144px] relative text-inherit font-normal font-poppins flex items-center shrink-0 max-w-full z-[1] mq450:text-23xl mq925:text-37xl">
              <span className="w-full">
                <span>Elevating</span>
                <span className="text-white">{` `}</span>
                <span>Experiences</span>
                <span className="text-white">{`, `}</span>
                <span className="text-gray-800">Redefining Technology</span>
              </span>
            </h1>
          </div>
          <button className="cursor-pointer [border:none] pt-[13.7px] px-4 pb-[15px] bg-darkslateblue w-[270.5px] rounded-tl-11xl rounded-tr-none rounded-br-11xl rounded-bl-none overflow-hidden flex flex-row items-end justify-start box-border gap-[38.4px] whitespace-nowrap z-[1] hover:bg-steelblue-400">
            <div className="w-[153.3px] relative text-5xl leading-[23.1px] font-poppins text-white text-center flex items-center justify-center shrink-0">
              Learn more
            </div>
            <img
              className="h-[19.8px] w-[20.8px] relative"
              alt=""
              src="/figure.svg"
            />
          </button>
        </section> */}
      </main>
    </div>
  );
};

export default SecuretechavHomepage;

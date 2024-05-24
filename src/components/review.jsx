import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FrameComponent1 = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content: (
        <div className="flex-3 shadow-[8px_9px_8px_rgba(30,_30,_30,_0.06)] rounded-lg bg-white box-border flex flex-row items-start justify-start py-[29px] px-[30px] min-w-[336px] max-w-full border-[1px] border-solid border-gray-600 mq450:min-w-full">
          <div className="h-[432px] flex-1 flex flex-col items-start justify-start pt-[303px] pb-0 pr-[3px] pl-0 box-border gap-[33px] max-w-full">
            <div className="mt-[-303.5px] self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30.5px] shrink-0">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                <i className="relative leading-[24px]">
                  There's always a degree of anxiety when you hire labor
                </i>
              </div>
              <i className="relative leading-[24px]">
                <p className="m-0">
                  outside of your market – but AVN showed up in force
                </p>
                <p className="m-0">
                  and quickly squashed any concerns that I had! Charms,
                </p>
                <p className="m-0">
                  Inez, and Mark were extraordinarily helpful in the
                </p>
                <p className="m-0">
                  preproduction process and their team on site in Miami
                </p>
                <p className="m-0">
                  was helpful, hardworking, and great company.
                </p>
                <p className="m-0">
                  Everybody had a positive attitude and had the technical
                </p>
                <p className="m-0">
                  skills to back it up. There have been several comments
                </p>
                <p className="m-0">
                  on my team about wishing we could bring this team
                </p>
                <p className="m-0">back with us to New York!</p>
              </i>
            </div>
            <div className="w-[115px] flex flex-col items-start justify-start gap-[6px]">
              <img
                className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0 object-cover"
                alt="Google Review"
                src="/google-reviewpng@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[2.9px]">
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-1.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-2.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-3.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg.svg" />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px] text-xl">
              <img
                className="h-14 w-14 relative rounded-9xl overflow-hidden shrink-0 object-cover"
                alt="Alex Claas"
                src="/1655045839750150x150jpeg@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                <b className="relative leading-[24px] inline-block min-w-[95.2px] shrink-0 mq450:text-base mq450:leading-[19px]">
                  Alex Claas
                </b>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="flex-3 shadow-[8px_9px_8px_rgba(30,_30,_30,_0.06)] rounded-lg bg-white box-border flex flex-row items-start justify-start py-[29px] px-[30px] min-w-[336px] max-w-full border-[1px] border-solid border-gray-600 mq450:min-w-full">
          <div className="h-[432px] flex-1 flex flex-col items-start justify-start pt-[303px] px-0 pb-0 box-border gap-[15.5px] max-w-full">
            <div className="mt-[-303.5px] self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
              <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                <i className="relative leading-[24px]">
                  Audio Visual Nation has been a partner with my AV
                </i>
              </div>
              <i className="relative leading-[24px]">
                <p className="m-0">
                  company for many years. They are our go-to labor
                </p>
                <p className="m-0">
                  source whenever available. The group of people
                </p>
                <p className="m-0">
                  carefully assembled by this company have been critical
                </p>
                <p className="m-0">
                  to the success of our events. Basically, they make us
                </p>
                <p className="m-0">
                  look good! Beyond the unparalleled individual efforts,
                </p>
                <p className="m-0">
                  Audio Visual Nation is responsive and easily moves
                </p>
                <p className="m-0">
                  with the MANY changes we all deal with in this
                </p>
                <p className="m-0">
                  industry. They are thoroughly accommodating without
                </p>
                <p className="m-0">
                  skipping a beat. Our company has, and will continue, to
                </p>
                <p className="m-0">
                  rely on Audio Visual Nation and the amazing group they
                </p>
                <p className="m-0">have put together.</p>
              </i>
            </div>
            <div className="w-[115px] flex flex-col items-start justify-start pt-0 px-0 pb-[17.5px] box-border gap-[6px]">
              <img
                className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0 object-cover"
                alt="Google Review"
                src="/google-reviewpng@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[2.9px]">
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-1.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-2.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-3.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg.svg" />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px] text-xl">
              <img
                className="h-14 w-14 relative rounded-9xl overflow-hidden shrink-0 object-cover"
                alt="Abe Gloria"
                src="/abegloriapng@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                <b className="relative leading-[24px] inline-block min-w-[95px] mq450:text-base mq450:leading-[19px]">
                  Abe Gloria
                </b>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="flex-3 shadow-[8px_9px_8px_rgba(30,_30,_30,_0.06)] rounded-lg bg-white box-border flex flex-row items-start justify-start py-[29px] px-[30px] min-w-[336px] max-w-full border-[1px] border-solid border-gray-600 mq450:min-w-full">
          <div className="h-[432px] flex-1 flex flex-col items-start justify-start pt-[303px] pb-0 pr-4 pl-0 box-border gap-[183.5px] max-w-full">
            <div className="mt-[-303.5px] self-stretch flex flex-col items-start justify-start shrink-0">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                <i className="relative leading-[24px]">
                  Great company, great communication, fast response
                </i>
              </div>
              <i className="relative leading-[24px]">
                <p className="m-0">
                  and best bang for your buck. The Audio Visual Nation
                </p>
                <p className="m-0">
                  team is one of the greatest and got the job done two
                </p>
                <p className="m-0">
                  hours before they were scheduled. Will definitely hire
                </p>
              </i>
            </div>
            <div className="w-[115px] flex flex-col items-start justify-start gap-[6px]">
              <img
                className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0 object-cover"
                alt="Google Review"
                src="/google-reviewpng@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[2.9px]">
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-1.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-2.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg-3.svg" />
                <img className="h-3.5 w-[15.8px] relative min-h-[14px]" alt="Star" src="/svg.svg" />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px] text-xl">
              <img
                className="h-14 w-14 relative rounded-9xl overflow-hidden shrink-0 object-cover"
                alt="Abe Gloria"
                src="/abegloriapng@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                <b className="relative leading-[24px] inline-block min-w-[95px] mq450:text-base mq450:leading-[19px]">
                  Abe Gloria
                </b>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section
      className={`absolute top-[5174px] left-[129px] w-[1610px] flex flex-col items-end justify-start gap-[24.3px] max-w-full text-center text-base text-gray-300 font-poppins ${className}`}
    >
      {/* Title Section */}
      <div className="w-[1552px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-11xl text-deepskyblue">
        <div className="w-[497.2px] flex flex-col items-start justify-start gap-[9.5px] max-w-full">
          <div className="w-[452.3px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h2 className="m-0 relative text-inherit leading-[26px] capitalize font-bold font-poppins mq450:text-lg mq450:leading-[16px] mq925:text-5xl mq925:leading-[21px]">
              Testimonials
            </h2>
          </div>
          <h1 className="m-0 self-stretch relative text-19xl leading-[45px] font-bold font-roboto text-darkslateblue mq450:text-4xl mq450:leading-[27px] mq925:text-11xl mq925:leading-[36px]">
            Hear From Our Happy Clients
          </h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <div className="w-[772.8px] relative leading-[24px] flex items-center shrink-0 max-w-full z-[1]">
          <span className="w-full">
            <p className="m-0">
              Don't just take our word for it. See how working with AVN has helped our clients execute unforgettable events
            </p>
            <p className="m-0">across the nation.</p>
          </span>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[37px] max-w-full text-left font-roboto">
        {/* Left Navigation Button */}
        {/* <div className="h-[273px] w-12 flex flex-col items-start justify-start">
          <button
            className="cursor-pointer pt-2 pb-[13px] pr-4 pl-[17px] bg-transparent self-stretch rounded-3xl overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-deepskyblue hover:bg-steel */}
            {/* Left Navigation Button */}
            <div className="h-[273px] w-12 flex flex-col items-start justify-start">
              <button
                className="cursor-pointer pt-2 pb-[13px] pr-4 pl-[17px] bg-transparent self-stretch rounded-3xl overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-deepskyblue hover:bg-steelblue-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-200"
                onClick={handlePrevClick}
              >
                <div className="w-[13.1px] relative text-21xl tracking-[0.8px] leading-[24px] uppercase font-roboto text-deepskyblue text-center flex items-center justify-center shrink-0 min-w-[13.1px] mq450:text-5xl mq450:leading-[14px] mq925:text-13xl mq925:leading-[19px]">
                  ‹
                </div>
              </button>
            </div>
    
            {/* Testimonial Cards */}
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-center pt-0 pb-3 pr-3 pl-0 box-border gap-[42px] min-w-[936px] max-w-full z-[1] mq1350:flex-wrap mq1350:min-w-full">
              {testimonials[currentIndex].content}
            </div>
    
            {/* Right Navigation Button */}
            <div className="h-[273px] w-12 flex flex-col items-start justify-start">
              <button
                className="cursor-pointer pt-2 pb-[13px] pr-4 pl-[17px] bg-[transparent] self-stretch rounded-3xl overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-deepskyblue hover:bg-steelblue-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-200"
                onClick={handleNextClick}
              >
                <div className="w-[13.1px] relative text-21xl tracking-[0.8px] leading-[24px] uppercase font-roboto text-deepskyblue text-center flex items-center justify-center shrink-0 min-w-[13.1px] mq450:text-5xl mq450:leading-[14px] mq925:text-13xl mq925:leading-[19px]">
                  ›
                </div>
              </button>
            </div>
          </div>
        </section>
      );
    };
    
    FrameComponent1.propTypes = {
      className: PropTypes.string,
    };
    
    export default FrameComponent1;
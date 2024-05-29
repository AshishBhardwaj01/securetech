import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FrameComponent1 = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content: (
        <div className="flex shadow-md rounded-lg bg-white max-w-full h-auto box-border flex flex-col items-center justify-center p-6 min-w-[336px] max-w-full border border-gray-300 mq450:min-w-full">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-left">
              <i className="leading-6 block">
                There's always a degree of anxiety when you hire labor
              </i>
              <i className="leading-6 block">
                <p className="m-0">outside of your market – but AVN showed up in force</p>
                <p className="m-0">and quickly squashed any concerns that I had! Charms,</p>
                <p className="m-0">Inez, and Mark were extraordinarily helpful in the</p>
                <p className="m-0">preproduction process and their team on site in Miami</p>
                <p className="m-0">was helpful, hardworking, and great company.</p>
                <p className="m-0">Everybody had a positive attitude and had the technical</p>
                <p className="m-0">skills to back it up. There have been several comments</p>
                <p className="m-0">on my team about wishing we could bring this team</p>
                <p className="m-0">back with us to New York!</p>
              </i>
            </div>
            <div className="w-28 flex flex-col items-center gap-1.5">
              <img
                className="h-5 w-full object-cover"
                alt="Google Review"
                src="/google-reviewpng@2x.png"
              />
              <div className="flex flex-row items-center gap-1">
                <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-1.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-2.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-3.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-xl">
              <img
                className="h-14 w-14 rounded-full object-cover"
                alt="Alex Claas"
                src="/1655045839750150x150jpeg@2x.png"
              />
              <div className="flex flex-col items-center justify-center">
                <b className="leading-6 block min-w-[95.2px] mq450:text-base mq450:leading-5">
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
        <div className="flex-1 shadow-md rounded-lg bg-white box-border flex flex-col items-center justify-center p-6 min-w-[336px] max-w-full border border-gray-300 mq450:min-w-full">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-left">
              <i className="leading-6 block">
                Audio Visual Nation has been a partner with my AV
              </i>
              <i className="leading-6 block">
                <p className="m-0">company for many years. They are our go-to labor</p>
                <p className="m-0">source whenever available. The group of people</p>
                <p className="m-0">carefully assembled by this company have been critical</p>
                <p className="m-0">to the success of our events. Basically, they make us</p>
                <p className="m-0">look good! Beyond the unparalleled individual efforts,</p>
                <p className="m-0">Audio Visual Nation is responsive and easily moves</p>
                <p className="m-0">with the MANY changes we all deal with in this</p>
                <p className="m-0">industry. They are thoroughly accommodating without</p>
                <p className="m-0">skipping a beat. Our company has, and will continue, to</p>
                <p className="m-0">rely on Audio Visual Nation and the amazing group they</p>
                <p className="m-0">have put together.</p>
              </i>
            </div>
            <div className="w-28 flex flex-col items-center gap-1.5">
              <img
                className="h-5 w-full object-cover"
                alt="Google Review"
                src="/google-reviewpng@2x.png"
              />
              <div className="flex flex-row items-center gap-1">
                <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-1.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-2.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-3.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-xl">
              <img
                className="h-14 w-14 rounded-full object-cover"
                alt="Abe Gloria"
                src="/abegloriapng@2x.png"
              />
              <div className="flex flex-col items-center justify-center">
                <b className="leading-6 block min-w-[95px] mq450:text-base mq450:leading-5">
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
        <div className="flex-1 shadow-md rounded-lg bg-white box-border flex flex-col items-center justify-center p-6 min-w-[336px] max-w-full border border-gray-300 mq450:min-w-full">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-left">
              <i className="leading-6 block">
                Great company, great communication, fast response
              </i>
              <i className="leading-6 block">
                <p className="m-0">and best bang for your buck. The Audio Visual Nation</p>
                <p className="m-0">team is one of the greatest and got the job done two</p>
                <p className="m-0">hours before they were scheduled. Will definitely hire</p>
              </i>
            </div>
            <div className="w-28 flex flex-col items-center gap-1.5">
              <img
                className="h-5 w-full object-cover"
                alt="Google Review"
                src="/google-reviewpng@2x.png"
              />
              <div className="flex flex-row items-center gap-1">
                <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-1.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-2.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg-3.svg" />
                <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-xl">
              <img
                className="h-14 w-14 rounded-full object-cover"
                alt="Abe Gloria"
                src="/abegloriapng@2x.png"
              />
              <div className="flex flex-col items-center justify-center">
                <b className="leading-6 block min-w-[95px] mq450:text-base mq450:leading-5">
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
      className={`relative top-[1600.2px] xl:top-[900.2px] lg:top-[100.2px] items-center justify-center w-full h-screen p-10 lg:p-1 text-center text-base text-gray-300 font-poppins ${className}`}
    >
      <div className="w-full max-w-[1552px] flex flex-col items-center justify-center gap-[2vw]">
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center py-0 px-5 box-border w-full text-center text-deepskyblue text-xl sm:text-lg md:text-24 lg:text-xl-2 xl:text-2xl">
          <div className="w-full max-w-[452.3px] flex flex-row items-center justify-center py-0 px-5 box-border">
            <h2 className="m-0 relative text-inherit leading-[26px] capitalize font-bold font-poppins">
              Testimonials
            </h2>
          </div>
          <h1 className="m-0 text-19xl leading-[45px] font-bold font-roboto text-darkslateblue">
            Hear From Our Happy Clients
          </h1>
        </div>
  
        {/* Intro Text */}
        <div className="flex flex-row items-center justify-center py-0 pr-5 pl-[21px] box-border w-full text-center text-xl sm:text-lg md:text-24 lg:text-xl-2 xl:text-2xl">
          <div className="w-full max-w-[772.8px] relative leading-[24px] flex items-center shrink-0 z-[1]">
            <span className="w-full">
              <p className="m-0">
                Don't just take our word for it. See how working with AVN has helped our clients execute unforgettable events
              </p>
              <p className="m-0">across the nation.</p>
            </span>
          </div>
        </div>
  
        {/* Testimonials Section */}
        <div className="w-full flex flex-row items-center justify-center gap-[10px] lg:gap-[2px] text-center font-roboto ">
          {/* Left Navigation Button */}
          <div className="flex flex-col items-center justify-center h-full">
            <button
              className="cursor-pointer pt-2 pb-[13px] px-4 bg-transparent rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-deepskyblue hover:bg-steelblue-500 hover:box-border hover:border-steelblue-200"
              onClick={handlePrevClick}
            >
              <div className="text-21xl font-roboto text-deepskyblue text-center flex items-center justify-center mq450:text-5xl mq925:text-13xl">
                ‹
              </div>
            </button>
          </div>
  
          {/* Testimonial Cards */}
          <div className="flex overflow-hidden items-center justify-center py-3 px-3 box-border gap-[10px] lg:gap-[2px] min-w-[200px] max-w-full z-[1] mq1350:flex-wrap mq1350:min-w-full">
            {testimonials[currentIndex].content}
          </div>
  
          {/* Right Navigation Button */}
          <div className="flex flex-col items-center justify-center h-full">
            <button
              className="cursor-pointer pt-2 pb-[13px] pr-4 pl-[17px] bg-transparent rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-deepskyblue hover:bg-steelblue-500 hover:box-border hover:border-steelblue-200"
              onClick={handleNextClick}
            >
              <div className="text-21xl font-roboto text-deepskyblue text-center flex items-center justify-center mq450:text-5xl mq925:text-13xl">
                ›
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
  
  
    };
    
    FrameComponent1.propTypes = {
      className: PropTypes.string,
    };
    
    export default FrameComponent1;
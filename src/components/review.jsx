// // import React, { useState } from 'react';
// // import PropTypes from 'prop-types';

// // const FrameComponent1 = ({ className = "" }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const testimonials = [
// //     {
// //       content: (
// //         <div className="flex shadow-md rounded-lg bg-whiteh-auto box-borderflex-col items-center justify-center p-6 2xl:py-20 min-w-[336px] max-w-full border border-gray-300 mq450:min-w-full">
// //           <div className="flex flex-col items-start justify-start gap-4">
// //             <div className="text-left">
// //               <i className="leading-6 block">
// //                 There's always a degree of anxiety when you hire labor
// //               </i>
// //               <i className="leading-6 block">
// //                 <p className="m-0">outside of your market – but AVN showed up in force</p>
// //                 <p className="m-0">and quickly squashed any concerns that I had! Charms,</p>
// //                 <p className="m-0">Inez, and Mark were extraordinarily helpful in the</p>
// //                 <p className="m-0">preproduction process and their team on site in Miami</p>
// //                 <p className="m-0">was helpful, hardworking, and great company.</p>
// //                 <p className="m-0">Everybody had a positive attitude and had the technical</p>
// //                 <p className="m-0">skills to back it up. There have been several comments</p>
// //                 <p className="m-0">on my team about wishing we could bring this team</p>
// //                 <p className="m-0">back with us to New York!</p>
// //               </i>
// //             </div>
// //             <div className="w-28 flex flex-col items-center gap-1.5">
// //               <img
// //                 className="h-5 pt-10 w-full object-cover"
// //                 alt="Google Review"
// //                 src="/google-reviewpng@2x.png"
// //               />
// //               <div className="flex flex-row items-center gap-1">
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-1.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-2.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-3.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
// //               </div>
// //             </div>
// //             <div className="flex flex-row items-center gap-4 text-xl">
// //               <img
// //                 className="h-14 w-14 rounded-full object-cover"
// //                 alt="Alex Claas"
// //                 src="/1655045839750150x150jpeg@2x.png"
// //               />
// //               <div className="flex flex-col items-center justify-center">
// //                 <b className="leading-6 block min-w-[95.2px] mq450:text-base mq450:leading-5">
// //                   Alex Claas
// //                 </b>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },
// //     {
// //       content: (
// //         <div className="flex-1 shadow-md rounded-lg bg-white box-border flex flex-col items-center justify-center p-6 2xl:py-20 min-w-[336px] max-w-full border border-gray-300 mq450:min-w-full">
// //           <div className="flex flex-col items-center justify-center gap-4">
// //             <div className="text-left">
// //               <i className="leading-6 block">
// //                 Audio Visual Nation has been a partner with my AV
// //               </i>
// //               <i className="leading-6 block">
// //                 <p className="m-0">company for many years. They are our go-to labor</p>
// //                 <p className="m-0">source whenever available. The group of people</p>
// //                 <p className="m-0">carefully assembled by this company have been critical</p>
// //                 <p className="m-0">to the success of our events. Basically, they make us</p>
// //                 <p className="m-0">look good! Beyond the unparalleled individual efforts,</p>
// //                 <p className="m-0">Audio Visual Nation is responsive and easily moves</p>
// //                 <p className="m-0">with the MANY changes we all deal with in this</p>
// //                 <p className="m-0">industry. They are thoroughly accommodating without</p>
// //                 <p className="m-0">skipping a beat. Our company has, and will continue, to</p>
// //                 <p className="m-0">rely on Audio Visual Nation and the amazing group they</p>
// //                 <p className="m-0">have put together.</p>
// //               </i>
// //             </div>
// //             <div className="w-28 flex flex-col items-center gap-1.5">
// //               <img
// //                 className="h-5 w-full object-cover"
// //                 alt="Google Review"
// //                 src="/google-reviewpng@2x.png"
// //               />
// //               <div className="flex flex-row items-center gap-1">
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-1.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-2.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-3.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
// //               </div>
// //             </div>
// //             <div className="flex flex-row items-center gap-4 text-xl">
// //               <img
// //                 className="h-14 w-14 rounded-full object-cover"
// //                 alt="Abe Gloria"
// //                 src="/abegloriapng@2x.png"
// //               />
// //               <div className="flex flex-col items-center justify-center">
// //                 <b className="leading-6 block min-w-[95px] mq450:text-base mq450:leading-5">
// //                   Abe Gloria
// //                 </b>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },
// //     {
// //       content: (
// //         <div className="flex-1 shadow-md rounded-lg bg-white box-border flex flex-col items-center justify-center p-6 2xl:py-20 min-w-[336px] max-w-full border border-gray-300 mq450:min-w-full">
// //           <div className="flex flex-col items-center justify-center gap-4">
// //             <div className="text-left">
// //               <i className="leading-6 block">
// //                 Great company, great communication, fast response
// //               </i>
// //               <i className="leading-6 block">
// //                 <p className="m-0">and best bang for your buck. The Audio Visual Nation</p>
// //                 <p className="m-0">team is one of the greatest and got the job done two</p>
// //                 <p className="m-0">hours before they were scheduled. Will definitely hire</p>
// //               </i>
// //             </div>
// //             <div className="w-28 flex flex-col items-center gap-1.5">
// //               <img
// //                 className="h-5 w-full object-cover"
// //                 alt="Google Review"
// //                 src="/google-reviewpng@2x.png"
// //               />
// //               <div className="flex flex-row items-center gap-1">
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-1.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-2.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg-3.svg" />
// //                 <img className="h-3.5 w-4" alt="Star" src="/svg.svg" />
// //               </div>
// //             </div>
// //             <div className="flex flex-row items-center gap-4 text-xl">
// //               <img
// //                 className="h-14 w-14 rounded-full object-cover"
// //                 alt="Abe Gloria"
// //                 src="/abegloriapng@2x.png"
// //               />
// //               <div className="flex flex-col items-center justify-center">
// //                 <b className="leading-6 block min-w-[95px] mq450:text-base mq450:leading-5">
// //                   Abe Gloria
// //                 </b>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },
// //   ];
  

// //   const handlePrevClick = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
// //   };

// //   const handleNextClick = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
// //   };

// //   return (
// //     <section
// //       className={`relative items-center justify-center w-full h-screen p-10  lg:p-1 text-center text-base text-gray-300 font-poppins ${className}`}
// //     >
      // <div className="max-w-full flex flex-col py-[20px] items-center justify-center gap-[2vw]">
      //   {/* Title Section */}
      //   <div className="flex flex-col items-center justify-center py-0 px-2 box-border w-full text-center text-black">
      //       <h1 className="text-2.5xl leading-[40px] font-semibold font-poppins text-black">
      //         Testimonials
      //       </h1>
      //     <h1 className="m-0 text-lg leading-[10px] font-bold font-poppins text-darkslateblue">
      //       Hear From Our Happy Clients
      //     </h1>
      //   </div>
  
      //   {/* Intro Text */}
      //   <div className="flex flex-row items-center justify-center py-0 px-10 box-border w-full text-center text-base">
      //     <div className="w-full max-w-[772.8px] relative leading-[24px] flex items-center shrink-0 z-[1]">
      //       <span className="w-full">
      //         <p className="m-0">
      //           Don't just take our word for it. See how working with AVN has helped our clients execute unforgettable events across the nation.
      //         </p>
              
      //       </span>
      //     </div>
      //   </div>
  
// //         {/* Testimonials Section */}
// //         <div className="w-full flex flex-row items-center justify-center gap-[10px] lg:gap-[2px] text-center font-roboto ">
// //           {/* Left Navigation Button */}
// //           <div className="flex flex-col items-center justify-center h-full">
// //             <button
// //               className="cursor-pointer pt-2 pb-[13px] px-4 bg-transparent rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-deepskyblue hover:bg-darkslateblue hover:border-white"
// //               onClick={handlePrevClick}
// //             >
// //               <div className="text-21xl font-roboto text-deepskyblue text-center flex items-center justify-center mq450:text-5xl mq925:text-13xl">
// //                 ‹
// //               </div>
// //             </button>
// //           </div>
  
// //           {/* Testimonial Cards */}
// //           <div className="flex overflow-hidden items-center justify-center py-3 px-3 box-border gap-[10px] lg:gap-[2px] min-w-[200px] max-w-full z-[1] mq1350:flex-wrap mq1350:min-w-full">
// //             {testimonials[currentIndex].content}
// //           </div>
  
// //           {/* Right Navigation Button */}
// //           <div className="flex flex-col items-center justify-center h-full">
// //             <button
// //               className="cursor-pointer pt-2 pb-[13px] pr-4 pl-[17px] bg-transparent rounded-3xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-deepskyblue hover:bg-darkslateblue hover:box-border hover:border-white"
// //               onClick={handleNextClick}
// //             >
// //               <div className="text-21xl font-roboto text-deepskyblue text-center flex items-center justify-center mq450:text-5xl mq925:text-13xl">
// //                 ›
// //               </div>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
  
  
  
// //     };
    
// //     FrameComponent1.propTypes = {
// //       className: PropTypes.string,
// //     };
    
// //     export default FrameComponent1;


// import React from 'react';
// import PropTypes from 'prop-types';

// const reviews = [
//   {
//     id: 1,
//     image: 'https://via.placeholder.com/100',
//     name: 'John Doe',
//     feedback: 'Great service, very satisfied!',
//     rating: 5,
//   },
//   {
//     id: 2,
//     image: 'https://via.placeholder.com/100',
//     name: 'Jane Smith',
//     feedback: 'Very professional and quick response.',
//     rating: 4,
//   },
//   {
//     id: 3,
//     image: 'https://via.placeholder.com/100',
//     name: 'Michael Johnson',
//     feedback: 'Good experience overall, would recommend.',
//     rating: 5,
//   },
// ];

// const FrameComponent1 = ({ className = "" }) => {
//   return (
//     <div className={`flex items-center justify-between p-4 ${className}`}>
//       {/* Left Button */}
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Left
//       </button>
      
//       {/* Reviews */}
//       <div className="flex flex-col items-center space-y-4">
//         {reviews.map(review => (
//           <div key={review.id} className="bg-white shadow-md rounded-lg p-4 w-64">
//             <div className="flex flex-col items-center space-y-2">
//               <img
//                 src={review.image}
//                 alt={`${review.name}'s profile`}
//                 className="w-16 h-16 rounded-full"
//               />
//               <h3 className="text-lg font-bold">{review.name}</h3>
//               <p className="text-sm text-gray-600 text-center">{review.feedback}</p>
//               <div className="flex">
//                 {Array.from({ length: review.rating }).map((_, index) => (
//                   <svg key={index} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.363 1.118l1.287 3.965c.3.921-.755 1.688-1.538 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.965a1 1 0 00-.363-1.118l-3.386-2.46c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.965z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Button */}
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Right
//       </button>
//     </div>
//   );
// };

// FrameComponent1.propTypes = {
//   className: PropTypes.string,
// };

// export default FrameComponent1;

import React, {useState} from 'react';
import PropTypes from 'prop-types';

const reviews = [
  {
    id: 1,
    image: 'https://via.placeholder.com/200',
    name: 'Antriksh verma',
    feedback: 'Its indeed the place for all your technology needs. i have had a great experience dealing with them for an audio video professional solution. Solution being provided was state of the art and the team was really professional and competant. Thanks SecureTech AV for the awesome experience and wish you all the very best for your future endeavours.',
    rating: 5,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/200',
    name: 'Shivam Kapoor',
    feedback: "Unmatched in the market, their services are top-notch. The staff's cooperation is outstanding, always prioritizing client requirements. Extremely satisfied with the experience!",
    rating: 5,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/200',
    name: 'Nikhil Chaudhary',
    feedback: 'Very technically sound team and reliable for pricing too kudos👍🏻',
    rating: 5,
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/100',
    name: 'Emily Davis',
    feedback: 'Fantastic work, highly recommended!',
    rating: 5,
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/100',
    name: 'David Brown',
    feedback: 'Not bad, but could be better.',
    rating: 3,
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/100',
    name: 'Sarah Wilson',
    feedback: 'Exceptional service and quality!',
    rating: 5,
  },
];

const FrameComponent1 = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };
  return (
    <div className={`flex flex-col gap-5  ${className}`}>
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center px-2 box-border w-full text-center text-black">
            <h1 className="text-2.5xl leading-normal font-semibold font-poppins text-black">
              Testimonials
            </h1>
        </div>
  
        {/* Intro Text */}
        <div className="flex flex-row items-center justify-center px-10 box-border w-full text-center text-base">
          <div className="flex-col w-96 p-2 relative leading-normal flex items-center shrink-0">
          <h1 className="m-0 text-lg leading-normal font-bold font-poppins text-darkslateblue">
            Hear From Our Happy Clients
          </h1>
            <span className="w-full">
              <p className="m-0 font-poppins">
                Don't just take our word for it. See how working with AVN has helped our clients execute unforgettable events across the nation.
              </p>
            </span>
          </div>
        </div>
    <div className={`flex items-center justify-between gap-10 p-10  ${className}`}>
      {/* Left Button */}
      <button 
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-4 rounded-full shadow-lg"
        onClick={handlePrev}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      {/* Reviews */}
      <div className="flex flex-row lg:flex-col gap-10 items-center">
      {reviews.slice(currentIndex, currentIndex + 3).map(review => (
                  <div key={review.id} className=" shadow-md rounded-lg p-6 bg-slate-200  w-80 h-96 relative">
            <div className="absolute lg:top-10 top-1 left-1/2 p-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2">
              <img
                src={review.image}
                alt={`${review.name}'s profile`}
                className="w-24 h-24 rounded-full border-8 border-white  shadow-lg"
              />
            </div>
            <div className="mt-16 flex flex-col items-center space-y-2">
              <h3 className="text-md font-poppins font-semibold">{review.name}</h3>
              <p className="text-sm text-black font-poppins text-center">{review.feedback}</p>
              <div className="flex">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.363 1.118l1.287 3.965c.3.921-.755 1.688-1.538 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.965a1 1 0 00-.363-1.118l-3.386-2.46c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.965z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button 
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-4 rounded-full shadow-lg"
        onClick={handleNext}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

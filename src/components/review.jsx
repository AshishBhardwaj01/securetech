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
    "id": 4,
    "image": "https://via.placeholder.com/100",
    "name": "V M",
    "feedback": "It is my sincere pleasure to recommend you and your organization to anyone considering your services. Not only are your team members highly skilled, they are equally responsive and refreshingly respectful. I have had my share of war stories with inept contractors and subcontractors. Doing this project with you, and your organization was nothing short of pleasurable. Wishing you and your team, nothing but the best.",
    "rating": 5
  },
  {
    "id": 5,
    "image": "https://via.placeholder.com/100",
    "name": "Anurag Khanna",
    "feedback": "At the pinnacle of service quality, this team goes above and beyond. The staff's cooperation and attention to client requirements make them the best in the market. I am thoroughly impressed and satisfied!",
    "rating": 5
  },
  {
    "id": 6,
    "image": "https://via.placeholder.com/100",
    "name": "Mansi Banbasi",
    "feedback": "The key is when a customer walks away, thinking ', Wow, I love doing business with them, and I want to tell others about the experience.' Securetech AV consistently exceed client expectations by delivering innovative solutions on time proficiently and professionally.",
    "rating": 5
  },
  {
    "id": 7,
    "image": "https://via.placeholder.com/100",
    "name": "Crest Ai",
    "feedback": "No other service comes close to the excellence provided by this team. The staff's cooperation and commitment to client needs are unparalleled. My satisfaction knows no bounds!",
    "rating": 5
  },
  {
    "id": 8,
    "image": "https://via.placeholder.com/100",
    "name": "Vivek Tandon",
    "feedback": "Fantastic user experience. Service support is very supportive",
    "rating": 4
  },
  {
    "id": 9,
    "image": "https://via.placeholder.com/100",
    "name": "Pratibha Lalwani",
    "feedback": "Best in market services. Very cooperative staff. Keeps the client requirements at utmost priority. Highly satisfied!!",
    "rating": 5
  },
  {
    "id": 10,
    "image": "https://via.placeholder.com/100",
    "name": "Sukeshi Dhawan",
    "feedback": "The staff is very polite and helpful. You can be assured as they handle services skilfully. Highly recommended.",
    "rating": 5
  },
  {
    "id": 11,
    "image": "https://via.placeholder.com/100",
    "name": "Akshita Singh",
    "feedback": "Finest service provider in market and always keep the customer need at first priority and deliver the service accordingly!! Kudos for the future relationship..",
    "rating": 5
  },
  {
    "id": 12,
    "image": "https://via.placeholder.com/100",
    "name": "Rajani Mehrotra",
    "feedback": "Great service, very helpful employees",
    "rating": 4
  },
  {
    "id": 13,
    "image": "https://via.placeholder.com/100",
    "name": "Sonali Singh",
    "feedback": "It's one of the best AV service provider. Great team and support.",
    "rating": 5
  },
  {
    "id": 14,
    "image": "https://via.placeholder.com/100",
    "name": "Shubham Singh",
    "feedback": "Great service and support",
    "rating": 5
  },
  {
    "id": 15,
    "image": "https://via.placeholder.com/100",
    "name": "Dead Gamerz",
    "feedback": "Very good service",
    "rating": 4
  }
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
    <div className={`flex flex-col gap-5   ${className}`}>
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center px-2 box-border w-full text-center text-black">
            <h1 className="text-2.5xl lg:text-lg leading-normal font-semibold font-poppins text-black">
              Testimonials
            </h1>
        </div>
  
        {/* Intro Text */}
        <div className="flex flex-row items-center justify-center px-10 box-border w-full text-center text-base">
          <div className="flex-col w-96 p-2 relative leading-normal flex items-center shrink-0">
          <h1 className="m-0 text-lg lg:text-mid leading-normal font-bold font-poppins text-darkslateblue">
            Hear From Our Happy Clients
          </h1>
            <span className="w-full">
              <p className="m-0 font-poppins lg:text-sm">
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
                  <div key={review.id} className=" shadow-md rounded-lg p-6 bg-slate-200  w-80 h-96 lg:h-auto relative">
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

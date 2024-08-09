// import React, { useState } from 'react';
// import PropTypes from "prop-types";
// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const toggleChatbox = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSendMessage = async () => {
//     if (inputValue.trim() === "") return;

//     const userMessage = { name: "User", message: inputValue };
//     setMessages([...messages, userMessage]);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/get_response', {
//         method: 'POST',
//         body: JSON.stringify({ message: inputValue }),
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });


//       const data = await response.json();
//       const botMessage = { name: "Sam", message: data.answer };
//       setMessages([...messages, userMessage, botMessage]);
//     } catch (error) {
//       console.error('Error:', error);
//     }

//     setInputValue("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="fixed bottom-8 right-8">
        
//       <div className={`flex flex-col bg-gray-100 p-4 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="flex items-center justify-between bg-gradient-to-r from-blue-700 to-purple-700 p-4 rounded-t-lg">
//           <div className="flex items-center">
//             <img className="w-12 h-12 rounded-full" src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="User" />
//             <div className="ml-3">
//               <h4 className="text-white font-semibold">Chat support</h4>
//               <p className="text-white">Hi. My name is Sam. How can I help you?</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 overflow-y-auto p-4">
//           {messages.map((message, index) => (
//             <div key={index} className={`my-2 p-2 rounded-lg ${message.name === 'Sam' ? 'bg-white text-left' : 'bg-purple-700 text-white text-right'}`}>
//               {message.message}
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center bg-gradient-to-l from-blue-700 to-purple-700 p-4 rounded-b-lg">
//           <input
//             type="text"
//             className="flex-1 p-2 rounded-lg outline-none"
//             placeholder="Write a message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <button className="text-orange-600  font-bold bg-transparent ml-3" onClick={handleSendMessage}>Send</button>
//         </div>
//       </div>
//       <button className="rounded-full bg-transparent  shadow-lg" onClick={toggleChatbox}>
//         <img src="chatbox.png" alt="Chatbox Icon" />
//       </button>
//     </div>
//   );
// };
// Chatbot.propTypes = {
//     className: PropTypes.string,
//   };
// export default Chatbot;
// Chatbot.jsx
// Chatbot.jsx
// Chatbot.jsx
import React, { useState } from 'react';
import { AiOutlineMessage, AiOutlineClose } from 'react-icons/ai';
import { FaHeadset, FaTools, FaProductHunt, FaWrench, FaInfoCircle } from 'react-icons/fa';



const options = {
  initial: [
    "Services",
    "Products",
    "Installation",
    "Support",
    "Contact Information"
  ],
  Services: [
    "We offer a range of services including architectural acoustics, audio visuals, light architectures, information technology solutions, post-project services, and project management.",
    "Our services include audio and video system design, installation, and maintenance. We also provide IT solutions and project management."
  ],
  Products: [
    "We provide a wide range of audio and video equipment, including projectors, screens, sound systems, lighting solutions, and smart home integration products.",
    "Our product offerings include high-quality audio and visual equipment for both residential and commercial purposes."
  ],
  Installation: [
    "Yes, we offer professional installation services for all the equipment we sell. Our team ensures a seamless setup tailored to your needs.",
    "Our installation services include setup, calibration, and optimization of your audio and video systems."
  ],
  Support: [
    "We provide comprehensive support for all our products and services. You can contact our support team for any technical issues or questions.",
    "Yes, all our products come with a warranty. Please reach out to our support team for any assistance."
  ],
  "Contact Information":[
    "Mob No. : +91 7017247344",
    "Email ID: ashish@securetechav.com",
    "Address: A-70, SECTOR 33, NOIDA, UTTAR PRADESH, 201301 ",
  ]
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options.initial);
  const [history, setHistory] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setHistory([...history, option]);
    setCurrentOptions(options[option] || options.initial);
  };

  const handleBack = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    const lastOption = newHistory.length > 0 ? newHistory[newHistory.length - 1] : 'initial';
    setCurrentOptions(options[lastOption] || options.initial);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleToggle}
        className="p-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none transition duration-300 ease-in-out"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMessage size={24} />}
      </button>

      {isOpen && (
        <div className="w-72 h-96 bg-white rounded-lg shadow-lg p-4 mt-2 transition duration-300 ease-in-out overflow-y-auto">
          <div className="mb-4 font-poppins text-orange-500 text-lg font-medium">Hello! Welcome to SecureTech AV Designs. How can we assist you today?</div>
          {history.length > 0 && (
            <button
              onClick={handleBack}
              className="mb-4 text-blue-500 bg-white no-underline hover:text-white hover:bg-blue-500 focus:outline-none"
            >
              Back
            </button>
          )}
          <ul className="space-y-2">
            {currentOptions.map((option, index) => (
              <li key={index} className="flex items-start">
              <span className="mr-2 text-blue-600">➔</span>
                <button
                  onClick={() => handleOptionClick(option)}
                  className="w-full p-2 text-left bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

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

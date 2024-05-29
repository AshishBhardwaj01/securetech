import React, { useState } from 'react';


function App() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex flex-row items-center justify-between flex-wrap p-6">
     <div className="flex items-center flex-shrink-0 text-white mr-6 2xl:mr-72">
       <img src="image-5@2x.png" className="w-100 h-10 mr-2" alt="Logo" />
       <span className="text-xl text-black font-bold">SecureTech AV Designs</span>
     </div>
     <div className="block 2xl:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block 2xl:flex 2xl:items-center 2xl:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm ">
         <a href="#" className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 no-underline hover:underline">
           Home
         </a>
         <a href="#" className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 no-underline hover:underline">
           About Us
         </a>
         <a href="#" className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 no-underline hover:underline">
           Solution
         </a>
         <a href="#" className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 no-underline hover:underline">
           Corporate Profile
         </a>
         <a href="#" className="block mt-4 2xl:inline-block 2xl:mt-0 text-black mr-4 no-underline hover:underline">
           Contact Us
         </a>
       </div>
       <div>
         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white no-underline hover:underline">
           Sign In
         </button>
       </div>
     </div>
   </nav>
 );
}
export default App;
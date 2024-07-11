import React from "react";
import App from "../components/navbar.jsx";
import Solutionimg from "../components/Solutionhead.jsx";
import IndustrySolutions from "../components/exploresolution.jsx";
import FooterLinks from "../components/FooterLinks";
import Solutionvenue from "../components/solutionvenue.jsx";
import Solutioninpage from "../components/solutions.jsx";
import Quote from "../components/Solutionquote.jsx";
const Solutionpage = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <App />
      <Solutionimg />
      <IndustrySolutions />
      <Solutioninpage />
      <Solutionvenue />
      {/* <Quote /> */}
      <FooterLinks />
    </div>
  );
};

export default Solutionpage;
// SolutionPage.js
// import React from 'react';

// const SolutionPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="bg-blue-600 text-white p-6">
//         <h1 className="text-3xl font-bold">Audio-Video Solutions</h1>
//         <p className="mt-2 text-lg">Enhancing your audiovisual experience</p>
//       </header>
      
//       <section className="container mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-4">Overview</h2>
//         <p>We provide comprehensive audio-video solutions to address your specific needs. Whether it's for corporate, education, healthcare, or entertainment, we've got you covered.</p>
//       </section>

//       <section className="container mx-auto p-6 bg-white rounded shadow-md mt-4">
//         <h2 className="text-2xl font-semibold mb-4">Solutions Offered</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-xl font-semibold">Audio Solutions</h3>
//             <p>High-quality sound systems, acoustic treatments, and audio conferencing solutions.</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold">Video Solutions</h3>
//             <p>Advanced video conferencing, digital signage, and video walls to enhance your visual communication.</p>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto p-6 bg-white rounded shadow-md mt-4">
//         <h2 className="text-2xl font-semibold mb-4">Features and Benefits</h2>
//         <ul className="list-disc list-inside">
//           <li>Improved communication and collaboration</li>
//           <li>Enhanced productivity and engagement</li>
//           <li>Seamless integration of audio and video systems</li>
//         </ul>
//       </section>

//       <section className="container mx-auto p-6 bg-white rounded shadow-md mt-4">
//         <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
//         <div>
//           <h3 className="text-xl font-semibold">Corporate Office</h3>
//           <p>Implemented a comprehensive AV system to improve meeting efficiency.</p>
//           <h3 className="text-xl font-semibold mt-4">Educational Institution</h3>
//           <p>Enhanced classroom learning with state-of-the-art audiovisual equipment.</p>
//         </div>
//       </section>

//       <section className="container mx-auto p-6 bg-white rounded shadow-md mt-4">
//         <h2 className="text-2xl font-semibold mb-4">Industries Served</h2>
//         <ul className="list-disc list-inside">
//           <li>Corporate</li>
//           <li>Education</li>
//           <li>Healthcare</li>
//           <li>Entertainment</li>
//         </ul>
//       </section>

//       <section className="container mx-auto p-6 bg-white rounded shadow-md mt-4">
//         <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
//         <div>
//           <h3 className="text-xl font-semibold">What types of audio solutions do you offer?</h3>
//           <p>We offer sound systems, acoustic treatments, and audio conferencing solutions tailored to your needs.</p>        </div>
//         <div className="mt-4">
//           <h3 className="text-xl font-semibold">Do you provide custom solutions?</h3>
//           <p>Yes, we tailor our solutions to meet the specific requirements of each client.</p>
//         </div>
//       </section>

//       <section className="container mx-auto p-6 bg-white rounded shadow-md mt-4">
//         <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-semibold">Name</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded" placeholder="Your Name" />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold">Email</label>
//             <input type="email" className="mt-1 p-2 w-full border rounded" placeholder="Your Email" />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold">Message</label>
//             <textarea className="mt-1 p-2 w-full border rounded" rows="4" placeholder="Your Message"></textarea>
//           </div>
//           <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
//         </form>
//       </section>

//       <footer className="bg-gray-800 text-white p-6 mt-8">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 Audio-Video Solutions</p>
//           <p>Privacy Policy | Terms of Service</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SolutionPage;

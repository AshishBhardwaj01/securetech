import PropTypes from "prop-types";


  
    const solutions = [
      {
        heading: '1. Architectural Acoustics',
        text: 'Designing spaces with optimal acoustics for the best auditory experience. We ensure that every space, whether large or small, has the perfect sound quality. Our expertise extends to soundproofing, echo management, and sound dispersion techniques. We tailor our solutions to meet the specific needs of each project, ensuring clarity and richness in sound. With our architectural acoustics services, every note and word will be heard clearly and beautifully.',
        image: 'imaag2.png'
      },
      {
        heading: '2. Audio Visuals',
        text: 'Integrating state-of-the-art audio and visual equipment for seamless presentations. Our AV solutions are designed to create immersive experiences, from high-definition video displays to crystal-clear audio systems. We handle everything from installation to calibration, ensuring perfect synchronization and optimal performance. Our team stays updated with the latest technology trends to provide cutting-edge solutions. Whether it’s a conference room or an auditorium, we have the expertise to enhance your presentations.',
        image: 'connference.png'
      },
      {
        heading: '3. Light Architectures',
        text: 'Creating lighting solutions that enhance the ambiance and functionality of spaces. We specialize in designing lighting systems that highlight architectural features and create the desired mood. Our services include everything from ambient lighting to task-specific illumination. We use energy-efficient lighting solutions to reduce operational costs and environmental impact. Our team works closely with clients to understand their vision and bring it to life with innovative lighting designs.',
        image: 'imaag1.png'
      },
      {
        heading: '4. Information Technology',
        text: 'Implementing robust IT systems for reliable and efficient operations. Our IT solutions cover network design, server setup, and cybersecurity measures. We ensure that your IT infrastructure is scalable, secure, and optimized for performance. Our team provides ongoing support to address any technical issues promptly. We also offer consultation services to help you plan and implement new technologies. With our IT expertise, your operations will be smooth and uninterrupted.',
        image: 'imag12.png'
      },
      {
        heading: '5. Post Project Services',
        text: 'Providing ongoing support and maintenance for all installed systems. Our post-project services ensure that your systems continue to operate at peak performance. We offer regular maintenance checks, software updates, and troubleshooting services. Our team is available to provide technical support and address any issues that arise. We also offer training sessions to help your staff get the most out of the installed systems. Our commitment to excellence doesn’t end with project completion; we are here to support you every step of the way.',
        image: 'imag10.png'
      },
      {
        heading: '6. Project Management',
        text: 'Ensuring projects are completed on time, within budget, and to the highest standards. Our project management services include planning, coordination, and execution of all project phases. We use proven methodologies and tools to keep projects on track and within scope. Our team communicates clearly and effectively with all stakeholders to ensure everyone is aligned. We also manage risks and handle any issues that arise to keep the project moving forward. With our project management expertise, you can be confident that your project will be a success.',
        image: 'imag11.png'
      }
    ];
    
    const SolutionsContainer = ({ className = "" }) => {
      return (
        <div className="container mx-auto p-6 lg:p-0">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`flex flex-row md:flex-row lg:flex-col items-center my-8 p-4 gap-10 border rounded-lg shadow-lg ${
                index % 2 === 0 ? 'md:flex-row' : 'flex-row-reverse'
              }`}
            >
              <img 
                src={solution.image}
                alt={solution.heading}
                className="w-full md:w-1/2 lg:w-96 h-64 lg:40 object-cover rounded-lg"
              />
              <div className="w-full px-10 lg:px-2 md:w-1/2 lg:w-80 md:px-8 text-left md:text-left">
                <h2 className="text-lg font-semibold mb-4">{solution.heading}</h2>
                <p className="text-sm ">{solution.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };
      
    


SolutionsContainer.propTypes = {
  className: PropTypes.string,
};

export default SolutionsContainer;

// // import PropTypes from "prop-types";

// // const SolutionsContainer = ({ className = "" }) => {
// //   const cards = [
// //     {
// //       image: "imag9.png",
// //       title: "Information Technology",
// //       text: "Leverage the power of IT solutions to streamline operations and boost productivity.",
// //     },
// //     {
// //       image: "imag10.png",
// //       title: "Post Project Services",
// //       text: "Ensure long-term success with our comprehensive post-project services, including maintenance and support.",
// //     },
// //     {
// //       image: "imag11.png",
// //       title: "Project Management",
// //       text: "Achieve project goals efficiently with our expert project management services.",
// //     },
// //     {
// //       image: "imag12.png",
// //       title: "Audio Visual",
// //       text: "Integrate cutting-edge audio-visual technology for a seamless and immersive experience.",
// //     },
// //     {
// //       image: "imaag1.png",
// //       title: "Light Architectures",
// //       text: "Transform spaces with our light architecture services, combining aesthetics with functionality.",
// //     },
// //     {
// //       image: "imaag2.png",
// //       title: "Architectural Acoustics",
// //       text: "Enhance the acoustic environment of your space with our innovative architectural acoustics solutions.",
// //     },
// //   ];

// //   return (
// //     <div className={`grid grid-cols-3 py-20 md:grid-cols-3 gap-6 ${className}`}>
// //       {cards.map((card, index) => (
// //         <div key={index} className="bg-white p-6 h-80 max-w-full flex flex-row rounded-lg shadow-md">
// //           <div className="max-w-full h-32 mb-4">
// //             <img
// //               src={card.image}
// //               alt={card.title}
// //               className=" max-w-full h-60 px-10 py-10 object-cover"
// //             />
// //           </div>
// //          <div className="text-left">
// //           <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
// //           <p className="text-black w-40">{card.text}</p>
// //           <button className="bg-blue-500 text-white px-4 py-2 rounded">
// //             Read More
// //           </button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // SolutionsContainer.propTypes = {
// //   className: PropTypes.string,
// // };

// // export default SolutionsContainer;



// import PropTypes from "prop-types";

// const SolutionCards = ({ className = "" }) => {
//   const solutions = [
//     {
//       image: "imaag1.png",
//       title: "Professional Audio Solution",
//       text: "SecureTech AV Designs Private Limited specializes in crafting bespoke professional audio solutions tailored to your unique needs. From high-fidelity sound systems to acoustic design and implementation, we ensure immersive auditory experiences in diverse environments.",
//     },
//     {
//       image: "https://via.placeholder.com/100",
//       title: "Audio Integration Services",
//       text: "Our video integration services encompass cutting-edge technology implementation, seamless video systems integration, and high-definition visual solutions. We guarantee optimized visual experiences across various settings.",
//     },
//     {
//       image: "https://via.placeholder.com/100",
//       title: "Control System Expertise",
//       text: "We excel in sophisticated control system solutions, enabling seamless management and operation of integrated technologies. Our expertise ensures efficient control interfaces for an enhanced user experience.",
//     },
//     {
//       image: "https://via.placeholder.com/100",
//       title: "Lighting Architecture Solutions",
//       text: "SecureTech AV Designs Private Limited offers comprehensive lighting architecture solutions, including design, installation, and control systems. We create dynamic lighting environments that enhance ambiance and functionality.",
//     },
//     {
//       image: "image5.png",
//       title: "Technology Project Management",
//       text: "With meticulous project management techniques, we oversee the entire project lifecycle, ensuring smooth execution, timely delivery, and adherence to budgetary constraints.",
//     },
//     {
//       image: "image6.png",
//       title: "Information Communication Technology",
//       text: "Our ICT services encompass robust network infrastructure design, unified communication systems, and data center solutions. We ensure seamless connectivity and efficient data management for optimized operations.",
//     },
//     {
//       image: "image7.png",
//       title: "Annual Maintenance Contract",
//       text: "We provide comprehensive AMC services, ensuring sustained system efficiency and performance through regular maintenance, upgrades, and technical support. Each solution is meticulously tailored to meet the specific needs of our clients, ensuring seamless integration and optimal functionality across diverse spaces and industries.",
//     },
//     {
//       image: "image8.png",
//       title: "Dynamic Lighting Architecture for Ambience",
//       text: "Illuminate your space with SecureTech AV Designs Private Limited comprehensive lighting architecture solutions. Our offerings include design, installation, and control systems, creating dynamic lighting environments that enhance both ambiance and functionality.",
//     },
//   ];

//   return (
//     <div className={`grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
//       {solutions.map((solution, index) => (
//         <div key={index} className="bg-white p-10 h-96 max-w-full flex flex-col rounded-lg shadow-md">
//           <div className="h-32 mb-4 flex justify-center">
//             <img
//               src={solution.image}
//               alt={solution.title}
//               className="max-w-full h-32 object-cover"
//             />
//           </div>
//           <div className="text-left">
//             <h2 className="text-xl font-semibold mb-2">{solution.title}</h2>
//             <p className="text-black mb-4">{solution.text}</p>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Read More
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// SolutionCards.propTypes = {
//   className: PropTypes.string,
// };

// export default SolutionCards;








{/* <div className=" flex flex-col items-center justify-center bg-white gap-20 max-w-full ">
        <IndustrySolutions />
        <div className="self-stretch flex flex-col items-center justify-center px-40 box-border gap-10 max-w-full text-left text-5xl text-gray-900 font-montserrat ">
          <div className="flex-1 flex flex-row p-10 items-center justify-center gap-20 shrink-0 ">
            <div className="flex flex-col items-start justify-start py-5 px-5 box-border gap-10 shrink-0 max-w-full ">
              <img
                className="w-80 relative rounded-xl max-w-full overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/imag8.png"
              />
              <h3 className="m-0 relative text-inherit leading-normal font-normal font-inherit inline-block  ">
                Architectural Acoustics
              </h3>
              <div className=" relative text-base leading-normal text-dimgray flex items-center">
                <span className="w-96">
                  <p className="m-0 ">
                  Enhance the acoustic environment of your space with our innovative soundproofing solutions. Our methods ensure that unwanted noise is minimized, providing you with a serene and productive environment.
                  </p>
                 
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-5 px-5 box-border gap-10 shrink-0 max-w-full ">
              <img
                className="w-80 h-56 relative rounded-xl overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/imag10.png"
              />
              <h3 className="m-0 relative text-inherit leading-normal font-normal font-inherit ">
                Light Architecture
              </h3>
              <div className=" text-base leading-normal text-dimgray flex ">
                <span className="w-full">
                  <p className="m-0">
                    Gather around a stunning dining table that’s
                  </p>
                  <p className="m-0">
                    perfect for entertaining. From classic to modern
                  </p>
                  <p className="m-0">
                    styles, we have the perfect table for your home.
                  </p>
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-5 px-5 box-border gap-10 shrink-0 max-w-full ">
              <img
                className="w-80 h-56 relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/imag11.png"
              />
              <h3 className="m-0 relative text-inherit leading-normal font-normal font-inherit inline-block ">
                Audio Visual
              </h3>
              <div className=" relative text-base leading-normal text-dimgray flex items-center">
                <span className="w-full">
                  <p className="m-0">
                    Sink into relaxation with our cozy sofas. Choose
                  </p>
                  <p className="m-0">
                    from our selection of stylish and comfortable
                  </p>
                  <p className="m-0">
                    options that will make you want to stay home all
                  </p>
                  <p className="m-0">day.</p>
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-row items-center p-10 justify-center gap-20 shrink-0 ">  
            <div className="flex flex-col items-start justify-start py-5 px-5 box-border gap-10 shrink-0 max-w-full ">
              <img
                className="w-80 ml-6 h-56 relative rounded-xl overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/imag12.png"
              />
              <h3 className="m-0 ml-6 relative text-inherit leading-normal font-normal font-inherit ">
               Information Technonogy
              </h3>
              <div className="relative text-base leading-normal text-dimgray flex items-center shrink-0">
                <span className="w-full">
                  <p className="m-0 ml-6">
                    Add some character to your space with our
                  </p>
                  <p className="m-0 ml-6">
                    collection of vintage chairs. Each piece has a
                  </p>
                  <p className="m-0 ml-6">unique story and will elevate any room.</p>
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start p-5 box-border relative gap-10 shrink-0 ">
              <img
                className="w-80 h-56 ml-6 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/imag7.png"
              />
              <h3 className="m-0 ml-6 relative text-inherit leading-normal font-normal font-inherit ">
                Project Management
              </h3>
              <div className=" relative text-base leading-normal text-dimgray flex items-center">
                <span className="w-full">
                  <p className="m-0">
                    Get a good night's sleep in a bed frame that's both
                  </p>
                  <p className="m-0">
                    functional and stylish. Choose from our selection
                  </p>
                  <p className="m-0">
                    of designs that will make you want to hit snooze.
                  </p>
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start p-5 box-border relative gap-10 shrink-0 ">
              <img
                className="w-80 h-56 ml-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/imaag1.png"
              />
              <h3 className="m-0 ml-1 relative text-inherit leading-normal font-normal font-inherit ">
                Post Project services
              </h3>
              <div className="relative text-base leading-normal text-dimgray flex items-center">
                <span className="w-full">
                  <p className="m-0">
                    Get a good night's sleep in a bed frame that's both
                  </p>
                  <p className="m-0">
                    functional and stylish. Choose from our selection
                  </p>
                  <p className="m-0">
                    of designs that will make you want to hit snooze.
                  </p>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div> */}
// import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';

// const FrameComponent7 = ({
//   className = "",
//   pikasoTexttoimageStylized,
//   architecturalAcoustics,
//   soundproofingSolutions,
//   acousticDesignAndConsulti,
//   noiseControlAndMitigation,
//   propBorderRadius,
//   propBackgroundColor,
//   propOverflow,
// }) => {
//   const frameDivStyle = useMemo(() => {
//     return {
//       borderRadius: propBorderRadius,
//       backgroundColor: propBackgroundColor,
//       overflow: propOverflow,
//     };
//   }, [propBorderRadius, propBackgroundColor, propOverflow]);

//   return (
//     <div
//       className={`flex flex-col items-start justify-start pt-0 px-0 pb-[41.1px] box-border relative gap-[33px] max-w-full text-left text-11xl text-black font-poppins ${className}`}
//       style={frameDivStyle}
//     >
//       <img
//         className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[41.89px] max-w-full overflow-hidden max-h-full"
//         alt=""
//         src="/rectangle-53716.svg"
//       />
//       <img
//         className="self-stretch h-[580px] relative rounded-[41.89px] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
//         loading="lazy"
//         alt=""
//         src={pikasoTexttoimageStylized}
//       />
//       <div className="w-[544px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
//         <div className="flex-1 flex flex-col items-start justify-start max-w-full">
//           <h2 className="m-0 w-[349px] h-[78px] relative text-inherit tracking-[-0.05em] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-lg mq925:text-5xl">
//             {architecturalAcoustics}
//           </h2>
//           <div className="self-stretch h-[82px] relative text-base tracking-[-0.05em] inline-block shrink-0 z-[1] mt-[-24px]">
//             <ul className="m-0 font-inherit text-inherit pl-[21px]">
//               <li className="mb-0">{soundproofingSolutions}</li>
//               <li className="mb-0">{acousticDesignAndConsulti}</li>
//               <li>{noiseControlAndMitigation}</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// FrameComponent7.propTypes = {
//   className: PropTypes.string,
//   pikasoTexttoimageStylized: PropTypes.string,
//   architecturalAcoustics: PropTypes.string,
//   soundproofingSolutions: PropTypes.string,
//   acousticDesignAndConsulti: PropTypes.string,
//   noiseControlAndMitigation: PropTypes.string,

//   /** Style props */
//   propBorderRadius: PropTypes.any,
//   propBackgroundColor: PropTypes.any,
//   propOverflow: PropTypes.any,
// };

// export default FrameComponent7;

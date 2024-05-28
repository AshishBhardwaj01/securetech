import PropTypes from 'prop-types';
import FrameComponent6 from './whysecure1';

const VenueSpacesContainer = ({ className = "" }) => {
  return (
    <section className={`relative top-[2050px] lg:top-[700px] left-0 px-10 w-[90vw] md:w-[70vmin] flex flex-col items-center justify-start gap-[6vh] max-w-full text-center md:text-left text-[6vw] md:text-[15vmax] text-black font-poppins ${className}`}>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[105px] lg:gap-[10px] max-w-full">
        <div className="w-full flex flex-row items-center justify-center py-0 px-[2.5rem] box-border">
  <h1 className="m-0 max-w-full text-center tracking-[-0.05em] font-semibold font-poppins inline-block shrink-0 text-32xl-2 sm:text-lg md:text-24 lg:text-3xl xl:text-3xl">
    Why SecureTech AV
  </h1>
</div>


          <div className="self-stretch flex flex-col font-poppins items-end justify-start gap-[10px] max-w-full text-base">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3.0625rem] pl-[3.125rem] sm:pr-[.8625rem] sm:pl-[.8625rem] box-border max-w-full">
  <div className="flex-1 relative leading-[1.875rem] text-gray-200 inline-block max-w-full">
    <p className="text-base sm:text-xs md:text-lg lg:text-[1rem] lg:leading-[0.9rem] xl:text-2xl">
      SecureTech AV Designs specializes in the seamless integration of
      audio, visual, lighting architecture, acoustics, and information
      communication technology (ICT), offering tailored solutions for
      a wide range of spaces and industries. With a strong emphasis on precision
      and innovation, we provide comprehensive services including
      design, installation, testing, commissioning, and maintenance.
      Our expert team ensures top-tier solutions, exceeding client
      expectations and redefining technology experiences with
      cutting-edge solutions.
    </p>
  </div>
</div>

            <FrameComponent6 />
          </div>
        </div>
      </div>
    </section>
  );
};

VenueSpacesContainer.propTypes = {
  className: PropTypes.string,
};

export default VenueSpacesContainer;

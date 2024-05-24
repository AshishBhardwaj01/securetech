import PropTypes from 'prop-types';
import FrameComponent6 from './whysecure1';

const VenueSpacesContainer = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[3500px] left-[298px] w-[1362px] flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-51xl text-black font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[105px] max-w-full">
        <div className="w-[1301px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
  <h1 className="m-0 relative text-inherit leading-[50px] font-poppins font-semibold mq450:text-23xl mq450:leading-[30px] mq925:text-37xl mq925:leading-[40px]">
    Why SecureTech AV
  </h1>
</div>

          <div className="self-stretch flex flex-col font-poppins items-end justify-start gap-[10px] max-w-full text-base">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[49px] pl-[50px] box-border max-w-full">
              <div className="flex-1 relative leading-[30px] text-gray-200 inline-block max-w-full">
                SecureTech AV Designs specializes in the seamless integration of
                audio, visual, lighting architecture, acoustics, and information
                communication technology (ICT), offering tailored solutions for
                a wide range of spaces and industries.SecureTech AV Designs
                specializes in the seamless integration of audio, visual,
                lighting architecture, acoustics, and information communication
                technology (ICT), offering tailored solutions for a wide range
                of spaces and industries. With a strong emphasis on precision
                and innovation, we provide comprehensive services including
                design, installation, testing, commissioning, and maintenance.
                Our expert team ensures top-tier solutions, exceeding client
                expectations and redefining technology experiences with
                cutting-edge solutions.
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
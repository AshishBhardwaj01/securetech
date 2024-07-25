import PropTypes from 'prop-types';

const VenueSpacesContainer = ({ className = "" }) => {
  return (
    <section
      className={`relative left-0 2xl:px-10 md:w-[70vmin] flex flex-col py-20 lg:py-5 items-center justify-start gap-[6vh] max-w-full text-center md:text-left text-[6vw] md:text-[15vmax] text-black font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center py-0 box-border max-w-full text-center">
        <div className="flex-1 flex flex-col items-center justify-center gap-14 lg:gap-2.5 max-w-full">
          <div className="w-full flex flex-row items-center justify-center px-10 box-border">
            <h1 className="m-0 max-w-full text-center tracking-[-0.05em] font-semibold font-poppins inline-block shrink-0 lg:text-lg text-2.5xl">
              Why SecureTech AV
            </h1>
          </div>

          <div className="self-stretch flex flex-col font-poppins items-center justify-center gap-2.5 max-w-full text-base">
            <div className="self-stretch flex flex-row items-center justify-center xl:px-0 py-0 pr-[3.0625rem] pl-[3.125rem] box-border max-w-full">
              <div className="flex-1 relative leading-normal text-gray-200 inline-block max-w-full">
                <p className="text-base xl:text-sm">
                  SecureTech AV Designs specializes in the seamless integration
                  of audio, visual, lighting architecture, acoustics, and
                  information communication technology (ICT), offering tailored
                  solutions for a wide range of spaces and industries. With a
                  strong emphasis on precision and innovation, we provide
                  comprehensive services including design, installation,
                  testing, commissioning, and maintenance. Our expert team
                  ensures top-tier solutions, exceeding client expectations and
                  redefining technology experiences with cutting-edge solutions.
                </p>
              </div>
            </div>

            <div className=" flex flex-row lg:flex-col items-center justify-center px-32 gap-8 max-w-full text-right lg:text-mid text-5xl text-gray-200 font-poppins">
              <div className="flex-1 flex flex-col items-start justify-start lg:items-center lg:justify-center min-w-[287px] max-w-full text-right lg:text-center">
                <div className="self-stretch flex flex-col items-end justify-end lg:items-center lg:justify-center pt-0 pb-8 box-border gap-2.5 max-w-full">
                  <h2 className="m-0 relative text-inherit leading-8 font-semibold font-poppins inline-block max-w-full">
                    Industry Expertise
                  </h2>
                  <div className="relative text-base lg:text-sm leading-normal ">
                    <p className="m-0">
                      With over a decade and a half of industry expertise, we've
                      developed best practices through hands-on work, assisting
                      diverse businesses.
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-end lg:items-center lg:justify-center pt-0 px-0 pb-8 box-border gap-2.5 max-w-full">
                  <h2 className="m-0 relative text-inherit leading-8 font-semibold font-poppins">
                    Reliable Infrastructure
                  </h2>
                  <div className="w-[420.1px] relative text-base lg:text-sm leading-6 flex items-center max-w-full">
                    <span className="w-full">
                      <p className="m-0">
                        Our state-of-the-art and secure infrastructure
                        safeguards sensitive information, minimizing risks, and
                        maximizing operational efficiency for businesses.
                      </p>
                    </span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-end lg:items-center lg:justify-center pt-0 px-0 pb-[30.5px] gap-2.5">
                  <h2 className="m-0 relative text-inherit leading-8 font-semibold font-poppins">
                    Skilled Professionals
                  </h2>
                  <div className="relative text-base leading-6 lg:text-sm">
                    <p className="m-0">
                      Partner with SecureTech AV for a team of highly skilled AV
                      Engineering and Programming professionals, ensuring
                      efficient deliveries and swift project start.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-5 lg:hidden">
                          <div className="w-96 h-96 flex items-center justify-center rounded-full bg-white">
                            <img
                              className=" w-96 h-96 item-center relative object-contain"
                              alt=""
                              src="/whysecurebg.png"
                            />
                          </div>
                        </div>
              <div className="flex-1 flex flex-col lg:text-mid items-start justify-start lg:items-center lg:justify-center min-w-[287px] pt-5 max-w-full text-left lg:text-center">
                <div className="self-stretch flex flex-col items-start justify-start lg:items-center lg:justify-center pt-0 px-0 pb-[25.5px] box-border gap-[9.5px] max-w-full">
                  <h2 className="m-0 relative text-inherit leading-8 font-semibold font-poppins inline-block max-w-full ">
                    Premium Quality Output
                  </h2>
                  <div className="relative text-base leading-normal lg:text-sm">
                    <p className="m-0">
                      Leverage our team of experienced AV engineers and
                      programmers, combined with our state-of-the-art
                      infrastructure to ensure premium quality output for all
                      your AV projects.
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start lg:items-center lg:justify-center pt-0 px-0 pb-[30.5px] box-border gap-[9.5px] max-w-full">
                  <h2 className="m-0 relative text-inherit leading-8 font-semibold font-poppins ">
                    Scalable Services
                  </h2>
                  <div className="w-[420.1px] relative text-base leading-normal  flex items-center max-w-full lg:text-sm">
                    <span className="w-full">
                      <p className="m-0">
                        Select services that help your business grow. Utilize
                        our skilled expertise when you need it the most. Manage
                        workloads in busy times, while also saving costs during
                        lean periods.
                      </p>
                    </span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start lg:items-center lg:justify-center pt-0 px-0 pb-[30.5px] gap-[9.5px]">
                  <h2 className="m-0 relative text-inherit leading-8 font-semibold font-poppins ">
                    Reasonable Costs
                  </h2>
                  <div className="relative text-base leading-6 lg:text-sm">
                    <p className="m-0">
                      Benefit from flexible pricing options tailored to your
                      needs, ensuring cost-effectiveness without compromising
                      quality. Trust our industry expertise for exceptional
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

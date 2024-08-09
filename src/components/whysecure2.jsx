import PropTypes from 'prop-types';
import React from 'react';

const FeatureItem = ({ title, description }) => (
  <div className="flex flex-col  justify-start lg:items-center lg:justify-center pt-0 px-0 pb-8 box-border gap-2.5 max-w-full">
    <h2 className="m-0 text-4xl-3 xl:text-base lg:text-xs items-end leading-8 font-semibold font-poppins">{title}</h2>
    <p className="m-0 text-base lg:w-40 items-start lg:text-xs md:text-xs leading-normal">{description}</p>
  </div>
);

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const features = [
  {
    title: "Industry Expertise",
    description: "With over 15 years of industry expertise, we've honed our best practices through extensive hands-on experience, providing tailored assistance to a wide range of businesses."
  },
  {
    title: "Reliable Infrastructure",
    description: "Our state-of-the-art and secure infrastructure safeguards sensitive information, minimizing risks, and maximizing operational efficiency for businesses."
  },
  {
    title: "Skilled Professionals",
    description: "Partner with SecureTech AV for a team of highly skilled AV Engineering and Programming professionals, ensuring efficient deliveries and swift project start."
  },
  {
    title: "Premium Quality Output",
    description: "Leverage our team of experienced AV engineers and programmers, combined with our state-of-the-art infrastructure to ensure premium quality output for all your AV projects."
  },
  {
    title: "Scalable Services",
    description: "Select services that help your business grow. Utilize our skilled expertise when you need it the most. Manage workloads in busy times, while also saving costs during lean periods."
  },
  {
    title: "Reasonable Costs",
    description: "Benefit from flexible pricing options tailored to your needs, ensuring cost-effectiveness without compromising quality. Trust our industry expertise for exceptional results."
  }
];

const VenueSpacesContainer = ({ className = "" }) => {
  return (
    <section className={`relative left-0 2xl:px-10 md:w-[70vmin] flex flex-col py-20 lg:py-5 items-center justify-start gap-[6vh] max-w-full text-center text-black font-poppins ${className}`}>
      <div className="self-stretch flex flex-col items-center justify-center gap-14 lg:gap-2.5 max-w-full">
        <h1 className="m-0 max-w-full text-center tracking-[-0.05em] font-semibold font-poppins lg:text-lg text-2.5xl">
          Why SecureTech AV
        </h1>

        <p className="text-base xl:text-sm  text-gray-200 px-10">
          SecureTech AV Designs seamlessly integrates audio, visual, lighting, acoustics,
          and ICT to deliver tailored, cutting-edge solutions across various industries. 
          We offer comprehensive services from design to maintenance, with a focus 
          on precision and innovation, consistently exceeding client expectations.
        </p>

        <div className="flex flex-row lg:flex-row items-center justify-center px-32 xl:px-10 lg:px-1 2xl:gap-8 xl:gap-4 max-w-full text-5xl text-gray-200">
          <div className="flex-1 flex flex-col items-end lg:items-center justify-start 2xl:min-w-[287px] lg:min-w-20 max-w-full text-right lg:text-center">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
          
          <div className="items-center justify-center px-5 lg:hidden">
            <div className="w-96 h-96 flex items-center justify-center rounded-full bg-white">
              <img
                className="w-96 h-96 item-center relative object-contain"
                alt="SecureTech AV background"
                src="/whysecurebg.png"
              />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-start lg:items-center justify-start 2xl:min-w-[287px] lg:min-w-20 max-w-full text-left lg:text-center">
            {features.slice(3).map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
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
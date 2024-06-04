import React from "react";
import PropTypes from "prop-types";
import { buildQueries } from "@testing-library/react";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row lg:flex-col items-center justify-center gap-[31.4px] max-w-full text-right text-11xl text-gray-200 font-poppins mq1350:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start px-10 min-w-[287px] max-w-full text-right mq1350:flex-1">
        <div className="self-stretch flex flex-col items-end justify-end pt-0 pb-[30.5px] box-border gap-[9.5px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins inline-block max-w-full mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
            Industry Expertise
          </h2>
          <div className="relative text-base leading-[26px]">
            <p className="m-0">
              With over a decade and a half of industry expertise,we've
              developed best practices through hands-on work, assisting diverse
              businesses.through hands-on work, assisting diverse businesses.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-end pt-0 px-0 pb-[30.5px] box-border gap-[9.5px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
            Reliable Infrastructure
          </h2>
          <div className="w-[420.1px] relative text-base leading-[26px] flex items-center max-w-full">
            <span className="w-full">
              <p className="m-0">
                Our state-of-the-art and secure infrastructure safeguards
                sensitive information, minimizing risks,and maximizing
                operational efficiency for businesses.
              </p>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-end pt-0 px-0 pb-[30.5px] gap-[9.5px]">
          <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
            Skilled Professionals
          </h2>
          <div className="relative text-base leading-[26px]">
            <p className="m-0">
              Partner with Analytix for a team of highly skilled AV Engineering
              and Programming professionals, ensuring efficient deliveries and
              swift project start.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[416px] rounded-189xl bg-white box-border flex flex-row items-end justify-start lg:hidden py-[27px] px-[66px] gap-[46px] max-w-full text-center text-xl text-white font-noto-sans border-[2px] border-dashed border-silver mq925:flex-wrap">
        <div className="ml-[-79px] h-[178px] w-[33px] flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch rounded-base-5 bg-firebrick flex flex-row items-start justify-start py-[3px] px-2.5">
            <b className="relative inline-block min-w-[12px] mq450:text-base">
              2
            </b>
          </div>
        </div>
        <div className="w-[284px] flex flex-col items-start justify-start gap-[290px] shrink-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
            <div className="w-[33px] flex flex-row items-start justify-start relative">
              <div className="h-[330px] w-[330px] absolute !m-[0] right-[-274px] bottom-[-310px] rounded-full overflow-hidden bg-[url('/public/whyanalytixnewpng@3x.png')] bg-cover bg-no-repeat lg:hidden bg-[top]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white">
                    <img
                      className="h-[39px] w-10 item-center relative object-contain"
                      alt=""
                      src="/image-5-2@2x.png"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-base-5 bg-steelblue-100 flex flex-row items-start justify-start py-[3px] px-2.5 z-[3]">
                <b className="relative inline-block min-w-[12px] mq450:text-base">
                  1
                </b>
              </div>
            </div>
            <div className="w-[33px] rounded-base-5 bg-steelblue-100 flex flex-row items-start justify-start py-[3px] px-2.5 box-border z-[3]">
              <b className="relative inline-block min-w-[12px] mq450:text-base">
                4
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="w-[33px] rounded-base-5 bg-gray-200 flex flex-row items-start justify-start py-[3px] px-2.5 box-border z-[3]">
              <b className="relative inline-block min-w-[12px] mq450:text-base">
                3
              </b>
            </div>
            <div className="w-[33px] rounded-base-5 bg-gray-200 flex flex-row items-start justify-start py-[3px] px-2.5 box-border z-[3]">
              <b className="relative inline-block min-w-[12px] mq450:text-base">
                6
              </b>
            </div>
          </div>
        </div>
        <div className="h-[178px] w-[33px] flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch rounded-base-5 bg-firebrick flex flex-row items-start justify-start py-[3px] px-2.5">
            <b className="relative inline-block min-w-[12px] mq450:text-base">
              5
            </b>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[287px] max-w-full text-left mq1350:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30.5px] box-border gap-[9.5px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins inline-block max-w-full mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
            Premium Quality Output
          </h2>
          <div className="relative text-base leading-[26px]">
            <p className="m-0">
              Leverage our team of experienced AV engineers and programmers,
              combined with our state-of-the-art infrastructure to ensure
              premium quality output for all your AV projects.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30.5px] box-border gap-[9.5px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
            Scalable Services
          </h2>
          <div className="w-[420.1px] relative text-base leading-[26px] flex items-center max-w-full">
            <span className="w-full">
              <p className="m-0">
                Select services that help your business grow. Utilize our
                skilled expertise when you need it the most. Manage workloads in
                busy times, while also saving costs during lean periods.
              </p>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30.5px] gap-[9.5px]">
          <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
            Reasonable Costs
          </h2>
          <div className="relative text-base leading-[26px]">
            <p className="m-0">
              Benefit from flexible pricing options tailored to your needs,
              ensuring cost-effectiveness without compromising quality. Trust
              our industry expertise for exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;

{
  /* <div className="flex-1 flex flex-col items-start justify-start min-w-[287px] max-w-full text-left mq1350:flex-1">
<div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30.5px] box-border gap-[9.5px] max-w-full">
  <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins inline-block max-w-full mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
    Industry Expertise
  </h2>
  <div className="relative text-base leading-[26px]">
    <p className="m-0">
      With over a decade and a half of industry expertise,we've developed best practices through hands-on work, assisting diverse businesses.
    </p>
  
  </div>
</div>
<div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30.5px] box-border gap-[9.5px] max-w-full">
  <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
    Reliable Infrastructure
  </h2>
  <div className="w-[420.1px] relative text-base leading-[26px] flex items-center max-w-full">
    <span className="w-full">
      <p className="m-0">
                Our state-of-the-art and secure infrastructure safeguards sensitive information, minimizing risks,and maximizing operational efficiency for businesses.
      </p>
     
    </span>
  </div>
</div>
<div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[30.5px] gap-[9.5px]">
  <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-poppins mq450:text-lg mq450:leading-[19px] mq925:text-5xl mq925:leading-[26px]">
    Skilled Professionals
  </h2>
  <div className="relative text-base leading-[26px]">
    <p className="m-0">
              Partner with Analytix for a team of highly skilled AV Engineering and Programming professionals, ensuring efficient deliveries and swift project start.
    </p>
   
  </div>
</div>
</div>  */
}

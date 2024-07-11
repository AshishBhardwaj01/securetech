import PropTypes from "prop-types";

const Quote = ({ className = "" }) => {
  return (
    <div className={`max-w-full bg-contain relative overflow-hidden ${className}`}>
      <img
        className="h-96 md:h-auto w-full object-cover"
        alt=""
        src="/quoteimage.png"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <section className="text-2xl md:text-4xl italic font-light font-open-sans max-w-prose">
          <p className="m-0 font-light">
            "We were looking to make our process more robust and have more data
            than ever before. We partnered with Domo as a data science solution
            to make us smarter about our estimation process with automation and
            improved speed."
          </p>
        </section>
        <div className="mt-6">
          <div className="text-lg md:text-xl">
            Ashish Bhardwaj | project Manager of Global Media Insights
          </div>
          <div className="mt-3 rounded-full px-6 py-3 border-2 border-white uppercase">
            See the Projects
          </div>
        </div>
      </div>
    </div>
  );
};

Quote.propTypes = {
  className: PropTypes.string,
};

export default Quote;

import React from "react";
import PropTypes from "prop-types";
import solutionsImage from "/avsolution.jpg";
import { Link } from "react-router-dom";

const Solution = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center gap-10 pb-20 justify-center hover:shadow-lg h-auto ${className}`}
    >
      <div className="flex flex-col items-center h-96 hover:shadow-lg justify-center">
        <h3 className="font-poppins">View our Solution</h3>
        <p className="pb-28">
          We have provided solution and services in a lot of sectors.
        </p>
        <Link to="/Solutionpage">
        <button className=" bottom-4 transform bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Our Solutions
        </button>
        </Link>
      </div>
      <div className=" max-w-full">
        <img src={solutionsImage} alt="AV Solutions" className="max-w-full" />
      </div>
    </div>
  );
};

Solution.propTypes = {
  className: PropTypes.string,
};

export default Solution;

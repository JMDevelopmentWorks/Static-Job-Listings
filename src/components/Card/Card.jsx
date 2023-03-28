import React from "react";
import "./Card.scss";

const Card = ({ job }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:justify-between  relative bg-white m-4 p-10 rounded shadow-card shadow-desaturatedCyan ${
        job.featured && "border-l-4 border-desaturatedCyan border-solid"
      }`}
    >
      <div className="lg:flex lg:gap-10 lg:items-center">
        <div>
          <img
            className=" absolute w-16 h-16 -top-8 left-4 lg:relative lg:w-24 lg:h-24 lg:top-0 lg:left-0 "
            src={job.logo}
            alt={job.company}
          />
        </div>
        <div className="flex flex-col gap-3.5 lg:gap-2 font-bold -ml-5 lg:ml-0 ">
          <div className="flex gap-4 items-center mt-3">
            <h3 className=" text-base text-desaturatedCyan">{job.company}</h3>
            <div className="flex gap-2">
              {job.new && (
                <span className="bg-desaturatedCyan rounded-xl px-2 py-1 text-xs text-white uppercase">
                  New!
                </span>
              )}
              {job.featured && (
                <span className="bg-veryDarkCyan rounded-xl px-2 py-1 text-xs text-white uppercase">
                  Featured
                </span>
              )}
            </div>
          </div>
          <h2 className="text-base lg:text-xl font-bold hover:text-desaturatedCyan hover:cursor-pointer">
            {" "}
            {job.position}{" "}
          </h2>
          <div className="flex items-center gap-3 text-darkCyan text-appBase">
            <p>{job.postedAt}</p>
            <span>⋅</span>
            <p>{job.contract}</p>
            <span>⋅</span>
            <p>{job.location}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-start lg:justify-end lg:ml-auto gap-4 items-center -ml-5 font-bold text-appBase text-desaturatedCyan border-t border-gray-500 border-solid lg:border-hidden mt-6 pt-6 lg:mt-0 lg:pt-0">
        {job.filters.map((filter, index) => (
          <button
            className="bg-backgroundCyan hover:bg-desaturatedCyan hover:text-white px-2 py-1 flex justify-center items-center rounded-md "
            key={index}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;

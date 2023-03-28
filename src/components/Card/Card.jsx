import React from "react";
import "./Card.scss";

const Card = ({ job }) => {
  return (
    <div className="flex w-1/2 justify-between items-center bg-white  m-4 p-10 rounded shadow-card shadow-desaturatedCyan ">
      <div className="flex gap-1">
        <div>
          <img src={job.logo} alt={job.company} />
        </div>
        <div className=" flex flex-col justify-between ml-5 font-bold">
          <div className="flex gap-3 items-center">
          <h3 className=" text-base text-desaturatedCyan">
            {job.company}
          </h3>
          {job.new && 
          <h3 className="bg-desaturatedCyan rounded-xl px-2 py-1 text-xs text-white uppercase">New!</h3>}
          {job.featured && 
            <h3 className="bg-veryDarkCyan rounded-xl px-2 py-1 text-xs text-white uppercase">Featured</h3>}
    
          </div>
          <h2 className="text-xl tracking-tight font-bold"> {job.position} </h2>
          <div className="flex items-center gap-3.5 text-darkCyan text-appBase">
          <p >
            {job.postedAt} 
          </p>
          <span>⋅</span>
          <p>
            {job.contract} 
          </p>
          <span>⋅</span>
          <p>
           {job.location}
          </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 mr-10 font-bold text-appBase text-desaturatedCyan">
        {job.filters.map((filter, index) => (
          <button
            className="bg-backgroundCyan hover:bg-desaturatedCyan hover:text-white px-4 py-1 flex justify-center items-center rounded-md "
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

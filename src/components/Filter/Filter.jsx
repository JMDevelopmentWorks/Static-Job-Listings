import React from "react";
import "./Filter.scss";

const Filter = ({ filters, clearFilters, handleFilterClick }) => {
  return (
    <div>
      {filters.length > 0 && (
        
        <div className="flex -mt-24  items-center justify-between  relative bg-white m-4 p-6 lg:py-6 lg:px-12 rounded shadow-card">
          <div className="flex flex-wrap items-center gap-4">
          {filters.map((filter, index) => (
            <div className="bg-backgroundCyan text-desaturatedCyan font-bold tracking-tight text-appBase pl-2 my-1 rounded-md flex  gap-2 relative ">
              <span className="py-1" >
                {filter}
              </span>
              <span onClick={() => handleFilterClick(filter)} key={index} className="bg-desaturatedCyan hover:bg-veryDarkCyan hover:cursor-pointer text-white w-7 rounded-r text-center py-1">
              ✕
              </span>
            </div>
          ))}
          </div>
          <span onClick={() => clearFilters()} className="text-appBase font-bold text-gray-400 hover:underline hover:text-desaturatedCyan hover:cursor-pointer">Clear</span>
        </div>

      )}
      
    </div>
  );
};

export default Filter;

import React from "react";
import "./Filter.scss";

const Filter = ({ filters, setFilters, handleFilterClick }) => {
  return (
    <div>
      {filters.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 lg:flex-row  relative bg-white m-4 p-10 rounded shadow-card">
          {filters.map((filter, index) => (
            <span onClick={() => handleFilterClick(filter)} className="bg-backgroundCyan text-desaturatedCyan font-bold tracking-tight text-appBase px-2 py-1 rounded-md flex items-center gap-2 " key={index}>{filter} 
            <span className="bg-desaturatedCyan text-white">
              X
            </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;

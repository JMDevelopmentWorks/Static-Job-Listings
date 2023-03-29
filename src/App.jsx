import { useState, useEffect } from "react";
import { data } from "./Data/Data";
import { Header, Filter, Card, Modal } from "./components";
import "./App.css";

{
  data.map((job) => {
    job.tags = [job.role, job.level];
    job.tags = job.tags.concat(job.languages, job.tools);
    return job;
  });
}

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunction = ({ tags }) => {
    //Showing all jobs if no tag is clicked
    if (filters.length === 0) {
      return true;
    }

    //Showing only jobs sharing the tags clicked

    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    //Preventing double showing the same tag
    if (filters.includes(tag)) {
      return;
    }

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (filterClicked) => {
    //Clearing the tag that has been clicked from the filters Array
    setFilters(filters.filter((f) => f !== filterClicked));
  };

  const filteredJobs = jobs.filter(filterFunction);

  return (
    <main className=" font-spartan relative bg-backgroundCyan min-h-screen">
      <Header />
      <div className="mx-auto lg:w-3/4 mb-14 lg:mb-0">
        <Filter filters={filters} handleFilterClick={handleFilterClick} />
      </div>
      <div className="flex flex-col gap-8 lg:gap-0  mx-auto lg:w-3/4 pb-10 ">
        {filteredJobs.map((job) => (
          <Card job={job} key={job.id} handleTagClick={handleTagClick} />
        ))}
      </div>
    </main>
  );
}

export default App;

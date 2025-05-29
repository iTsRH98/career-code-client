import React, { use } from "react";
import JobCard from "../../Shared/JobCard/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div className="my-12">
      <h2 className="text-6xl font-bold text-center my-12">
        Hot Jobs of The Day
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;

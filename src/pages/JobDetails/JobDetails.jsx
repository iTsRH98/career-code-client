import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">
        Job Details of: {title}
      </h1>
      <p>Company: {company}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;

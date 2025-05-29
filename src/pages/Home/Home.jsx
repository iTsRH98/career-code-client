import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "../HotJobs/HotJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs").then((res) => {
    return res.json();
  });
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;

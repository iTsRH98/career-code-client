import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth/useAuth";
import { myApplicationsPromise } from "../../api/ApplicationsApi";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;

import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className="text-4xl">
        Apply For This Job: <Link to={`/jobs/${jobId}`}>Details</Link>{" "}
      </h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Linkedin Link</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="Linkedin Profile Link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Profile Link"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />
          <input className="btn" type="button" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

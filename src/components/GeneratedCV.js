import React from "react";

const GeneratedCV = (props) => {
  const {
    name,
    email,
    phone,
    schoolName,
    titleOfStudy,
    dateFromStudy,
    dateToStudy,
    companyName,
    positionTitle,
    mainTasks,
    dateFromWork,
    dateToWork,
  } = props;

  return (
    <div className="pt-6 text-slate-700">
      <div className="pb-3">
        <h3 className="text-center text-xl text-slate-900 py-3">
          General Information
        </h3>
        <p>
          Name: <span className="text-slate-900">{name}</span>
        </p>
        <p>
          Email: <span className="text-slate-900">{email}</span>
        </p>
        <p>
          Phone: <span className="text-slate-900">{phone}</span>
        </p>
      </div>
      <hr />
      <div className="pb-3">
        <h3 className="text-center text-xl text-slate-900 py-3">
          Education Experience
        </h3>
        <p>
          School name: <span className="text-slate-900">{schoolName}</span>
        </p>
        <p>
          Title of study: <span className="text-slate-900">{titleOfStudy}</span>
        </p>
        <p>Date of study</p>
        <p>
          From: <span className="text-slate-900">{dateFromStudy}</span>
        </p>
        <p>
          To: <span className="text-slate-900">{dateToStudy}</span>
        </p>
      </div>
      <hr />
      <div className="pb-3">
        <h3 className="text-center text-xl text-slate-900 py-3">
          Practical Experience
        </h3>
        <p>
          Company name: <span className="text-slate-900">{companyName}</span>
        </p>
        <p>
          Position title:{" "}
          <span className="text-slate-900">{positionTitle}</span>
        </p>
        <p>
          Main tasks: <span className="text-slate-900">{mainTasks}</span>
        </p>
        <p>Date of work</p>
        <p>
          From: <span className="text-slate-900">{dateFromWork}</span>
        </p>
        <p>
          To: <span className="text-slate-900">{dateToWork}</span>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default GeneratedCV;

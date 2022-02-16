import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import PracticalInfo from "./PracticalInfo";
import GeneratedCV from "./GeneratedCV";
import "../index.css";

const App = () => {
  const [filled, setFilled] = useState(false);
  const [generalInfoObj, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [educationInfoObj, setEducationInfo] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateFromStudy: "",
    dateToStudy: "",
  });
  const [practicalInfoObj, setPracticalInfo] = useState({
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    dateFromWork: "",
    dateToWork: "",
  });
  const [submitedInput, setSubmitedInput] = useState({});

  function handleChange(e) {
    const value = e.target.value;
    const fieldName = e.target.name;

    if (
      fieldName === "name" ||
      fieldName === "email" ||
      fieldName === "phone"
    ) {
      setGeneralInfo((prevState) => {
        return { ...prevState, [fieldName]: value };
      });
    } else if (
      fieldName === "schoolName" ||
      fieldName === "titleOfStudy" ||
      fieldName === "dateFromStudy" ||
      fieldName === "dateToStudy"
    ) {
      setEducationInfo((prevState) => {
        return { ...prevState, [fieldName]: value };
      });
    } else if (
      fieldName === "companyName" ||
      fieldName === "positionTitle" ||
      fieldName === "mainTasks" ||
      fieldName === "dateFromWork" ||
      fieldName === "dateToWork"
    ) {
      setPracticalInfo((prevState) => {
        return { ...prevState, [fieldName]: value };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitedInput({
      name: generalInfoObj.name,
      email: generalInfoObj.email,
      phone: generalInfoObj.phone,
      schoolName: educationInfoObj.schoolName,
      titleOfStudy: educationInfoObj.titleOfStudy,
      dateFromStudy: educationInfoObj.dateFromStudy,
      dateToStudy: educationInfoObj.dateToStudy,
      companyName: practicalInfoObj.companyName,
      positionTitle: practicalInfoObj.positionTitle,
      mainTasks: practicalInfoObj.mainTasks,
      dateFromWork: practicalInfoObj.dateFromWork,
      dateToWork: practicalInfoObj.dateToWork,
    });
    setFilled(true);
  }

  function handleEdit() {
    setFilled(false);
  }

  return (
    <div className="flex flex-col items-center h-max bg-slate-50">
      {!filled ? (
        <form
          className="flex flex-col bg-white w-3/5 m-6 px-11 shadow-2xl rounded-2xl text-slate-700"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-4xl text-black py-6 lg:text-5xl">
            CV Generator
          </h1>
          <GeneralInfo
            name={generalInfoObj.name}
            email={generalInfoObj.email}
            phone={generalInfoObj.phone}
            handleChange={handleChange}
          />
          <hr />
          <EducationInfo
            schoolName={educationInfoObj.schoolName}
            titleOfStudy={educationInfoObj.titleOfStudy}
            dateFromStudy={educationInfoObj.dateFromStudy}
            dateToStudy={educationInfoObj.dateToStudy}
            handleChange={handleChange}
          />
          <hr />
          <PracticalInfo
            companyName={practicalInfoObj.companyName}
            positionTitle={practicalInfoObj.positionTitle}
            mainTasks={practicalInfoObj.mainTasks}
            dateFromWork={practicalInfoObj.dateFromWork}
            dateToWork={practicalInfoObj.dateToWork}
            handleChange={handleChange}
          />
          <hr />
          <button
            type="submit"
            className="self-center my-3 py-3 w-2/3 border rounded-lg bg-neutral-200 md:w-1/4 lg:w-1/3"
          >
            Submit Information
          </button>
        </form>
      ) : (
        <div className="flex flex-col bg-white w-3/5 m-6 px-11 shadow-2xl rounded-2xl text-slate-700">
          <GeneratedCV
            name={submitedInput.name}
            email={submitedInput.email}
            phone={submitedInput.phone}
            schoolName={submitedInput.schoolName}
            titleOfStudy={submitedInput.titleOfStudy}
            dateFromStudy={submitedInput.dateFromStudy}
            dateToStudy={submitedInput.dateToStudy}
            companyName={submitedInput.companyName}
            positionTitle={submitedInput.positionTitle}
            mainTasks={submitedInput.mainTasks}
            dateFromWork={submitedInput.dateFromWork}
            dateToWork={submitedInput.dateToWork}
          />
          <button
            onClick={handleEdit}
            className="self-center my-3 py-3 px-2 border rounded-lg bg-neutral-200"
          >
            Edit information
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

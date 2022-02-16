import React from "react";

const GeneralInfo = (props) => {
  return (
    <div className="flex flex-col pb-4">
      <h2 className="text-center text-xl text-slate-900 pb-3">
        General Information
      </h2>
      <label htmlFor="nameInput">Name:</label>
      <input
        className="border rounded-md"
        id="nameInput"
        name="name"
        title="setGeneralInfo"
        value={props.name}
        onChange={props.handleChange}
      />

      <label htmlFor="emailInput">Email:</label>
      <input
        className="border rounded-md"
        id="emailInput"
        name="email"
        group="generalInfo"
        type="email"
        value={props.email}
        onChange={props.handleChange}
      />

      <label htmlFor="phoneInput">Phone number:</label>
      <input
        className="border rounded-md"
        id="phoneInput"
        name="phone"
        group="generalInfo"
        type="tel"
        value={props.phone}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default GeneralInfo;

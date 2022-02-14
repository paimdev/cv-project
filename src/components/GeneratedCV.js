import React, { Component } from "react";

//             name={name}
//             email={email}
//             phone={phone}
//             schoolName={schoolName}
//             titleOfStudy={titleOfStudy}
//             dateFromStudy={dateFromStudy}
//             dateToStudy={dateToStudy}
//             companyName={companyName}
//             positionTitle={positionTitle}
//             mainTasks={mainTasks}
//             dateFromWork={dateFromWork}
//             dateToWork={dateToWork}

class GeneratedCV extends Component {
  render() {
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
      } = this.props;

      console.log(this.props);
    return (
      <div>
          <h3>General Information</h3>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <hr />
          <h3>Education Experience</h3>
          <p>{schoolName}</p>
          <p>{titleOfStudy}</p>
          <p>{dateFromStudy}</p>
          <p>{dateToStudy}</p>
          <hr />
          <h3>Practical Experience</h3>
          <p>{companyName}</p>
          <p>{positionTitle}</p>
          <p>{mainTasks}</p>
          <p>{dateFromWork}</p>
          <p>{dateToWork}</p>
          <hr />
      </div>
    );
  }
}

export default GeneratedCV;

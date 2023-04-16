import React from "react";

export default function Studentinfo(props) {
  return (
    <div>
      <h1>Student Details</h1>
      <table className="table">
        <thead className="table-info">
          <tr>
            <th>StudentId</th>
            <th>FirstName</th>
            <th>MiddleName</th>
            <th>LastName</th>
            <th>DOB</th>
            <th>Place of Birth</th>
            <th>First Language</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Pin</th>
          </tr>
        </thead>
        <tbody>
          {props.information.map((obj, i) => {
            return (
              <tr key={i}>
                <td>{obj.Id}</td>
                <td>{obj.Studentinformation.SfirstName}</td>
                <td>{obj.Studentinformation.SmiddleName}</td>
                <td>{obj.Studentinformation.SlastName}</td>
                <td>{obj.Studentinformation.SDOB}</td>
                <td>{obj.Studentinformation.SPOB}</td>
                <td>{obj.Studentinformation.Slanguage}</td>
                <td>{obj.Studentinformation.Scity}</td>
                <td>{obj.Studentinformation.Sstate}</td>
                <td>{obj.Studentinformation.Scountry}</td>
                <td>{obj.Studentinformation.Spin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

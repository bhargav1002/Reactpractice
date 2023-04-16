import React from "react";

export default function Motherinfo(props) {
  return (
    <div>
      <h1>Mother Details</h1>
      <table className="table">
        <thead className="table-info">
          <tr>
            <th>StudentId</th>
            <th>FirstName</th>
            <th>MiddleName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Education Qualification</th>
            <th>Profession</th>
            <th>Designation</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.information.map((obj, i) => {
            return (
              <tr key={i}>
                <td>{obj.Id}</td>
                <td>{obj.Motherinformation.MfirstName}</td>
                <td>{obj.Motherinformation.MmiddleName}</td>
                <td>{obj.Motherinformation.MlastName}</td>
                <td>{obj.Motherinformation.Memail}</td>
                <td>{obj.Motherinformation.Meducation}</td>
                <td>{obj.Motherinformation.Mprofession}</td>
                <td>{obj.Motherinformation.Mdesignation}</td>
                <td>{obj.Motherinformation.Mphone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

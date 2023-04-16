import React from "react";

export default function EmergencyReference(props) {
  return (
    <div>
      <h1>Emergency and Reference Details</h1>
      <table className="table">
        <thead className="table-info">
          <tr>
            <th>StudentId</th>
            <th>Emergency Relation</th>
            <th>Emergency No.</th>
            <th>Refernce</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.information.map((obj, i) => {
            return (
              <tr key={i}>
                <td>{obj.Id}</td>
                <td>{obj.Emergencyinformation.Erelation}</td>
                <td>{obj.Emergencyinformation.Ephone}</td>
                <td>{obj.Referenceinformation.Rref}</td>
                <td>{obj.Referenceinformation.Rphone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

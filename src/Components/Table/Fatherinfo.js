import React from 'react'

export default function Fatherinfo(props) {
  return (
    <div>
      <h1>Father Details</h1>
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
              return(
                <tr key={i}>
                <td>{obj.Id}</td>
                <td>{obj.Fatherinformation.FfirstName}</td>
                <td>{obj.Fatherinformation.FmiddleName}</td>
                <td>{obj.Fatherinformation.FlastName}</td>
                <td>{obj.Fatherinformation.Femail}</td>
                <td>{obj.Fatherinformation.Feducation}</td>
                <td>{obj.Fatherinformation.Fprofession}</td>
                <td>{obj.Fatherinformation.Fdesignation}</td>
                <td>{obj.Fatherinformation.Fphone}</td>
              </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}

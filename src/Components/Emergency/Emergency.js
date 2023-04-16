import React, { useState } from "react";

export default function Emergency(props) {
  
  const [erelation, setErelation] = useState("");
  const [ephone, setEphone] = useState("");

  const rel = (e) => {
    setErelation(e.target.value);
  };

  const phone = (e) => {
    setEphone(e.target.value);
  };

  if(props.flag === true)
  {
    console.log("Emergency");
  }

  const info = {
    Erelation:erelation,
    Ephone:ephone
  };

  props.e(info);

  return (
    <div className="p-5">
      <label className="fs-1 ">Emergency Contact Details</label>
      <hr></hr>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center col-6">
          <label htmfor="firstname" className="fw-semibold text-white">
            Relation
          </label>
          <input
            type="text"
            onChange={rel}
            className="form-control"
            required
          ></input>
        </div>
        <div className="text-center  col-6">
          <label htmfor="firstname" className="fw-semibold text-white">
            Number
          </label>
          <input
            type="number"
            onChange={phone}
            className="form-control"
            required
          ></input>
        </div>
      </div>
    </div>
  );
}

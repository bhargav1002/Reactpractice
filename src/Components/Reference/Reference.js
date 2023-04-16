import React, { useState } from "react";

export default function Reference(props) {

  const [rref, setRref] = useState('');
  const [rphone, setRphone] = useState('');

  const rre = (e) =>
  {
    setRref(e.target.value);
  };

  const rph = (e) =>
  {
    setRphone(e.target.value);
  };

  if(props.flag === true)
  {
    console.log("Reference");
  }
  const info ={
    Rref:rref,
    Rphone:rphone
  };

  props.r(info);

  return (
    <div className="p-5">
      <label className="fs-1 ">Refernce Details</label>
      <hr></hr>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center col-6">
          <label htmfor="firstname" className="fw-semibold text-white">
            Reference through
          </label>
          <input type="text" onChange={rre} className="form-control" required></input>
        </div>
        <div className="text-center  col-6">
          <label htmfor="firstname" className="fw-semibold text-white">
            Phone No.
          </label>
          <input type="number" onChange={rph} className="form-control" required></input>
        </div>
      </div>
    </div>
  );
}

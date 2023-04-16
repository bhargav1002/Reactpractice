import React,{useState} from "react";

export default function Mother(props) {
  const [mfirstName, setMfirstName] = useState("");
  const [mmiddleName, setMmiddleName] = useState("");
  const [mlastName, setMlastName] = useState("");
  const [memail, setMemail] = useState("");
  const [meducation, setMeducation] = useState("");
  const [mprofession, setMprofession] = useState("");
  const [mdesignation, setMdesignation] = useState("");
  const [mphone, setMphone] = useState("");

  const mfname = (e) => {
    setMfirstName(e.target.value);
  };

  const mmname = (e) => {
    setMmiddleName(e.target.value);
  };

  const mlname = (e) => {
    setMlastName(e.target.value);
  };

  const mmemail = (e) => {
    setMemail(e.target.value);
  };

  const mmeducation = (e) => {
    setMeducation(e.target.value);
  };

  const mmprofession = (e) => {
    setMprofession(e.target.value);
  };

  const mmdesignation = (e) => {
    setMdesignation(e.target.value);
  };

  const mmphone = (e) => {
    setMphone(e.target.value);
  };

  if(props.flag === true)
  {
    console.log("Mother");
  }

  const info = {
    MfirstName:mfirstName,
    MmiddleName:mmiddleName,
    MlastName:mlastName,
    Memail:memail,
    Meducation:meducation,
    Mprofession:mprofession,
    Mdesignation:mdesignation,
    Mphone:mphone
  }

  props.m(info);

  return (
    <div className="p-5">
      <label className="fs-1 ">Mother Details</label>
      <hr></hr>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            FirstName
          </label>
          <input type="text" onChange={mfname} className="form-control" required></input>
        </div>
        <div className="text-center  col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            MiddleName
          </label>
          <input type="text" onChange={mmname} className="form-control" required></input>
        </div>
        <div className="text-center  col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            LastName
          </label>
          <input type="text" onChange={mlname} className="form-control" required></input>
        </div>
      </div>
      <br></br>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center col-6">
          <label htmfor="firstname" className="fw-semibold text-white">
            Education Qualification
          </label>
          <input type="text" onChange={mmeducation} className="form-control" required></input>
        </div>
        <div className="text-center  col-6">
          <label htmfor="firstname" className="fw-semibold text-white">
            Profession
          </label>
          <input type="text" onChange={mmprofession} className="form-control" required></input>
        </div>
      </div>
      <br></br>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center  col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            Email
          </label>
          <input type="email" onChange={mmemail} className="form-control" required></input>
        </div>
        <div className="text-center col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            Designation
          </label>
          <input type="text" onChange={mmdesignation} className="form-control" required></input>
        </div>
        <div className="text-center col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            Phone
          </label>
          <input type="number" onChange={mmphone} className="form-control" required></input>
        </div>
      </div>
    </div>
  );
}

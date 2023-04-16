import React,{useState} from "react";

export default function Student(props) {

  const [sfirstName, setSfirstName] = useState('');
  const [smiddleName, setSmiddleName] = useState('');
  const [slastName, setSlastName] = useState('');
  const [sDOB, setSDOB] = useState('');
  const [sPOB, setSPOB] = useState('');
  const [sLanguage, setSLanguage] = useState('');
  const [sCity, setSCity] = useState('');
  const [sState, setSState] = useState('');
  const [sCountry, setSCountry] = useState('');
  const [sPin, setSPin] = useState('');

  const firstname = (e) =>
  {
    setSfirstName(e.target.value);
  }

  const middlename = (e) =>
  {
    setSmiddleName(e.target.value);
  }

  const lastname = (e) =>
  {
    setSlastName(e.target.value);
  }

  const DOB = (e) =>
  {
    setSDOB(e.target.value);
  }

  const POB = (e) =>
  {
    setSPOB(e.target.value);
  }

  const language = (e) =>
  {
    setSLanguage(e.target.value);
  }
  const city = (e) =>
  {
    setSCity(e.target.value);
  }
  const country = (e) =>
  {
    setSCountry(e.target.value);
  }
  const state = (e) =>
  {
    setSState(e.target.value);
  }
  const pin = (e) =>
  {
    setSPin(e.target.value);
  }


  const info = {
    SfirstName:sfirstName,
    SmiddleName:smiddleName,
    SlastName:slastName,
    SDOB:sDOB,
    SPOB:sPOB,
    Slanguage:sLanguage,
    Scity:sCity,
    Sstate:sState,
    Scountry:sCountry,
    Spin:sPin
  }

  props.s(info);
  
  return (
    <div className="p-5">
      {props.flag === true && console.log("Student")}
      <label className="fs-1 ">Student Details</label>
      <hr></hr>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            FirstName
          </label>
          <input type="text" onChange={firstname} className="form-control" required></input>
        </div>
        <div className="text-center  col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            MiddleName
          </label>
          <input type="text" onChange={middlename} className="form-control" required></input>
        </div>
        <div className="text-center  col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            LastName
          </label>
          <input type="text" onChange={lastname} className="form-control" required></input>
        </div>
      </div>
      <br></br>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center  col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            Date of Birth
          </label>
          <input type="date" onChange={DOB} className="form-control" required></input>
        </div>
        <div className="text-center col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            Place of Birth
          </label>
          <input type="text" onChange={POB} className="form-control" required></input>
        </div>
        <div className="text-center  col-4">
          <label htmfor="firstname" className="fw-semibold text-white">
            Language
          </label>
          <input type="text" onChange={language} className="form-control" required></input>
        </div>
      </div>
      <br></br>
      <div className="row justify-content-center col-gap-2">
        <div className="text-center col-3">
          <label htmfor="firstname" className="fw-semibold text-white">
            City
          </label>
          <input type="text" onChange={city} className="form-control" required></input>
        </div>
        <div className="text-center col-3">
          <label htmfor="firstname" className="fw-semibold text-white">
            State
          </label>
          <input type="text" onChange={state} className="form-control" required></input>
        </div>
        <div className="text-center col-3">
          <label htmfor="firstname" className="fw-semibold text-white">
            Country
          </label>
          <input type="text" onChange={country} className="form-control" required></input>
        </div>
        <div className="text-center col-3">
          <label htmfor="firstname" className="fw-semibold text-white">
            PIN
          </label>
          <input type="number" onChange={pin} className="form-control" required></input>
        </div>
      </div>
    </div>
  );
}

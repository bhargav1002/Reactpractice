import "./App.css";
import Student from "./Components/Student/Student";
import Father from "./Components/Father/Father";
import Mother from "./Components/Mother/Mother";
import Emergency from "./Components/Emergency/Emergency";
import Reference from "./Components/Reference/Reference";
import React, { useState } from "react";
import Studentinfo from "./Components/Table/Studentinfo";
import Fatherinfo from "./Components/Table/Fatherinfo";
import Motherinfo from "./Components/Table/Motherinfo";
import EmergencyReference from "./Components/Table/EmergencyReference";

function App() {
  const [sid, setId] = useState(0);
  const [studentinfo, setStudentinfo] = useState("");
  const [fatherinfo, setFatherinfo] = useState("");
  const [motherinfo, setMotherinfo] = useState("");
  const [emergencyinfo, setEmergencyinfo] = useState("");
  const [referenceinfo, setReferenceinfo] = useState("");
  const [information, setInformation] = useState([]);

  let info1, info2, info3, info4, info5;
  const sinfo = (d) => {
    info1 = d;
  };

  const finfo = (d) => {
    info2 = d;
  };

  const minfo = (d) => {
    info3 = d;
  };

  const einfo = (d) => {
    info4 = d;
  };

  const rinfo = (d) => {
    info5 = d;
  };

  let flag=false;

  const submitHandler = (e) => {
    e.preventDefault();
    flag=true
    let infor = {
      Id: sid,
      Studentinformation: studentinfo,
      Fatherinformation: fatherinfo,
      Motherinformation: motherinfo,
      Emergencyinformation: emergencyinfo,
      Referenceinformation: referenceinfo,
    };
    setInformation((arr) => [...arr, infor]);
  };

  const setdata1 = () => {
    setStudentinfo(info1);
    setFatherinfo(info2);
    setMotherinfo(info3);
    setEmergencyinfo(info4);
    setReferenceinfo(info5);
    setId(sid + 1);
  };

  return (
    <div>
      <div>
        <h1 className="text-center pt-5">Admission Form</h1>
        <form onSubmit={submitHandler}>
          <div className="m-5 px-5 border border-dark bg-secondary">
            <Student s={sinfo} flag={flag}></Student>
            <Father f={finfo} flag={flag}></Father>
            <Mother m={minfo} flag={flag}></Mother>
            <Emergency e={einfo} flag={flag}></Emergency>
            <Reference r={rinfo} flag={flag}></Reference>
            <div className="d-flex justify-content-center pb-5">
              <button
                className="btn btn-warning rounded-pill px-4"
                onClick={setdata1}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {information.length > 0 && <><Studentinfo information={information}></Studentinfo>
        <br></br>
        <Fatherinfo information={information}></Fatherinfo>
        <br></br>
        <Motherinfo information={information}></Motherinfo>
        <br></br>
        <EmergencyReference information={information}></EmergencyReference></>}
      </div>
    </div>
  );
}

export default App;

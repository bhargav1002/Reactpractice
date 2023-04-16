import React,{useState} from 'react'

export default function Father(props) {

  const [ffirstName, setFfirstName] = useState('');
  const [fmiddleName, setFmiddleName] = useState('');
  const [flastName, setFlastName] = useState('');
  const [femail, setFemail] = useState('');
  const [feducation, setFeducation] = useState('');
  const [fprofession, setFprofession] = useState('');
  const [fdesignation, setFdesignation] = useState('');
  const [fphone, setFphone] = useState('');

  const ffname = (e) =>
  {
    setFfirstName(e.target.value);
  }

  const fmname = (e) =>
  {
    setFmiddleName(e.target.value);
  }

  const flname = (e) =>
  {
    setFlastName(e.target.value);
  }

  const ffemail = (e) =>
  {
    setFemail(e.target.value);
  }

  const ffeducation = (e) =>
  {
    setFeducation(e.target.value);
  }

  const ffprofession = (e) =>
  {
    setFprofession(e.target.value);
  }

  const ffdesignation = (e) =>
  {
    setFdesignation(e.target.value);
  }

  const ffphone = (e) =>
  {
    setFphone(e.target.value);
  }

  if(props.flag === true)
  {
    console.log("Father");
  }

  const info = {
    FfirstName:ffirstName,
    FmiddleName:fmiddleName,
    FlastName:flastName,
    Femail:femail,
    Feducation:feducation,
    Fprofession:fprofession,
    Fdesignation:fdesignation,
    Fphone:fphone
  }

  props.f(info);

  return (
    <div className="p-5">
            <label className="fs-1 ">Father Details</label>
            <hr></hr>
            <div className="row justify-content-center col-gap-2">
              <div className="text-center col-4">
                <label htmfor="firstname" className="fw-semibold text-white">
                  FirstName
                </label>
                <input type="text" onChange={ffname} className="form-control" required></input>
              </div>
              <div className="text-center  col-4">
                <label htmfor="firstname" className="fw-semibold text-white">
                  MiddleName
                </label>
                <input type="text" onChange={fmname} className="form-control" required></input>
              </div>
              <div className="text-center  col-4">
                <label htmfor="firstname" className="fw-semibold text-white">
                  LastName
                </label>
                <input type="text" onChange={flname} className="form-control" required></input>
              </div>
            </div>
            <br></br>
            <div className="row justify-content-center col-gap-2">
              <div className="text-center col-6">
                <label htmfor="firstname" className="fw-semibold text-white">
                  Education Qualification
                </label>
                <input type="text" onChange={ffeducation} className="form-control" required></input>
              </div>
              <div className="text-center  col-6">
                <label htmfor="firstname" className="fw-semibold text-white">
                  Profession
                </label>
                <input type="text" onChange={ffprofession} className="form-control" required></input>
              </div>
            </div>
            <br></br>
            <div className="row justify-content-center col-gap-2">
              <div className="text-center  col-4">
                <label htmfor="firstname" className="fw-semibold text-white">
                  Email
                </label>
                <input type="email" onChange={ffemail} className="form-control" required></input>
              </div>
              <div className="text-center col-4">
                <label htmfor="firstname" className="fw-semibold text-white ">
                  Designation
                </label>
                <input type="text" onChange={ffdesignation} className="form-control" required></input>
              </div>
              <div className="text-center col-4">
                <label htmfor="firstname" className="fw-semibold text-white">
                  Phone
                </label>
                <input type="number" onChange={ffphone} className="form-control" required></input>
              </div>
            </div>
          </div>
  )
}

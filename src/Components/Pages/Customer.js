import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
  "Name": "",
  "mobile": "",
  "email": "",
  "Address":"",
  "City":"",
  "State": "",
  "Country": "",
  "Postalcode": ""
}

const Customer = () => {

  // Put your all use state here. 
  const [formState, setFormState] = useState(initialState);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidMobileNo(mobileNo) {
    return /^[0-9]{10}$/.test(mobileNo)
  }

  const validateForm = () =>{
    console.log("formState", formState)

      if (formState.Name ===""){
        return false;
      }
      if (formState.mobile ==="" || isValidMobileNo(formState.mobile)){
        return false;
      }
      if (formState.email ==="" || isValidEmail(formState.email)){
        return false;
      }
      if (formState.Address ===""){
        return false;
      }
      if (formState.City ===""){
        return false;
      }
      if (formState.State ===""){
        return false;
      }
      if (formState.Country ===""){
        return false;
      }
      if (formState.Postalcode ===""){
        return false;
      }
       return true;
  }
  // All your function goes here...
  const createCustomer = () => {
    // console.log("Form State", formState);
  console.log("validateForm()", validateForm())
  if(validateForm()){
    axios.post('http://localhost:4000/customer', formState)
      .then((response) => {
        // console.log(response)
        setFormState(initialState);
      })
      .catch((error) => console.log(error))

  }
}

  const formValueChange = (event, fieldType) => {

    let newState = { ...formState };
    switch (fieldType) {
      // text
      case "NAME":
        newState.Name = event.target.value
        break;
        case "MOBILE_NO":
          newState.mobile = event.target.value
          break;
      // email
      case "EMAIL":
        newState.email = event.target.value
        break;
        case "ADDRESS":
        newState.Address = event.target.value
        break;
        case "CITY":
        newState.City = event.target.value
        break;
        case "STATE":
        newState.State = event.target.value
        break;
        case "COUNTRY":
        newState.Country = event.target.value
        break;
        case "POSTALCODE":
        newState.Postalcode = event.target.value
        break;
      default:
        break;
    }
    setFormState({ ...newState });
  }

  return (
    <div className='container bg-danger'>
      <div className='row'>
        <div className='col mt-5'>
        <h3>Create Customer</h3>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Name*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Name} onChange={(event) => formValueChange(event, "NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Mobile No*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.mobile} onChange={(event) => formValueChange(event, "MOBILE_NO")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Email*</label>
        <div className="col-sm-4">
          <input type="email" className="form-control" value={formState.email} onChange={(event) => formValueChange(event, "EMAIL")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Address</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Address} onChange={(event) => formValueChange(event, "ADDRESS")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">City*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.City} onChange={(event) => formValueChange(event, "CITY")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">State*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.State} onChange={(event) => formValueChange(event, "STATE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Country*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Country} onChange={(event) => formValueChange(event, "COUNTRY")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Postalcode</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Postalcode} onChange={(event) => formValueChange(event, "POSTALCODE")} />
        </div>
      </div>   
      <div className="form-group row my-2">
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary" onClick={() => createCustomer()}>Create Customer</button>
        </div>
      </div>
    </div>
        </div>
      </div>
      
  )
}






export default Customer

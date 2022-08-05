import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const initialState = {
  "Name": "",
  "company":"",
  "GSTIN_number":"",
  "mobile": "",
  "email": "",
  "Address":"",
  "City":"",
  "State": "",
  "Country": ""
}

const Supplier = () => {

  // Put your all use state here. 
  const [formState, setFormState] = useState(initialState);

  let params = useParams();
  const navigate = useNavigate();
  const [editSupplier, setEditSupplier] = useState(Object.keys(params).length !== 0 ? true : false)

  useEffect(() => {
    if (editSupplier) {
      axios.get(`http://localhost:4000/supplier/${params?.id}`)
        .then((response) => updateSupplierFormData(response?.data))
        .catch((error) => console.log(error));
    }
  }, [])

  const updateSupplierFormData = (data) => {
    setFormState({ ...data });
  }
  useEffect(()=>{
    getData();
  },[])
  const getData=()=>{
    axios.get(`http://localhost:4000/supplier`)
    .then((response)=>console.log(response.data))
    .catch((error)=>console.log(error))
  }


  
  // All your function goes here...
  const createSupplier = () => {
    // console.log("Form State", formState);
  // console.log("validateForm()", validateForm())
  if (editSupplier){
    axios.put(`http://localhost:4000/supplier/${params?.id}`,formState)
    
    .then((response)=>{
      let newState ={...initialState};
      setFormState(newState);
      navigate('/');
    })
    .catch((error)=>console.log(error))
  } else {
    axios.post('http://localhost:4000/supplier', formState)
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
        case "COMPANY":
        newState.company = event.target.value
        break;
        case "GSTIN_NUMBER":
        newState.GSTIN_number = event.target.value
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
      default:
        break;
    }
    setFormState({ ...newState });
  }

  return (
    <div className='container bg-danger'>
       <h3>{!editSupplier ? 'Create' : 'Update'} Create Suppliers</h3>
      <div className='row'>
        <div className='col mt-5'>
        {/* <h3>Create Supplier</h3> */}
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Name*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Name} onChange={(event) => formValueChange(event, "NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Company*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.company} onChange={(event) => formValueChange(event, "COMPANY")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">GSTIN Number*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.GSTIN_number} onChange={(event) => formValueChange(event, "GSTIN_NUMBER")} />
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
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary" onClick={() => createSupplier()}>{!editSupplier ? 'Create' : 'Update' }Create Supplier</button>
        </div>
      </div>
    </div>
        </div>
      </div>
      
  )
}






export default Supplier

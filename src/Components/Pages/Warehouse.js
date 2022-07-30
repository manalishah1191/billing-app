import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
  "Name": "",
  "Description": "",
  "Address":""
}

const Warehouse = () => {

  // Put your all use state here. 
  const [formState, setFormState] = useState(initialState);


  const validateForm = () =>{
    console.log("formState", formState)

      if (formState.Name ===""){
        return false;
      }
      if (formState.Description ===""){
        return false;
      }
      if (formState.Address ===""){
        return false;
      }
       return true;
  }
  // All your function goes here...
  const createWarehouse = () => {
    // console.log("Form State", formState);
  console.log("validateForm()", validateForm())
  if(validateForm()){
    axios.post('http://localhost:4000/warehouse', formState)
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
        case "DESCRIPTION":
          newState.Description = event.target.value
          break;
        case "ADDRESS":
        newState.Address = event.target.value
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
        <h3>Create Warehouse</h3>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Name*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Name} onChange={(event) => formValueChange(event, "NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Description*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Description} onChange={(event) => formValueChange(event, "DESCRIPTION")} />
        </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Address</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.Address} onChange={(event) => formValueChange(event, "ADDRESS")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary" onClick={() => createWarehouse()}>Create Warehouse</button>
        </div>
      </div>
    </div>
        </div>
      </div>
      </div>
      
  )
}

export default Warehouse

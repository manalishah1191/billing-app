import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
  "code": "",
  "amount": "",
  "qty":"",
  "validDate":""
}

const PromoCodes = () => {

  // Put your all use state here. 
  const [formState, setFormState] = useState(initialState);


  const validateForm = () =>{
    console.log("formState", formState)

      if (formState.code ===""){
        return false;
      }
      if (formState.amount ===""){
        return false;
      }
      if (formState.qty ===""){
        return false;
      }
      if (formState.validDate ===""){
        return false;
      }
       return true;
  }
  // All your function goes here...
  const createPromoCodes = () => {
    // console.log("Form State", formState);
  console.log("validateForm()", validateForm())
  if(validateForm()){
    axios.post('http://localhost:4000/promocodes', formState)
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
      case "CODE":
        newState.code = event.target.value
        break;
        case "AMOUNT":
          newState.amount = event.target.value
          break;
        case "QTY":
        newState.qty = event.target.value
        break;
        case "VALIDDATE":
        newState.validDate = event.target.value
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
        <h3>Create PromoCodes</h3>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Code*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.code} onChange={(event) => formValueChange(event, "CODE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Amount*</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.amount} onChange={(event) => formValueChange(event, "AMOUNT")} />
        </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Qty</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.qty} onChange={(event) => formValueChange(event, "QTY")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Valid Date</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.validDate} onChange={(event) => formValueChange(event, "VALIDDATE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary" onClick={() => createPromoCodes()}>Create PromoCodes</button>
        </div>
      </div>
    </div>
        </div>
      </div>
      </div>
      
  )
}

export default PromoCodes

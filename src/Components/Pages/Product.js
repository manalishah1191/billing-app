import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
 "product_name":"",
 "product_code":"",
 "product_catagory":"",
 "warehouse":"",
 "product_retail_price":"",
 "product_order_price":"",
 "measurement":"",
 "product_img":""
}

const Product = () => {

  // Put your all use state here. 
  const [formState, setFormState] = useState(initialState);

  
  // All your function goes here...
  const createProduct = () => {
    // console.log("Form State", formState);
  
    axios.post('http://localhost:4000/product', formState)
      .then((response) => {
        // console.log(response)
        setFormState(initialState);
      })
      .catch((error) => console.log(error))
}

  const formValueChange = (event, fieldType) => {

    let newState = { ...formState };
    switch (fieldType) {
      // text
      case "PRODUCTNAME":
        newState.product_name = event.target.value
        break;
        case "PRODUCTCODE":
          newState.product_code = event.target.value
          break;
      // email
      case "PRODUCTCATAGORY":
        newState.product_catagory = event.target.value
        break;
        case "WAREHOUSE":
        newState.warehouse = event.target.value
        break;
        case "PRODUCTRETAILPRICE":
        newState.product_retail_price = event.target.value
        break;
        case "PRODUCTORDERPRICE":
        newState.product_order_price = event.target.value
        break;
        case "MEASUREMENT":
        newState.measurement = event.target.value
        break;
        case "PRODUCTIMAGE":
        newState.product_img = event.target.value
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
        <h3>Create Product</h3>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Product Name</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.product_name} onChange={(event) => formValueChange(event, "PRODUCTNAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">product Code</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.product_code} onChange={(event) => formValueChange(event, "PRODUCTCODE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Product Catagory</label>
        <div className="col-sm-4">
          <input type="email" className="form-control" value={formState.product_catagory} onChange={(event) => formValueChange(event, "PRODUCTCATAGORY")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Warehouse</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.warehouse} onChange={(event) => formValueChange(event, "WAREHOUSE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Product Retail Price</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.product_retail_price} onChange={(event) => formValueChange(event, "PRODUCTRETAILPRICE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Product Order Price</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.product_order_price} onChange={(event) => formValueChange(event, "PRODUCTORDERPRICE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Measurement</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.measurement} onChange={(event) => formValueChange(event, "MEASUREMENT")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Product Image</label>
        <div className="col-sm-4">
          <input type="text" className="form-control" value={formState.product_img} onChange={(event) => formValueChange(event, "PRODUCTIMAGE")} />
        </div>
      </div>   
      <div className="form-group row my-2">
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary" onClick={() => createProduct()}>Create Product</button>
        </div>
      </div>
    </div>
        </div>
      </div>
      
  )
}






export default Product

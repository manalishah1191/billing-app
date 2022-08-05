import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import customer from "../Assets/images/customer.jpg";

const initialState = {
  Name: "",
  mobile: "",
  email: "",
  Address: "",
  City: "",
  State: "",
  Country: "",
  Postalcode: "",
};

const Customer = () => {
  // Put your all use state here.
  const [formState, setFormState] = useState(initialState);

  let params = useParams();
  const navigate = useNavigate();
  const [editCustomer, setEditCustomer] = useState(
    Object.keys(params).length !== 0 ? true : false
  );

  useEffect(() => {
    if (editCustomer) {
      axios
        .get(`http://localhost:4000/customer/${params?.id}`)
        .then((response) => updateCustomerFormData(response?.data))
        .catch((error) => console.log(error));
    }
  }, []);

  const updateCustomerFormData = (data) => {
    setFormState({ ...data });
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`http://localhost:4000/customer`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isValidMobileNo(mobileNo) {
    return /^[0-9]{10}$/.test(mobileNo);
  }

  const validateForm = () => {
    console.log("formState", formState);

    if (formState.Name === "") {
      return false;
    }
    if (formState.mobile === "" || isValidMobileNo(formState.mobile)) {
      return false;
    }
    if (formState.email === "" || isValidEmail(formState.email)) {
      return false;
    }
    if (formState.Address === "") {
      return false;
    }
    if (formState.City === "") {
      return false;
    }
    if (formState.State === "") {
      return false;
    }
    if (formState.Country === "") {
      return false;
    }
    if (formState.Postalcode === "") {
      return false;
    }
    return true;
  };
  // All your function goes here...
  const createCustomer = () => {
    // console.log("Form State", formState);
    console.log("validateForm()", validateForm());
    // if(validateForm()){
    if (editCustomer) {
      axios
        .put(`http://localhost:4000/customer/${params?.id}`, formState)

        .then((response) => {
          let newState = { ...initialState };
          setFormState(newState);
          navigate("/");
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post("http://localhost:4000/customer", formState)
        .then((response) => {
          let newState = { ...initialState };
          setFormState(newState);
          // console.log(response)
          // setFormState(initialState);
        })
        .catch((error) => console.log(error));

      // }
    }
  };

  const formValueChange = (event, fieldType) => {
    let newState = { ...formState };
    switch (fieldType) {
      // text
      case "NAME":
        newState.Name = event.target.value;
        break;
      case "MOBILE_NO":
        newState.mobile = event.target.value;
        break;
      // email
      case "EMAIL":
        newState.email = event.target.value;
        break;
      case "ADDRESS":
        newState.Address = event.target.value;
        break;
      case "CITY":
        newState.City = event.target.value;
        break;
      case "STATE":
        newState.State = event.target.value;
        break;
      case "COUNTRY":
        newState.Country = event.target.value;
        break;
      case "POSTALCODE":
        newState.Postalcode = event.target.value;
        break;
      default:
        break;
    }
    setFormState({ ...newState });
  };

  return (
    <div className="border rounded  raduios-5 mt-3 p-3 bg-danger">
      <h3>{!editCustomer ? "Create" : "Update"} Create Customers</h3>
      <div className="row">
       <div className="col-12 d-flex">
       <div className="col md-6 ">
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Name*</label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={formState.Name}
                onChange={(event) => formValueChange(event, "NAME")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Mobile No*</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                value={formState.mobile}
                onChange={(event) => formValueChange(event, "MOBILE_NO")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Email*</label>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                value={formState.email}
                onChange={(event) => formValueChange(event, "EMAIL")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                value={formState.Address}
                onChange={(event) => formValueChange(event, "ADDRESS")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">City*</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                value={formState.City}
                onChange={(event) => formValueChange(event, "CITY")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">State*</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                value={formState.State}
                onChange={(event) => formValueChange(event, "STATE")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Country*</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                value={formState.Country}
                onChange={(event) => formValueChange(event, "COUNTRY")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Postalcode</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                value={formState.Postalcode}
                onChange={(event) => formValueChange(event, "POSTALCODE")}
              />
            </div>
          </div>
          <div className="form-group row my-2">
            <div className="col-sm-4">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => createCustomer()}
              >
                {!editCustomer ? "Create" : "Update"}Create Customer
              </button>
            </div>
          </div>
        </div>
      
      <div class="col-md-6">
        <div class="contact-info">
          {/* <h2 className='text-primary text-center'><b>Contact Us</b></h2> */}
          {/* <h4 className='text-secondary text-center mt-5'><i>We're delighted to have you as our customer. ...!!!!!!</i></h4> */}
          <img src={customer} alt="image" className="w-50 h-100 mt-2" />
        </div>
      </div>
       </div>
    </div>
    // </div>
  );
};

export default Customer;

import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const SupplierList = () => {

    const [data, setData] = useState([]);
    const navigate=useNavigate();
  
    useEffect(() => {
      loadSupplierData()
    }, [])
  
    const loadSupplierData = () => {
      axios.get('http://localhost:4000/supplier')

        .then((response) => setData(response.data))
        .catch((error) => console.error("error", error))
    }
    const supplierDelete = async (data) => {
      let response = await axios.delete(`http://localhost:4000/supplier/${data.id}`);
      if (response) {
        loadSupplierData();
      }
    }
    const supplierEdit=(data)=>{
      navigate(`/updatesupplier/${data.id}`);
    }
    return (
      <div>
        <h3>Supplier List</h3>
        {console.log("data", data)}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
              <th scope="col">GSTIN number</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              
              
            </tr>
          </thead>
          <tbody>
            {
              data.map((supplier, index) => {
                return (
                  
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{supplier.Name}</td>
                    <td>{supplier.company}</td>
                    <td>{supplier.GSTIN_number}</td>
                    <td>{supplier.mobile}</td>
                    <td>{supplier.email}</td>
                    <td>{supplier.Address}</td>
                    <td>{supplier.City}</td>
                    <td>{supplier.State}</td>
                    <td>{supplier.Country}</td>
                    
                    <td width="170">
                    <button type="button" className="btn btn-primary me-2" onClick={()=>supplierEdit(supplier)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => supplierDelete(supplier)}>Delete</button>
                  </td>
                  </tr>
                 
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
  export default SupplierList
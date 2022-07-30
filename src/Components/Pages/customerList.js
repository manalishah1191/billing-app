import React, { useEffect, useState} from 'react';
import axios from 'axios';

const CustomerList = () => {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      loadCustomerData()
    }, [])
  
    const loadCustomerData = () => {
      axios.get('http://localhost:4000/customer')

        .then((response) => setData(response.data))
        .catch((error) => console.error("error", error))
    }
    const customerDelete = async (data) => {
      let response = await axios.delete(`http://localhost:4000/customer/${data.id}`);
      if (response) {
        loadCustomerData();
      }
    }
    return (
      <div>
        <h3>Customers List</h3>
        {console.log("data", data)}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Postalcode</th>
              
            </tr>
          </thead>
          <tbody>
            {
              data.map((customer, index) => {
                return (
                  
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{customer.Name}</td>
                    <td>{customer.mobile}</td>
                    <td>{customer.email}</td>
                    <td>{customer.Address}</td>
                    <td>{customer.City}</td>
                    <td>{customer.State}</td>
                    <td>{customer.Country}</td>
                    <td>{customer.Postalcode}</td>
                    <td width="170">
                    <button type="button" className="btn btn-primary me-2">Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => customerDelete(customer)}>Delete</button>
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
  export default CustomerList
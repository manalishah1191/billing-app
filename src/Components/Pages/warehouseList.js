import React, { useEffect, useState} from 'react';
import axios from 'axios';

const WarehouseList = () => {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      loadWarehouseData()
    }, [])
  
    const loadWarehouseData = () => {
      axios.get('http://localhost:4000/warehouse')

        .then((response) => setData(response.data))
        .catch((error) => console.error("error", error))
    }
    const warehouseDelete = async (data) => {
      let response = await axios.delete(`http://localhost:4000/warehouse/${data.id}`);
      if (response) {
        loadWarehouseData();
      }
    }
    return (
      <div>
        <h3>Warehouse List</h3>
        {console.log("data", data)}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Address</th>  
            </tr>
          </thead>
          <tbody>
            {
              data.map((warehouse, index) => {
                return (
                  
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{warehouse.Name}</td>
                    <td>{warehouse.Description}</td>
                    <td>{warehouse.Address}</td>
                    <td width="170">
                    <button type="button" className="btn btn-primary me-2">Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => warehouseDelete(warehouse)}>Delete</button>
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
  export default WarehouseList
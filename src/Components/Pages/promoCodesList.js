import React, { useEffect, useState} from 'react';
import axios from 'axios';

const PromoCodesList = () => {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      loadPromocodeData()
    }, [])
  
    const loadPromocodeData = () => {
      axios.get('http://localhost:4000/promocodes')

        .then((response) => setData(response.data))
        .catch((error) => console.error("error", error))
    }
    const promocodesDelete = async (data) => {
      let response = await axios.delete(`http://localhost:4000/promocodes/${data.id}`);
      if (response) {
        loadPromocodeData();
      }
    }
    return (
      <div>
        <h3>PromoCode List</h3>
        {console.log("data", data)}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Code</th>
              <th scope="col">Amount</th>
              <th scope="col">Qty</th>  
              <th scope="col">Valid date</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((promocodes, index) => {
                return (
                  
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{promocodes.code}</td>
                    <td>{promocodes.amount}</td>
                    <td>{promocodes.qty}</td>
                    <td>{promocodes.validDate}</td>
                    <td width="170">
                    <button type="button" className="btn btn-primary me-2">Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => promocodesDelete(promocodes)}>Delete</button>
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
  export default PromoCodesList
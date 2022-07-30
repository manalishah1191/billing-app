import React, { useEffect, useState} from 'react';
import axios from 'axios';

const ProductList = () => {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      loadProductData()
    }, [])
  
    const loadProductData = () => {
      axios.get('http://localhost:4000/product')

        .then((response) => setData(response.data))
        .catch((error) => console.error("error", error))
    }
    const productDelete = async (data) => {
      let response = await axios.delete(`http://localhost:4000/product/${data.id}`);
      if (response) {
        loadProductData();
      }
    }
    return (
      <div>
        <h3>Product List</h3>
        {console.log("data", data)}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Code</th>
              <th scope="col">Product Catagory</th>
              <th scope="col">Warehouse</th>
              <th scope="col">PRODUCT RETAIL PRICE</th>
              <th scope="col">PRODUCT ORDER PRICE</th>
              <th scope="col">Measurement</th>
              <th scope="col">Product Image</th>
              
            </tr>
          </thead>
          <tbody>
            {
              data.map((product, index) => {
                return (
                  
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.product_name}</td>
                    <td>{product.product_code}</td>
                    <td>{product.product_catagory}</td>
                    <td>{product.warehouse}</td>
                    <td>{product.product_retail_price}</td>
                    <td>{product.product_order_price}</td>
                    <td>{product.measurement}</td>
                    <td>{product.product_img}</td>
                    <td width="170">
                    <button type="button" className="btn btn-primary me-2">Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => productDelete(product)}>Delete</button>
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
  export default ProductList
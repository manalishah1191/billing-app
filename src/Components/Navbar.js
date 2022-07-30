import {NavLink} from "react-router-dom"
import img1 from "./Assets/images/img1.jpg"

export const Navbar =()=>{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
  <div className="row">
    <div className="col-12">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <img src={img1} height="50px" width="50px"></img>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/'}>Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/customer'}>Customer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/customerList'}>Customer List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/warehouse'}>Warehouse</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/warehouseList'}>Warehouse List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/supplier'}>Supplier</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/supplierList'}>Supplier  List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/product'}>Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/productList'}>Product List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/invoice'}>Invoice</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/purchaseOrder'}>Purchase Order</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/roles'}>Roles</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/promoCodes'}>Promo Codes</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to={'/promoCodesList'}>Promo Codes List</NavLink>
        </li> 
        </ul>
    </div>
  </div>
  </div>
  </div>
</nav>
    

</>

  )
}


// import React from 'react'
// // import { NavLink } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/js/dist/dropdown'

// const NavMenu = () => {
//   return (
//     <div>
//       {/* <nav>
//           <div className="py-3">
//             <NavLink className="mr-2" to="/">User List</NavLink>
//             <NavLink className="mx-2" to="/createuser">Create User</NavLink>
//           </div>
//         </nav> */}
//       <nav className="navbar navbar-expand-lg bg-info mx-5 border border-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Billing Software</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Product Category</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/addcustomer">Customer</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/addsupplier">Supplier</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   List
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="/customerlist">Customer</a></li>
//                   <li><a className="dropdown-item" href="/supplierlist">Supplier</a></li>
//                   {/* <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li> */}
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//     </div>
//   )
// }

// export default NavMenu; 
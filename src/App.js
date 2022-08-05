
// import './App.css';
import { Navbar } from './Components/Navbar'

import {Route,Routes} from 'react-router-dom';
import Customer from './Components/Pages/customer';
import CustomerList from './Components/Pages/customerList';
import Dashboard from './Components/Pages/dashboard';
import Warehouse from './Components/Pages/warehouse';
import WarehouseList from './Components/Pages/warehouseList'
import Supplier from './Components/Pages/supplier';
import SupplierList from './Components/Pages/supplierList';
import Invoice from './Components/Pages/invoice';
import Product from './Components/Pages/product';
import ProductList from './Components/Pages/productList';
import PurchaseOrder from './Components/Pages/purchaseOrder';
import Roles from './Components/Pages/roles';
import PromoCodes from './Components/Pages/promoCodes';
import PromoCodesList from './Components/Pages/promoCodesList';
import TopContent from './Components/Pages/TopContent';

function App() {
  return (
    <div className='container'>
   
    <Navbar/>
    <Routes>
    <Route path="/" element={<TopContent />} />
      {/* <Route path='/' exact element={<Dashboard/>}/> */}
      <Route path='/customer'exact element={<Customer/>}/>
      <Route path='/customerList'exact element={<CustomerList/>}/> 
      <Route path='/updatecustomer/:id' element={<Customer/>}/>
      <Route path='/warehouse'exact element={<Warehouse/>}/>
      <Route path='/warehouseList'exact element={<WarehouseList/>}/>
      <Route path='/supplier'exact element={<Supplier/>}/>
      <Route path='/supplierList'exact element={<SupplierList/>}/>
      <Route path='/updatesupplier/:id' element={<Supplier/>}/>
      <Route path='/invoice'exact element={<Invoice/>}/>
      <Route path='/product'exact element={<Product/>}/>
      <Route path='/productList'exact element={<ProductList/>}/>
      <Route path='/purchaseOrder'exact element={<PurchaseOrder/>}/>
      <Route path='/roles'exact element={<Roles/>}/>
      <Route path='/promoCodes'exact element={<PromoCodes/>}/>
      <Route path='/promoCodesList'exact element={<PromoCodesList/>}/>
    </Routes>
   
    
    </div>
      
       manali
  );
}

export default App;


// import './App.css';
import { Navbar } from './Components/Navbar'

import {Route,Routes} from 'react-router-dom';
import Customer from './Components/Pages/Customer';
import Dashboard from './Components/Pages/Dashboard';
import Warehouse from './Components/Pages/Warehouse';
import Supplier from './Components/Pages/Supplier';
import Invoice from './Components/Pages/Invoice';
import Product from './Components/Pages/Product';
import Purchase_order from './Components/Pages/Purchaseorder';
import Roles from './Components/Pages/Roles';
import Promo_codes from './Components/Pages/Promocodes'

function App() {
  return (
    <>
   
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Dashboard/>}/>
      <Route path='/Customer'exact element={<Customer/>}/>
      <Route path='/Warehouse'exact element={<Warehouse/>}/>
      <Route path='/Supplier'exact element={<Supplier/>}/>
      <Route path='/Invoice'exact element={<Invoice/>}/>
      <Route path='/Product'exact element={<Product/>}/>
      <Route path='/Purchase_order'exact element={<Purchase_order/>}/>
      <Route path='/Roles'exact element={<Roles/>}/>
      <Route path='/Promo_codes'exact element={<Promo_codes/>}/>
    </Routes>
   
    
    </>
      
       
  );
}

export default App;

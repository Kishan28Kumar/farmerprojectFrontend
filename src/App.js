import './App.css';
import Landing from './components/Landing';
import {Route, Routes} from 'react-router-dom';
import Farmer from './components/Farmer';
import FarmerRegister from './components/Farmer/Register';
import FarmerLogin from './components/Farmer/Login';

import BuyerRegister from './components/Buyer/Register';

import Buyer from './components/Buyer';
import BuyerLogin from './components/Buyer/Login';
import LoggedInFarmer from './components/Farmer/LoggedIn';
import LoggedInBuyer from './components/Buyer/LoggedIn';
import FarmerProfile from './components/Farmer/LoggedIn/FarmerProfile';
import ProductRegister from './components/Farmer/LoggedIn/ProductRegister';
import UpdateProfile from './components/Farmer/LoggedIn/UpdateProfile';
import Addtype from './components/Admin/AddType';
import AddNames from './components/Admin/AddNames';
import FarmerMyProducts from './components/Farmer/LoggedIn/MyProducts';
import BuyerProfile from './components/Buyer/LoggedIn/BuyerProfile';
import ProductRequest from './components/Buyer/LoggedIn/ProductRequest';
import MyRequestsDetails from './components/Buyer/LoggedIn/MyRequests';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Farmer" element={<Farmer />} />
        <Route path="/Farmer/farmerregister" element={<FarmerRegister />} />
        <Route path="/Farmer/farmerlogin" element={<FarmerLogin/>} />
        <Route path ="/Farmer/account" element={<LoggedInFarmer />} />
        <Route path="/Farmer/account/profile" element={<FarmerProfile />} />
        <Route path="/Farmer/account/productregister" element={<ProductRegister />} />
        <Route path="/Farmer/account/profile/products" element={<FarmerMyProducts/>} />
        <Route path="/Farmer/account/profile/update" element={<UpdateProfile />} />
        {/* <Route path = "/Farmer/account/contact" element={<Contact />} /> */}

        <Route path='/Buyer' element={<Buyer />} />
        <Route path="/Buyer/buyerregister" element={<BuyerRegister/>} />
        <Route path="/Buyer/buyerlogin" element={<BuyerLogin />} />
        <Route path="/Buyer/account" element={<LoggedInBuyer />} />
        <Route path="/Buyer/account/profile" element={<BuyerProfile />} />
        <Route path="/Buyer/account/productrequest" element={<ProductRequest />} />
        <Route path="/Buyer/account/profile/myrequests" element={<MyRequestsDetails />} />


        <Route path="/Admin/addtype" element={<Addtype />} />
        <Route path="/Admin/addnames" element={<AddNames />} />
      </Routes>
    </>
  );
}

export default App;

import React from 'react'
import Home from '../src/component/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './component/Home/About/About';
import Dashboard from './component/Dashoboard/Dashboard/Dashboard';
import Profile from './component/Dashoboard/Profile/Profile';
import OrderList from './component/Dashoboard/OrderList/OrderList';
import AddService from './component/Dashoboard/AddService/AddService';
import MakeAdmin from './component/Dashoboard/MakeAdmin/MakeAdmin';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} >
          <Route path="profile" element={<Profile/>} />
          <Route path="orderList" element={<OrderList/>} />
          <Route path="addService" element={<AddService/>} />
          <Route path="makeAdmin" element={<MakeAdmin/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


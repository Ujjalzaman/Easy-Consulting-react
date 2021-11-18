import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';

const AdminDashboard = () => {
    return (
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="addService" element={<AddService />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageServices" element={<ManageServices />} />
        </Routes>
    );
};

export default AdminDashboard;
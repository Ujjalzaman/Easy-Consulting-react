import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import { Outlet } from 'react-router';
// import Profile from '../../Profile/Profile';
// import AddService from '../AddService/AddServices';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import ManageServices from '../ManageServices/ManageServices';
// import OrderList from '../OrderList/OrderList';

const AdminDashboard = () => {
    return (
        <div>
            <Outlet/>
            {/* <Outlet/> */}
            {/* <Route exact path="/dashboard/profile"><Profile/></Route> */}

             {/* <Routes> */}
                {/* <Route exact path="/dashboard/orderList"><OrderList/></Route> */}
                {/* <Route path="/dashboard/addService"><AddService/></Route> */}
                {/* <Route path="/dashboard/makeAdmin"><MakeAdmin/></Route> */}
                {/* <Route path="/dashboard/manageServices"><ManageServices/></Route> */}
             {/* </Routes> */}
        </div>
    );
};

export default AdminDashboard;
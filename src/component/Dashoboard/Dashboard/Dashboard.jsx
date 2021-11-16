import React, {useState} from 'react'
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    const [sideToggle, setSideToggle] = useState(false)
    const [title, setTitle] = useState('Trusted Tech')

    return (
        <div id="dashboard">
            <div id="sidebar" className={ sideToggle ? "active" : "" }>
                <div className="sidebarContent">
                    <Sidebar setTitle={setTitle}/>
                    <div className="backBtnBox">
                        <Link to="/">
                            <button className="backBtn"> 
                            {/* <FontAwesomeIcon icon={faSignOutAlt}/> */}
                             back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="pageContent">
                <div className="dashBoardHeader">
                    <div className="d-flex align-items-center">
                        <div id="nav-icon"
                        className={sideToggle ? "menu-btn" : "menu-btn open"}
                        onClick={() => setSideToggle(!sideToggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3>{title}</h3>
                    </div>
                    {/* <PopOver/> */}
                </div>
                {/* {
                    admin ? <AdminDashboard/> : <UserDashboard/>
                } */}
            </div>
        </div>
    )
}

export default Dashboard

import Home from '../src/component/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import React, { createContext, useState } from 'react'
import About from './component/Home/About/About';
import Dashboard from './component/Dashoboard/Dashboard/Dashboard';
import { getDecodedUser } from './component/Login/LoginManager';
import LoginModal from './component/Login/LoginModal';
import PrivateRoute from './component/Login/PrivateRoute';
import NotFound from './component/NotFound';
export const UserContext = createContext();

const App = () => {
  const [admin, setAdmin] = useState(false);
  const [selectedService, setSelectedService] = useState({})
  const [user, setUser] = useState(getDecodedUser())
  return (
    <UserContext.Provider value={{ user, setUser, admin, setAdmin, selectedService, setSelectedService }}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginModal />} />
           <Route path="/dashboard/*" element={
              <PrivateRoute redirectTo="/login">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App


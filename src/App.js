import React from 'react'
import Home from '../src/component/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './component/Home/About/About';
import Dashboard from './component/Dashoboard/Dashboard/Dashboard';
import Profile from './component/Dashoboard/Profile/Profile';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} >
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


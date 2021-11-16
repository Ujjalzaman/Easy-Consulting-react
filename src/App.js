import React from 'react'
import Home from '../src/component/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
// import Header from '../src/component/Home/Header';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/about" element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App


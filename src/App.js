import React from 'react'
import Home from '../src/component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
// import Header from '../src/component/Home/Header';
const App = () => {
  return (
   <div>
     <Route path="/" element={<Home/>}/>
     {/* <Route path="Header" element={<Header/>}/> */}
  </div>
  )
}

export default App


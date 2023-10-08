import './component/NAVBAR/Navbar.css'
import React from 'react';
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./component/NAVBAR/Home";
import Careers from './component/NAVBAR/Careers';
import Courses from './component/NAVBAR/Courses';
import Login from './component/NAVBAR/Login';
import Navbar from './component/NAVBAR/Navbar';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='courses' element={<Courses/>}/>
      <Route path='careers' element={<Careers/>}/>
      <Route path='login' element={<Login/>}/>
      <Route/>
       </Routes>
    </Router>
    </div>
  );
}

export default App;

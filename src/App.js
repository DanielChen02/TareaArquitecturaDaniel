import React from 'react';
import './App.css';
import Login from "./components/login";
import Signup from "./components/signup";
import DormitorioPage from "./components/dormitorioPage";
import CocinaPage from "./components/cocinaPage";
import BanoPage from "./components/banoPage";
import ComedorPage from "./components/comedorPage";
import SalaPage from "./components/salaPage";
import Sellform from "./components/sellform";
import AboutUs from "./components/aboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import SideBar from "./components/SideBar"


function App() {
  return (

      <div className="App">
<Router>
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route  path="/Signup" element={<Signup/>}/>
    <Route  path="/Sellform" element={<Sellform/>}/>
    <Route  path="/aboutUs" element={<AboutUs/>}/>
    <Route  path="/dormitorioPage" element={<DormitorioPage/>}/>
    <Route  path="/cocinaPage" element={<CocinaPage/>}/>
    <Route  path="/salaPage" element={<SalaPage/>}/>
    <Route  path="/comedorPage" element={<ComedorPage/>}/>
    <Route  path="/banoPage" element={<BanoPage/>}/>
    <Route  path="/Page" element={<ComedorPage/>}/>
    <Route  path="/SideBar" element={<SideBar/>}/>
    </Routes>
    </div>
    </Router>
      </div>


  );
}

/*
<Router>
    <div className="App">
    <Routes>
    <Route  exact path="/" element={<Login/>}/>
    <Route  path="/Signup" element={<Signup/>}/>
    <Route  path="/Sellform" element={<Sellform/>}/>
    <Route  path="/aboutUs" element={<aboutUs/>}/>
    <Route  path="/dormitorioPage" element={<dormitorioPage/>}/>
    <Route  path="/cocinaPage" element={<cocinaPage/>}/>
    <Route  path="/comedorPage" element={<comedorPage/>}/>
    </Routes>
    </div>
    </Router>
*/
export default App;

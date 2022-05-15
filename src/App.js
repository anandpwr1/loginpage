import React from "react";
import LoginPage from "./Components/LoginPage";
import About from "./Components/About";
import Details from "./Components/Details"
// import Data from "./Components/Data";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return(
    <>
     <Router>
       <Routes>
         <Route exact path = "/" element = {<LoginPage/>}/>
         <Route exact path = "/about" element = {<About/>}/>
         <Route exact path = "/details/:userId" element = {<Details/>}/>

       
       </Routes>
     </Router>
    </>
  )
}

export default App;

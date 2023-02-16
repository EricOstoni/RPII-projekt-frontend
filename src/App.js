import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Appbar";
import Student from "./components/Student";
import Profile from "./views/Profile.js"

function App() {
  return (

      <div className="App">
        <Appbar></Appbar>
        <Student></Student>
        <Profile/> 
      </div>
   
    
  );
}

export default App;

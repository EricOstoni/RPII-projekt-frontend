import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home.js";
import Profile from "./views/Profile.js";
import Table from "./views/Table.js";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import EditUser from "./views/EditUser";
import ViewUser from "./views/ViewUser";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/table" element={<Table />} />
      <Route path="/edituser/:id" element={<EditUser />} />
      <Route path="/edituser" element={<EditUser />} />
      <Route path="/viewuser" element={<ViewUser/>} />
      <Route path="/viewuser/:id" element={<ViewUser/>} />
     

    </Routes>
  );
}

export default App;

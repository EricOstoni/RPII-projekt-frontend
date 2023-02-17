import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home.js";
import Profile from "./views/Profile.js";
import Table from "./views/Table.js";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default App;

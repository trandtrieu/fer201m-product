import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
import Home from "./components/Pages/Home";
import Admin from "./components/Pages/Admin";

import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "./components/Pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/:id" element={<User />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UserSignup from "../components/auth/users/Signup";
import UserSignin from "../components/auth/users/Signin";
import EmployerSignup from "../components/auth/employers/Signup";
import EmployerSignin from "../components/auth/employers/Signin";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/user/login" element={<UserSignin />} />
      <Route path="/employer/signup" element={<EmployerSignup />} />
      <Route path="/employer/login" element={<EmployerSignin />} />
    </Routes>
  </Router>
);

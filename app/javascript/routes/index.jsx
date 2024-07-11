import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UserSignup from "../components/auth/users/Signup";
import UserSignin from "../components/auth/users/Signin";
import EmployerSignup from "../components/auth/employers/Signup";
import EmployerSignin from "../components/auth/employers/Signin";
import UserPasswordResetToken from "../components/auth/users/PasswordResetToken";
import EmployerPasswordResetToken from "../components/auth/employers/PasswordResetToken";
// import UpdatePasswordForm from "../components/auth/common/UpdatePasswordForm";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/user/login" element={<UserSignin />} />
      <Route path="/employer/signup" element={<EmployerSignup />} />
      <Route path="/employer/login" element={<EmployerSignin />} />
      <Route path="/user/reset-password" element={<UserPasswordResetToken />} />
      <Route path="/employer/reset-password" element={<EmployerPasswordResetToken />} />
      {/* <Route path="/update-password" element={<UpdatePasswordForm />} /> */}
    </Routes>
  </Router>
);

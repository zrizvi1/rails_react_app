import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../common/SignupForm";

export default function SignUp() {
  return (
    <>
      <SignupForm title="User" path="/user/login" />
    </>
  );
}

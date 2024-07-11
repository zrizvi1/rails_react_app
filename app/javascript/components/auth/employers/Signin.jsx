import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../common/SigninForm";

export default function Signin() {
  return (
    <>
     <SigninForm title="Employer" path="/employer/signup" />
    </>
  );
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../_root/Pages/Home";
import SignInForm from "../_auth/forms/SignInForm";
import SignUpForm from "../_auth/forms/SignUpForm";
import AuthLayout from "../_auth/AuthLayout";
import RootLayout from "../_root/RootLayout";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
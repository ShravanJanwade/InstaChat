import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../_root/Pages/Home";
import SignInForm from "../_auth/forms/SignInForm";
import SignUpForm from "../_auth/forms/SignUpForm";
import AuthLayout from "../_auth/AuthLayout";
import RootLayout from "../_root/RootLayout";
import { AllUsers, CreatePost, EditPost, Explore, LikedPosts, PostDetails, Profile, Saved, UpdateProfile } from "@/_root/Pages";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/all-users" element={<AllUsers/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/update-post/:id" element={<EditPost/>}/>
        <Route path="/posts/:id" element={<PostDetails/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/profile/:id/liked-posts" element={<LikedPosts/>}/>
        <Route path="/update-profile/:id" element={<UpdateProfile/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;

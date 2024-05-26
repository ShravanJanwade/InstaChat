import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="flex-1 flex justify-center items-center flex-col py-10">
      <Outlet />
    </section>
  );
};

export default RootLayout;

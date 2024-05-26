import React from "react";
import AppRoutes from "./Routes/Routes";
import "./global.css";
import { Toaster } from "./components/ui/toaster";
const App = () => {
  return (
    <main className="flex h-screen">
      <AppRoutes />
      <Toaster />
    </main>
  );
};

export default App;

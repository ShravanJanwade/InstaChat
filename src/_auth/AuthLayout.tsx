import { useUserContext } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
const images = [
  "/assets/images/side-img.jpg",
  "/assets/images/side-img1.jpg",
  "/assets/images/side-img2.jpg",
  "/assets/images/side-img1.svg",
  // Add all your image paths here
];

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Time for the fade-out transition
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const fadeStyle = {
    opacity: fade ? 1 : 0,
    transition: 'opacity 1s ease-in',
  };

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex-1 flex justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src={images[currentImageIndex]}
            alt="side"
            style={fadeStyle}
            className="hidden xl:block bg-no-repeat object-cover h-full w-1/2"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
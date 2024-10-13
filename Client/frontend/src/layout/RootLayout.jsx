import React from "react";
import Home from "../components/HomeCompent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Protected from "../components/Protected";

function RootLayout() {
  return (
    <>
      <Header />
      <Protected>
        <Outlet />
      </Protected>
      <Footer />
    </>
  );
}

export default RootLayout;

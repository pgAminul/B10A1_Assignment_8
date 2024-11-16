import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import "../../App.css";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

function Static() {
  return (
    <div>
      <Helmet>
        <title>Gadget | Statistics</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="h-[60px]">
        <Navbar />
      </div>
      <div className="outlateMain">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Static;

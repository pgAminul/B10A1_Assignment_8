import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import AllGadgets from "./AllGadgets";
import { Helmet } from "react-helmet";
import MainHeader from "../Layout/Header/MainHeader";

function Home() {
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Gadget | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div>
        <MainHeader />
      </div>
      <h2 className="font-bold text-4xl text-center mx-auto py-6 my-4">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid  md:grid-cols-4 gap-3 justify-center ">
        <div className="col-span-1">
          <AllGadgets data={data} />
        </div>
        <div className=" md:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";

const HeadingTitle = () => {
  return (
    <>
      <div className="bg-purple-500  mx-auto ">
        <div className="text-center  mx-auto space-y-4 py-9 ">
          <h2 className="text-4xl font-semibold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <h2 className=" mx-auto text-gray-200">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </h2>
          <NavLink to={"/deshboard"}>
            <button className="border mb-40  rounded-full px-4 bg-white  mt-4  text-purple-600 border-purple-700 font-semibold py-1">
              Shop Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HeadingTitle;

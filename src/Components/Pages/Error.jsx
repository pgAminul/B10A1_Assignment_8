import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="font-bold flex flex-col justify-center items-center h-[80vh]">
      <h3 className="text-red-600 py-5 text-3xl">404! Any Page Not Found</h3>
      <NavLink to={"/"} className={`btn btn-error`}>
        Please Go To Home
      </NavLink>
    </div>
  );
}

export default Error;

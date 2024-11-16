import React from "react";
import bannerImg from "../../../assets/banner.jpeg";

const Banner = () => {
  return (
    <div className="h-[300px] relative  ">
      <div className="absolute right-[350px] -top-40 p-5 backdrop-blur-xl rounded-xl border">
        {" "}
        <img className=" h-[400px] rounded-xl" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

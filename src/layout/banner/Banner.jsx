import React from "react";
import LeftBanner from "./LeftBanner";
import bannerimage from "../../assets/images/logo.png";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-20 font-titleFont pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <LeftBanner />
      <div className="w-1/2 flex justify-center items-center">
        <img
          className="w-[600px] h-[680px] z-10"
          src={bannerimage}
          alt="bannerimage"
        />
        <div className="absolute bottom-0 w-[600px] h-[580px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Banner;

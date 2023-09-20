import Features from "./components/features/Features";
import Banner from "./layout/banner/Banner";
import Navbar from "./layout/navbar/Navbar";
import React from "react";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features /> 
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Page from "../components/Home/Page";
import Sidebar from "../components/Home/Sidebar";

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-start">
      <div className="col-span-3 h-full w-64 bg-stone-100">
        <Sidebar />
      </div>
      <div className="col-span-9 bg-gray-50 h-full w-full">
        <Page />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import {Link } from "react-router-dom";

function WelCome() {

  return (
    <div className="h-full  ">
      <div className="w-full items-center text-end">
        <span className="px-6 text-xs text-blue-400 hover:text-black">
          <Link to="/login">Sing In</Link>
        </span>
      </div>
      <div className="h-full flex justify-center items-center w-full gap-2 ">
        <h1 className="text-4xl font-Roboto font-bold">Welcome to</h1>
        {/* <p className="text-md mt-3 font-bold"> Webmyne Systems Pvt. Ltd</p> */}
      </div>
    </div>
  );
}

export default WelCome;

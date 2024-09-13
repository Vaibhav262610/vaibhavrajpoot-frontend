"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex bg-opacity-30 backdrop-blur-md justify-center py-4 fixed items-center z-50 ">
        <div className=" w-7/12 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-black">VR</h1>
          </Link>
          <button className="bg-transparent border-2 py-[0.3rem] px-6 duration-200 hover:border-yellow-500 hover:text-yellow-500 font-medium rounded-md">
            MENU
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

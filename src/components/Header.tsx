import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const greaterThan = "<";

  return (
    <>
      <div className="h-screen  flex justify-center items-center w-full">
        <div className="w-8/12">
          <div className="flex flex-col gap-2">
            <h1 className="text-emerald-300 text-2xl font-medium">
              👋 Hi, I am
            </h1>
            <h1 className="font-bold text-7xl">Vaibhav Rajpoot</h1>
            <h1 className="text-[2.5rem] font-semibold text-zinc-400">
              {" "}
              I speak in{" "}
              <span className=" text-yellow-400">
                {greaterThan}code /&gt;{" "}
              </span>{" "}
              so you don&apos;t have to
            </h1>
            <p className="text-zinc-500 w-8/12 text-xl font-light ">
              {" "}
              I&aps;m your friendly neighborhood{" "}
              <span className="text-slate-400 font-bold">
                Front-End Developer
              </span>
              .Helping people turn their ideas into sites & apps that work.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="flex gap-2 items-center border-2 hover:bg-sky-400 hover:text-white duration-200 border-sky-400 text-sky-400 py-3 text-sm px-6 rounded-lg font-bold">
                <FaGithub className="mb-1" />
                <button>Github</button>
              </div>
              <button className="border-2 hover:bg-green-400 hover:text-white duration-200 border-green-400 text-green-400 py-3 text-sm px-6 rounded-lg font-bold">
                Check Out My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

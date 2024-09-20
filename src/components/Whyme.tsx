import Link from "next/link";
import React from "react";

const Whyme = () => {
  return (
    <>
      <div className="h-[150vh  ] justify-center flex flex-col items-center gap-40">
        <div className="about-section">
          <div className="flex items-center text-center justify-center text-3xl">
            <h1 className="about-heading">&lt;About /&gt;</h1>
            <h1 className=" name-heading font-black " style={{ width: 900 }}>
              Why me
            </h1>
          </div>
        </div>

        <div className="whyme relative flex flex-col gap-4 w-8/12">
          <p className="text-xl text-green-400 font-semibold">Why Me?</p>
          <p className="text-2xl text-gray-400">
            There's nothing I enjoy more than developing good websites and{" "}
            <br />
            webApps for Cool people. I believe that people should do things they
            <br /> are good at or in which their Hearts 💖 lie. That's why I
            choose <br /> freelance web development as my career.
          </p>
          
          <p className="text-2xl text-gray-400">
            I've spent many years trying to perfect what I do and while I'll
            never <br /> be perfect, I do my best to come close.
          </p>
          <p className="text-2xl text-slate-300 font-bold">
            If you've got a project you'd like to work on with me just get in{" "}
            <br /> touch and we can get to work!
          </p>
          <div>
            <button className="border-2 hover:bg-green-400 hover:text-white duration-200 border-green-400 text-green-400 py-3 text-sm px-8 rounded-lg font-bold">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyme;

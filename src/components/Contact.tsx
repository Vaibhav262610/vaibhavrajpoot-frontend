import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-screen justify-center flex flex-col items-center gap-40">
        <div className="about-section">
          <div className="flex items-center text-center justify-center text-3xl">
            <h1 className="about-heading">&lt;Contact /&gt;</h1>
            <h1 className=" name-heading font-black " style={{ width: 900 }}>
              Say hello
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 relative w-8/12">
          <p className="text-2xl text-green-400 font-semibold">Get in Touch</p>
          <p className="text-2xl text-gray-400">
            I'm available for freelance projects. Let's work together to create
            <br /> something worth sharing.
          </p>
          <div className="flex flex-row gap-5">
            <div>
              <button className="border-2 hover:bg-blue-400 hover:text-white duration-200 border-blue-400 text-blue-400 py-3 text-sm px-8 rounded-lg font-bold">
                Github
              </button>
            </div>
            <div>
              <button className="border-2 hover:bg-yellow-400 hover:text-white duration-200 border-yellow-400 text-yellow-400 py-3 text-sm px-8 rounded-lg font-bold">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-md text-gray-400 font-semibold">
          Designed and Developed with 💖
        </p>
        <p className="text-md text-gray-400 font-black">by Vaibhav Rajpoot</p>
        <br />
      </div>
    </>
  );
};

export default Contact;

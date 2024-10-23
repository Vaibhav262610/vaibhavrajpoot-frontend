import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="h-screen justify-center flex flex-col items-center gap-40">
        <div className="about-section">
          <div className="flex items-center justify-center text-3xl">
            <h1 className="about-heading">&lt;About /&gt;</h1>
            <h1
              className="name-heading font-black  text-center "
              style={{ width: 820 }}
            >
              Vaibhav Rajpoot
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-8/12 max-w-8/12">
          <p className=" text-2xl text-green-400 font-semibold">About Me</p>
          <p className="text-xl w-8/12 text-gray-400">
            I’m a passionate frontend developer dedicated to creating intuitive
            and engaging user experiences. I love transforming design concepts
            into responsive, visually appealing websites and constantly seek to
            learn new technologies. Collaboration is key for me, as I enjoy
            working with designers and other developers to bring ideas to life.
            In my free time, I explore the latest web trends and experiment with
            new frameworks.
          </p>
          <p className="text-xl text-green-400 font-bold">Want to know more?</p>
          <Link href="/Progress">
            <button className="border-2 hover:bg-green-400 hover:text-white duration-200 border-green-400 text-green-400 py-3 text-sm px-6 rounded-lg font-bold">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;

import Image from "next/image";
import React from "react";
import projects from "../projects/projects";
import Link from "next/link";

const Work = () => {
  const limitedProjects = projects.slice(0, 6);
  return (
    <>
      <div className="h-[200vh] gap-12 w-full flex flex-col justify-center items-center">
        <div className="about-section">
          <div className="flex items-center justify-center text-3xl">
            <h1 className="about-heading">&lt;Work /&gt;</h1>
            <h1 className=" name-heading font-black " style={{ width: 900 }}>
              Featured Projects
            </h1>
          </div>
        </div>
        <div className="mt-32">
          <p className="text-2xl text-green-400 font-semibold">
            Some Selected Projects
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 mt-12 gap-8">
          {limitedProjects.map((items) => {
            return (
              <div
                key={items.id}
                style={{ width: 350 }}
                className="box rounded-2xl p-5 hover:border-lime-500 hover:animate-pulse"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2">
                    <div className="bg-red-500 h-4 w-4 rounded-full  "></div>
                    <div className="bg-yellow-500 h-4 w-4 rounded-full "></div>
                    <div className="bg-green-500 h-4 w-4 rounded-full "></div>
                  </div>
                  <p className="text-gray-400 text-sm">Personal</p>
                </div>
                <hr className="mt-4" />
                {/* <Link href={link} target='_blank'> */}
                <div className="flex flex-col gap-3 mt-4">
                  <h1 className="text-3xl font-semibold">
                    {items.projectName}
                  </h1>
                  <h1 className="text-xs">{items.status}</h1>
                  <h1 className="text-xs">{items.year}</h1>

                  <a href="/">
                    <Image
                      className="images cursor-default border-2 rounded-2xl"
                      src={items.image}
                      objectFit="contain"
                      alt="Not Available"
                      width={320}
                      height={200}
                    />
                  </a>

                  <div className="flex justify-between p-4">
                    <h1 className="text-lg text-blue-600 cursor-pointer font-semibold">
                      <a href="#" target="_blank">
                        Visit 🤜
                      </a>
                    </h1>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            );
          })}
        </div>
        <div>
          <Link href="/allProjects">
            <button className="border-2 hover:bg-yellow-400 hover:text-white duration-200 border-yellow-400 text-yellow-400 py-3 text-sm px-8 rounded-lg font-bold">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Work;

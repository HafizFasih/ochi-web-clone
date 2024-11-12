"use client"
import { motion } from "framer-motion";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
const Starter = () => {

  return (
    <div data-scroll data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-100 border-t-[0.1px] text-black relative">
      <div className="text w-full mt-28 mb-12 py-6 relative">
        {["we create", "eye-opening", "presentations"].map((val, ind) => {
          return (
            <div key={ind} className="flex flex-row">
              <div className="flex pl-14 items-center w-full">
                {ind === 1 && (
                  <motion.div initial={{width:"0vw"}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:0.2,delay:0.7}} className={`bg-center bg-no-repeat bg-cover bg-[url(../public/txt.jpg)] duration-700 h-[14vh] mr-3 relative top-1 rounded-lg bg-red-400`}></motion.div>
                )}
                <h1 className="text-9xl leading-[17vh] uppercase font-['FoundersGrotesk']">
                  {val}
                </h1>
              </div>
            </div>
          );
        })}
        <div className="absolute text-white h-[28vh] w-[4vw] right-0 top-[10%] bg-red-600 px-3 py-2">
          <h1 className="text-2xl font-bold">W.</h1>
          <h5 className="-rotate-90 text-nowrap absolute -right-4 bottom-12 text-sm font-semibold">Site of the Day</h5>
   
        </div>
      </div>
      <div className="w-full border-t-[1px] border-zinc-900 flex items-center justify-between py-3 px-12 text-sm">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((val, ind) => {
          return <p key={ind}>{val}</p>;
        })}
        <div className="flex gap-2 items-center justify-center">
          <button className="uppercase rounded-full border-[1px] border-zinc-900 px-4 py-1">
            Start the project
          </button>
          <span className="h-8 w-8 border-[1px] border-zinc-900 rounded-full flex items-center justify-center -rotate-[135deg]">
            <FaArrowDownLong className="h-2/4 w-2/4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Starter;

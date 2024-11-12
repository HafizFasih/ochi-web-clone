"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
const FeaturedProjects = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  return (
    <div className="py-20 w-full bg-zinc-100">
      <h1 className='w-full px-16 pb-10 mb-10 text-black text-5xl font-["NeueMontreal"] border-b-[1px] border-zinc-900'>
        Featured projects
      </h1>
      <div className="w-full py-16 px-16 flex gap-6 flex-row">
        {/*CARD 1 */}
        <div className="cardcontainer relative h-[85vh] w-2/4">
          <h1 className="uppercase absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[rgba(205,234,104)] z-10 text-[9.5vw] leading-none tracking-tight text-nowrap font-semibold font-['FoundersGrotesk']">
            <div className="overflow-hidden">
              {"Cardboard Spaceship".split("").map((val, ind) => (
                <motion.span
                  key={ind}
                  initial={{ y: hover1 ? "112px" : "0px" }}
                  animate={{ y: hover1 ? "0px" : "112px" }}
                  transition={{ delay: ind * 0.02, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                >
                  {val}
                </motion.span>
              ))}
            </div>
          </h1>
          <div
            className="card h-full w-full rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden hover:scale-95 duration-700 cursor-pointer"
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <img
              className="h-full w-full hover:scale-110 duration-500"
              src="/card1.png"
            />
          </div>
        </div>

        {/*CARD 2 */}
        <div className="cardcontainer relative h-[85vh] w-2/4">
          <h1 className="uppercase absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[rgba(205,234,104)] z-10 text-[9.5vw] leading-none tracking-tight text-nowrap font-semibold font-['FoundersGrotesk']">
            <div className="overflow-hidden">
              {"AH2 & Matt Horn".split("").map((val, ind) => (
                <motion.span
                  key={ind}
                  initial={{ y: hover2 ? "112px" : "0px" }}
                  animate={{ y: hover2 ? "0px" : "112px" }}
                  transition={{ delay: ind * 0.02, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                >
                  {val}
                </motion.span>
              ))}
            </div>
          </h1>
          <div
            className="card h-full w-full rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden hover:scale-95 duration-700 cursor-pointer"
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <img
              className="h-full w-full hover:scale-110 duration-500"
              src="/card2.png"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-16 flex gap-6 flex-row">
        {/*CARD 3 */}
        <div className="cardcontainer relative h-[85vh] w-2/4">
          <h1 className="uppercase absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[rgba(205,234,104)] z-10 text-[9.5vw] leading-none tracking-tight text-nowrap font-semibold font-['FoundersGrotesk']">
            <div className="overflow-hidden">
              {"Fyde".split("").map((val, ind) => (
                <motion.span
                  key={ind}
                  initial={{ y: hover3 ? "112px" : "0px" }}
                  animate={{ y: hover3 ? "0px" : "112px" }}
                  transition={{ delay: ind * 0.02, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                >
                  {val}
                </motion.span>
              ))}
            </div>
          </h1>
          <div
            className="card h-full w-full rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden hover:scale-95 duration-700 cursor-pointer"
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <img
              className="h-full w-full hover:scale-110 duration-500"
              src="/card3.png"
            />
          </div>
        </div>

        {/*CARD 4 */}
        <div className="cardcontainer relative h-[85vh] w-2/4">
          <h1 className="uppercase absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[rgba(205,234,104)] z-10 text-[9.5vw] leading-none tracking-tight text-nowrap font-semibold font-['FoundersGrotesk']">
            <div className="overflow-hidden">
              {"Vise".split("").map((val, ind) => (
                <motion.span
                  key={ind}
                  initial={{ y: hover4 ? "112px" : "0px" }}
                  animate={{ y: hover4 ? "0px" : "112px" }}
                  transition={{ delay: ind * 0.02, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                >
                  {val}
                </motion.span>
              ))}
            </div>
          </h1>
          <div
            className="card h-full w-full rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden hover:scale-95 duration-700 cursor-pointer"
            onMouseEnter={() => setHover4(true)}
            onMouseLeave={() => setHover4(false)}
          >
            <img
              className="h-full w-full hover:scale-110 duration-500"
              src="/card4.jpg"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-16 flex gap-6 flex-row">
        {/*CARD 5 */}
        <div className="cardcontainer relative h-[85vh] w-2/4">
          <h1 className="uppercase absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[rgba(205,234,104)] z-10 text-[9.5vw] leading-none tracking-tight text-nowrap font-semibold font-['FoundersGrotesk']">
            <div className="overflow-hidden">
              {"Trawa".split("").map((val, ind) => (
                <motion.span
                  key={ind}
                  initial={{ y: hover5 ? "112px" : "0px" }}
                  animate={{ y: hover5 ? "0px" : "112px" }}
                  transition={{ delay: ind * 0.02, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                >
                  {val}
                </motion.span>
              ))}
            </div>
          </h1>
          <div
            className="card h-full w-full rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden hover:scale-95 duration-700 cursor-pointer"
            onMouseEnter={() => setHover5(true)}
            onMouseLeave={() => setHover5(false)}
          >
            <img
              className="h-full w-full hover:scale-110 duration-500"
              src="/card5.jpg"
            />
          </div>
        </div>

        {/*CARD 6 */}
        <div className="cardcontainer relative h-[85vh] w-2/4">
          <h1 className="uppercase absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[rgba(205,234,104)] z-10 text-[9.5vw] leading-none tracking-tight text-nowrap font-semibold font-['FoundersGrotesk']">
            <div className="overflow-hidden">
              {"Premium Blend".split("").map((val, ind) => (
                <motion.span
                  key={ind}
                  initial={{ y: hover6 ? "112px" : "0px" }}
                  animate={{ y: hover6 ? "0px" : "112px" }}
                  transition={{ delay: ind * 0.02, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block"
                >
                  {val}
                </motion.span>
              ))}
            </div>
          </h1>
          <div
            className="card h-full w-full rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden hover:scale-95 duration-700 cursor-pointer"
            onMouseEnter={() => setHover6(true)}
            onMouseLeave={() => setHover6(false)}
          >
            <img
              className="h-full w-full hover:scale-110 duration-500"
              src="/card6.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;

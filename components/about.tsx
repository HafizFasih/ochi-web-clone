import React, { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-[rgba(0,77,67)]">
      <div className='w-full bg-[rgba(205,234,104)] text-black font-["NeueMontreal"] rounded-tr-3xl rounded-tl-3xl'>
        <p className="text-[4vw] py-20 px-10  leading-[4.5vw]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <u>raise funds, sell products, explain complex ideas</u>, and{" "}
          <u>hire great people</u>.
        </p>
        <div className="w-full flex justify-between border-t-[1.2px] border-[#b4c379] py-8 px-12">
          <div className="w-1/3">
            <h1 className="text-[4.5vw] tracking-tighter mb-4">
              Our approach:
            </h1>
            <button
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="uppercase py-1 pl-3 pr-1 bg-[#1f1e1e] text-white rounded-full flex gap-2 items-center justify-center"
            >
              <h3 className="text-sm">read more</h3>
              <span className="flex items-center justify-center h-9 w-9 rounded-full ">
                <span
                  className={`h-2 w-2 bg-white flex items-center justify-center rounded-full duration-300 ${
                    hover && "h-9 w-9"
                  }`}
                >
                  <div
                    className={`h-4/5 w-4/5 flex items-center justify-center -rotate-[135deg] ${
                      hover ? "inline-block" : "hidden"
                    }`}
                  >
                    <FaArrowDownLong color="black" />
                  </div>
                </span>
              </span>
            </button>
          </div>
          <div className={`pic h-[70vh] w-[45vw] rounded-xl ${hover && "scale-95"} overflow-hidden duration-700`}>
          <img src="/aboutPic.jpg" alt="" className={`h-full w-full ${hover && "scale-110"} duration-700`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

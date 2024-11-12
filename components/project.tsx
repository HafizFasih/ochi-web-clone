"use client";
import React, { useEffect, useState } from "react";

const Project = () => {
  const [rotate, setRotate] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [display, setDisplay] = useState(false);
  const [video, setVideo] = useState(<></>);
  const [mousePosition, setMousePosition] = useState({ x: 1185, y: 530 });

  useEffect(() => {
    window.addEventListener("mousemove", (element) => {
      let mouseX = element.clientX;
      let mouseY = element.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
      setMouseX(deltaX);
      setMouseY(deltaY);
    });
  }, []);
  return (
    <div className="bg-zinc-100">
    <div className="relative w-full py-24 bg-[rgba(205,234,104)] flex flex-col items-center justify-center rounded-tr-3xl rounded-tl-3xl">
      <div className="absolute flex gap-7 mb-40 top-40">
        {["eye1", "eye2"].map((val, ind) => (
          <div key={ind} className="eye relative h-36 w-36 bg-white rounded-full flex items-center justify-center">
            <div style={{transform: `translate(${(mouseX / 100) * 3}px,${(mouseY / 100) * 3}px)`,}}
              className="relative h-3/5 w-3/5 rounded-full bg-black translate-x-0 duration-100">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`,}} className="line absolute h-5 w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="eye-ball h-3 w-3 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className='pb-20 text-[15vw] tracking-wide font-semibold leading-[24vh] text-zinc-900 uppercase font-["FoundersGrotesk"] text-center'>
        Ready <br></br>to start<br></br> the project
      </h1>
      <button className="uppercase py-4 px-5 bg-[#1f1e1e] text-white rounded-full flex gap-8 items-center justify-center">
        <h3 className="text-sm font-['NeueMontreal']">start the project</h3>
        <span className="bg-white h-2 w-2 rounded-full inline-block"></span>
      </button>
      <h2 className="uppercase py-3 text-black">or</h2>
      <button className="text-zinc-900 uppercase py-4 px-5 bg-transparent border-[1px] border-zinc-900 rounded-full flex gap-8 items-center justify-center">
        <h3 className="text-sm font-['NeueMontreal']">hello@ochi.design</h3>
        <span className="bg-zinc-900 h-2 w-2 rounded-full inline-block"></span>
      </button>
    </div>
    </div>
  );
};

export default Project;

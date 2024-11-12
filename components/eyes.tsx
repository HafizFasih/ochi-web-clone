"use client";
import React, { useEffect, useState } from "react";

const Eyes = () => {
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

      if (mouseX >= 20 && mouseX <= 1350 && mouseY >= 70 && mouseY <= 540) {
        setMousePosition({ x: mouseX, y: mouseY });
      } else {
        setMousePosition({ x: 1185, y: 530 });
      }
    });
  }, []);

  const onClicking = () => {
    setDisplay((val) => !val);
    setVideo(
      !display ? (
        <video
          className="h-full w-full object-cover bg-no-repeat"
          src="/eyesVid.mp4"
          autoPlay
          loop
        ></video>
      ) : (
        <></>
      )
    );
  };
  return (
    <div className="h-screen w-full overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.5"
        className='relative w-full h-screen bg-[url("../public/eyesBg.jpg")] bg-center bg-cover bg-no-repeat items-center justify-center flex-col cursor-pointer flex'
        onClick={() => {
          onClicking();
        }}
      >
        <div className={`flex gap-10 mb-40 ${display ? "hidden" : "flex"}`}>
          {["eye1", "eye2"].map((val, ind) => (
            <div
              key={ind}
              className="eye relative h-52 w-52 bg-white rounded-full flex items-center justify-center"
            >
              <h1 className='text-white z-20 absolute text-2xl font-semibold font-["NeueMontreal"]'>
                PLAY
              </h1>
              <div
                style={{
                  transform: `translate(${(mouseX / 100) * 4}px,${
                    (mouseY / 100) * 4
                  }px)`,
                }}
                className="relative h-3/5 w-3/5 rounded-full bg-black translate-x-0 duration-100"
              >
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute h-5 w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="eye-ball h-5 w-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`absolute h-full w-full bg-slate-200 ${
            display ? "inline-block" : "hidden"
          }`}
        >
          {video}
          <button
            className="fixed px-3 py-1 uppercase rounded-full bg-black -translate-x-[50%] -translate-y-[50%] cursor-pointer z-30 "
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eyes;

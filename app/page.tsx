"use client";
import About from "@/components/about";
import Eyes from "@/components/eyes";
import FeaturedProjects from "@/components/featuredProjects";
import Marquee from "@/components/marquee";
import Navbar from "@/components/nav";
import Starter from "@/components/starter";
import React, { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Cards from "@/components/cards";
import Project from "@/components/project";
import Footer from "@/components/footer";
import Animation from "@/components/amimation";

const page = () => {
  const [change, setChange] = useState(false);
  try {
    const locomotiveScroll = new LocomotiveScroll();
  } catch (error) {}
  let myPage = change ?
  (
    <>
      <Navbar />
      <Starter />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedProjects />
      <Cards />
      <Project />
      <Footer />
    </>
  )
  :
  <Animation change={setChange} />
  return (
    <div className="w-full h-full bg-[rgba(0,77,67)] text-white">
      {myPage}
    </div>
  );
};

export default page;

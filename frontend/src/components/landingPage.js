import React from "react";
import Background from "./background";

import About from './About'; 

import Hero from "./hero";


const LandingPage = () => {
  return (
    <div className="text-white">
      <Background />

      <h1 className="text-white text-center text-2xl">EES hehe</h1> 
      <About />

      <Hero />
      {/* <h1 className="text-white text-center text-2xl">EES hehe</h1> */}

    </div>
  );
};
export default LandingPage;

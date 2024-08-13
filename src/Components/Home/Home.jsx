import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="hero-section w-screen h-screen">
      <div className="flex flex-col items-center pt-72 text-center">
        <h1 className="text-4xl lg:text-7xl font-serif">Develop Experiences</h1>
        <h2 className="text-2xl lg:text-3xl font-sans">
          UI frameworks and app development tools that 2.1 million developers
          love
        </h2>
      <div className="scroll absolute bottom-5"></div>
      </div>

    </main>
  );
};

export default Home;

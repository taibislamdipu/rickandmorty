import React from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar";

const Home = () => {
  return (
    <div className="home-container h-screen">
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="font-bodyFont uppercase">
          <span className="italic">The</span> Rick & Morty{" "}
          <span className="italic">Wiki</span>
        </h1>
        <div className="flex w-1/2 gap-2">
          <button className="btn">Watch Now</button>
          <p>
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

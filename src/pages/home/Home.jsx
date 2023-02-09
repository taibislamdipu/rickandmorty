import React from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar";
import MeetTheCast from "./MeetTheCast";
import Episodes from "./Episodes";
import Locations from "./Locations";

const Home = () => {
  return (
    <div className="home-container h-max">
      <Navbar />
      <section className="text-center">
        <h1 className="font-bodyFont uppercase">
          <span className="italic">The</span> Rick & Morty{" "}
          <span className="italic">Wiki</span>
        </h1>
        <div className="flex justify-center gap-2">
          <button className="btn">Watch Now</button>
          <p className="w-1/4">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </section>
      <section className="space-y-10">
        <MeetTheCast />
        <Episodes />
        <Locations />
      </section>
    </div>
  );
};

export default Home;

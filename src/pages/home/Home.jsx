import React from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar";
import MeetTheCast from "./MeetTheCast";
import Episodes from "./Episodes";
import Locations from "./Locations";
import portal from "../../assets/home-page/hero-elements/portal.png";
import bubble from "../../assets/home-page/hero-elements/bubble.png";
import gun from "../../assets/home-page/hero-elements/gun.png";

const Home = () => {
  return (
    <div className="home-container h-max">
      <Navbar />
      <section className="text-center">
        {/* <div className="testb relative w-fit">
          <img className="absolute top-0 left-0" src={bubble} alt="" />
          <h1 className="ml-52 italic">The</h1>
        </div> */}

        <h1 className="text-container testb container mx-auto flex flex-wrap items-center justify-center gap-2 font-bodyFont">
          <span className="text uppercase italic" />
          <img src={portal} alt="" />
          <span className="bg-gradient-to-r from-secondary to-thirdColor bg-clip-text uppercase text-transparent">
            Rick &
          </span>
          <span className="bg-gradient-to-r from-secondary to-thirdColor bg-clip-text uppercase text-transparent">
            Morty
          </span>
          <span className="italic">Wiki</span>
        </h1>

        {/* <h1 className="hero-text font-bodyFont uppercase">
          <span className="top-left testb italic">The</span>
          <img src={portal} alt="portal" />
          Rick & Morty <span className="italic">Wiki</span>
        </h1> */}

        <div className="flex justify-center gap-2">
          <button className="btn">Watch Now</button>
          <p className="w-1/4 text-thirdColor">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </section>
      <section className="space-y-10 pb-40">
        <MeetTheCast />
        <Episodes />
        <Locations />
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar";
import MeetTheCast from "./MeetTheCast";
import Episodes from "./Episodes";
import Locations from "./Locations";
import portal from "../../assets/home-page/hero-elements/portal.png";
import { AiFillPlayCircle } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home-container h-fit">
      <Navbar />
      <section className="mb-20 justify-between">
        <h1 className="text-container container mx-auto flex flex-wrap items-center justify-center gap-2 font-heroFont">
          <span className="text neonText uppercase italic" />
          <img src={portal} alt="" className="neonText" />
          <span className="neonText bg-gradient-to-r from-secondary to-thirdColor bg-clip-text uppercase text-transparent">
            Rick <span className="and" />
          </span>
          <span className="bg-gradient-to-r from-secondary to-thirdColor bg-clip-text uppercase text-transparent">
            Morty
          </span>
          <span className="italic">Wiki</span>
        </h1>
        <span></span>

        <div className="flex items-center justify-center gap-10">
          <button className="btn gap-4 rounded-full bg-gradient-to-r from-secondary to-thirdColor">
            <AiFillPlayCircle size={23} />
            Watch Now
          </button>
          <p className="w-1/4 text-thirdColor">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </section>
      <section className="home-rest-content space-y-10 pb-40">
        <MeetTheCast />
        <div className="episode-and-location space-y-10 ">
          <Episodes />
          <Locations />
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar";
import MeetTheCast from "./MeetTheCast";
import Episodes from "./Episodes";
import Locations from "./Locations";
import portal from "../../assets/home-page/hero-elements/portal.png";
import gun from "../../assets/home-page/hero-elements/gun.png";
import { AiFillPlayCircle } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home-container h-fit">
      <Navbar />
      {/* <section className="mb-20 justify-between">
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
      </section> */}

      <section className="hero-text-container mb-20 flex items-center px-10">
        <div className="flex w-full md:justify-center md:text-center">
          <div className=" z-10 space-y-4">
            <h1 className="space-x-2 font-heroFont">
              <span className="neonText the-text italic">The</span>
              <img src={portal} className="inline w-20 md:w-min" alt="" />
              <span className="hero-gradient-text">
                Rick &
                <br />
                Morty
              </span>
              <span className="italic">Wiki</span>
            </h1>
            <div className="flex-row-reverse items-center justify-center space-y-4 md:flex md:space-y-0">
              <p className="max-w-md text-thirdColor">
                Brilliant but boozy scientist Rick hijacks his fretful teenage
                grandson, Morty, for wild escapades in other worlds and
                alternate dimensions.
              </p>
              <button className="btn gap-4 rounded-full bg-gradient-to-r from-secondary to-thirdColor">
                <AiFillPlayCircle size={23} />
                Watch Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0">
          <img src={gun} className="w-52 md:w-full" alt="" />
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

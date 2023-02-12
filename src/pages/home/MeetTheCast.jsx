import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CastCard from "../../Components/reusable/CastCard/CastCard";

const MeetTheCast = () => {
  const [casts, setCasts] = useState([]);

  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 4.5,
    slidesToScroll: 4,
    infinite: false,
    initialSlide: 0,
    // dots: true,
    arrows: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3.5,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2.5,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1.5,
    //     },
    //   },
    // ],
  });

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setCasts(res?.data?.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="mx-4 space-y-4 md:mx-20">
      <div className="flex items-center justify-between">
        <h3>Meet The Cast</h3>
        <Link to="/cast">
          <button className="border-gradient-to-r rounded-md border-2 border-solid border-green-400 from-secondary to-thirdColor px-4 py-2 transition hover:bg-gradient-to-r hover:text-black">
            View All
          </button>
        </Link>
      </div>
      <div>
        <Slider {...sliderSettings}>
          {casts.map((cast) => (
            <CastCard key={cast?.id} cast={cast} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetTheCast;

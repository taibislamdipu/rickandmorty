import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CastCard from "../../Components/reusable/CastCard/CastCard";

const MeetTheCast = () => {
  const [casts, setCasts] = useState([]);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
  };

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
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <h3>Meet The Cast</h3>
        <Link to="/cast">
          <button className="btn">View All</button>
        </Link>
      </div>
      <div>
        <Slider {...settings}>
          {casts.map((cast) => (
            <CastCard key={cast?.id} cast={cast} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetTheCast;

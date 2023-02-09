import React, { useEffect, useState } from "react";
import "./Episodes.css";
import Slider from "react-slick";
import axios from "axios";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => {
        setEpisodes(res?.data?.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
  };

  return (
    <div className="container mx-auto">
      <h3>Episodes</h3>
      <Slider {...settings}>
        {episodes.map((episode) => (
          <div key={episode?.id}>
            <div className="episode-card rounded-xl border border-green-400 bg-blur p-6">
              <h5>{episode?.episode}</h5>
              <h4 className="font-bold">{episode?.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Episodes;

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

  // const settings = {
  //   // dots: true,
  //   // infinite: true,
  //   speed: 500,
  //   slidesToShow: 4.5,
  //   slidesToScroll: 3,
  //   // autoplay: true,
  // };

  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 4.5,
    slidesToScroll: 4,
    initialSlide: 4.5,
    infinite: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
    ],
  });

  return (
    <div className="mx-10 space-y-4 md:mx-20">
      <h3>Episodes</h3>

      <Slider {...sliderSettings}>
        {episodes.map((episode) => (
          <div key={episode?.id}>
            <div className="shape">
              <div className="text-content p-4">
                <h5>{episode?.episode}</h5>
                <h4 className="font-bold">{episode?.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Episodes;

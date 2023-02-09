import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => {
        setLocations(res?.data?.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 4.5,
    slidesToScroll: 4,
    infinite: false,
    initialSlide: 0,
    // dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });

  return (
    <div className="mx-4 space-y-4 md:mx-20">
      <h3>Locations</h3>
      <Slider {...sliderSettings}>
        {locations.map((location) => (
          <div key={location?.id}>
            <div className="episode-card rounded-xl border border-green-400 bg-blur p-6">
              <h5>#{location?.id}</h5>
              <h4 className="font-bold">{location?.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Locations;

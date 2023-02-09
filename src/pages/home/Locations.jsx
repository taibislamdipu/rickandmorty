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
      <h3>Locations</h3>
      <Slider {...settings}>
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

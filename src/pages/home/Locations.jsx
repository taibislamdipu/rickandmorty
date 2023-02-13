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
    initialSlide: 4.5,
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
      <h3>Locations</h3>
      <Slider {...sliderSettings}>
        {locations.map((location) => (
          <div key={location?.id}>
            <div className="shape">
              <div className="text-content p-4">
                <h5>#{location?.id}</h5>
                <h4 className="font-bold">{location?.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Locations;

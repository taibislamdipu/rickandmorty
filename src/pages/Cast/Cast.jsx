import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import "./Cast.css";
import CastCard from "../../Components/reusable/CastCard/CastCard";
import { Link } from "react-router-dom";

const Cast = () => {
  const [casts, setCasts] = useState([]);

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
    <div className="cast-container h-fit">
      <Navbar />
      <main className="container mx-auto ">
        <h2>The Cast</h2>
        <div className="flex flex-wrap gap-4">
          {casts.map((cast) => (
            <Link to={`/cast-details/${cast?.id}`}>
              <CastCard key={cast?.id} cast={cast} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cast;

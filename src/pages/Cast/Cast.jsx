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
    <div className="cast-container h-fit pb-40">
      <Navbar />
      <main className="container mx-auto space-y-4">
        <h2 className="text-4xl text-thirdColor">The Cast</h2>
        <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4">
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";

const CastDetails = () => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCasts(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="castDetails-container h-screen">
      <Navbar />
      <main className="container mx-auto grid grid-cols-2">
        <div className="col-span-1 border">
          <h3>{casts?.name}</h3>
          <div>
            <img src={casts?.image} alt={casts?.name} />
          </div>
        </div>
        <div className="col-span-1 border">
          <div className="grid grid-cols-3">
            <div className="col-span-1 border">1</div>
            <div className="col-span-1 border">1</div>
            <div className="col-span-1 border">1</div>
            <div className="col-span-3 border">1</div>
            <div className="col-span-3 border">1</div>
            <div className="col-span-3 border">1</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CastDetails;

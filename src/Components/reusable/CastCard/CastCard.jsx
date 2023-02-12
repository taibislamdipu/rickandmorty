import React from "react";
import "./CastCard.css";
const CastCard = ({ cast }) => {
  const { image, name } = cast;
  return (
    <div className="cast-card bg-blur rounded-xl border border-green-400">
      <img src={image} className="h-60 w-full rounded-md object-cover" />
      <h4 className="mt-2">{name}</h4>
    </div>
  );
};

export default CastCard;

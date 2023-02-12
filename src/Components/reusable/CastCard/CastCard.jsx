import React from "react";
import "./CastCard.css";
const CastCard = ({ cast }) => {
  const { image, name } = cast;
  return (
    <div className="cast-card">
      <div className="cast-card-content p-4">
        <img
          src={image}
          className="h-40 w-full rounded-md object-cover md:h-56"
        />
        <h4 className="mt-2">{name}</h4>
      </div>
    </div>
  );
};

export default CastCard;

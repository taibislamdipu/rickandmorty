import React from "react";
import "./CastCard.css";
const CastCard = ({ cast }) => {
  const { image, name } = cast;
  return (
    <div className="cast-card rounded-xl border border-green-400 bg-blur p-4">
      <img
        src={image}
        className="h-[216px] w-[258px] rounded-md object-cover"
      />
      <h4 className="mt-2">{name}</h4>
    </div>
  );
};

export default CastCard;

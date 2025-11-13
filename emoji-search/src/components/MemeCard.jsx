import React from "react";

function MemeCard({ item }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <img
        src={item.url}
        alt={item.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 font-semibold">{item.name}</h3>
    </div>
  );
}

export default MemeCard;

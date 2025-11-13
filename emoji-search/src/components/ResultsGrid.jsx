import React from "react";
import MemeCard from "./MemeCard";

function ResultsGrid({ results }) {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl">
      {results.map((item) => (
        <MemeCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ResultsGrid;

import React from "react";
import { useState } from "react";

const MapsGameplay = ({ countries }) => {
  if (!countries) {
    return <h2>No existe paises</h2>;
  }

  const { names, maps, mapContinents } = countries;

  const [currentRound, setCurrentRound] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const nextRound = () => {
    if (currentRound < 9) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentRound(currentRound + 1);
      }, 1000);
    }
  };

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>Round {currentRound + 1}</h2>
          <p>Country: {names[currentRound]}</p>
          <img src={maps[currentRound]} alt={`Map of ${names[currentRound]}`} />
          <p>Continent: {mapContinents[currentRound]}</p>
          <button onClick={nextRound} disabled={currentRound >= 9}>
            Next Round
          </button>
        </div>
      )}
    </div>
  );
};

export default MapsGameplay;

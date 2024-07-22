import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MapsGameplay = ({ countries }) => {
  const [currentRound, setCurrentRound] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rounds, setRounds] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const Navigate = useNavigate();

  useEffect(() => {
    const dividedRounds = divideIntoRounds(countries);
    setRounds(dividedRounds);
  }, [countries]);

  const divideIntoRounds = (countries) => {
    const rounds = [];
    for (let i = 0; i < 10; i++) {
      let roundCountries = countries.slice(i * 4, i * 4 + 4);
      roundCountries = shuffleArray(roundCountries);
      rounds.push(roundCountries);
    }
    return rounds;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const nextRound = () => {
    if (!selectedOption) {
      toast.error("Selecciona una opción!");
      return;
    }

    if (currentRound < 9) {
      setSelectedOption(null);
      setCurrentRound(currentRound + 1);
    } else {
      Navigate("/scoreboard/mapa", {
        state: { correctAnswers },
      });
    }
  };

  const handleOptionClick = (country) => {
    if (!selectedOption) {
      setSelectedOption(country);
      const isAnswerCorrect =
        country ===
        rounds[currentRound].find((c) => c === countries[currentRound * 4]);
      setIsCorrect(isAnswerCorrect);
      if (isAnswerCorrect) {
        setCorrectAnswers((prevCount) => prevCount + 1);
      }
    }
  };

  if (!countries) {
    return <h2>No existen países</h2>;
  }

  const currentCountries = rounds[currentRound] || [];
  const correctCountry = countries[currentRound * 4];

  return (
    <div>
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="flex flex-col">
          <h2 className="text-white text-xl font-extrabold py-2 px-4 font-outline-2">
            Ronda(s): {currentRound + 1}/10
          </h2>
          {correctCountry && (
            <div className="">
              <div className="flex justify-center items-center gap-3">
                <img
                  src={correctCountry.mapa}
                  alt={`Map of ${correctCountry.pais}`}
                  className="w-96 h-96"
                />
                <img
                  src={correctCountry.localizacion}
                  alt={`Map of ${correctCountry.pais}`}
                  className="w-96 h-96"
                />
              </div>
              <div className="grid grid-cols-2 sm:flex justify-center gap-5 p-5">
                {currentCountries.map((country, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(country)}
                    className={`bg-[#2C4058] text-white rounded-lg px-4 py-2 text-2xl font-medium hover:text-gray-300 hover:cursor-pointer sm:w-1/5 ${
                      selectedOption === country
                        ? country === correctCountry
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }`}
                    disabled={!!selectedOption}
                  >
                    {country.pais}
                  </button>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-amber-500 hover:bg-amber-600 text-white text-2xl font-extrabold w-36 py-2 px-4 rounded font-outline-2 focus:outline-white"
                  onClick={nextRound}
                >
                  Continuar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapsGameplay;

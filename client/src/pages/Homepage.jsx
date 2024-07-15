import React from "react";
import { Link } from "react-router-dom";
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Homepage = () => {
  const modes = [
    { id: "1", name: "Modo 1 : Adivina la Bandera" },
    { id: "2", name: "Modo 2 : Quiz de Geolocalización" },
    { id: "3", name: "Modo 3 : Adivina la Cuidad Capital" },
  ];

  return (
    <div>
      <nav className="flex justify-center items-center bg-[#2C4058] p-8 rounded-b-3xl header-curved">
        <h1 className="font-extralight text-[#F3F3F3] text-6xl stroke-blue-700 stroke-2">
          AmeriQuest
        </h1>
      </nav>
      <div className="flex flex-col justify-center items-center gap-10 pt-16">
        {modes.map((mode) => (
          <Link
            key={mode.id}
            to={`/gameplay/${mode.id}/${mode.name}`}
            className="flex items-center gap-5 bg-[#2C4058] text-[#F3F3F3] rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#ffd15b] hover:text-[#252B41] hover:cursor-pointer w-2/5"
          >
            <img src="/question-mark.png" alt="question-mark-logo" />
            {mode.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

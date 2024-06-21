import React from "react";
import { Link } from "react-router-dom";

const GameplaySelection = () => {
  const modes = [
    { id: "1", name: "Modo 1: Adivina el Capital" },
    { id: "2", name: "Modo 2: Adivina la Bandera" },
    { id: "3", name: "Modo 3: Adivina el País según el Mapa del País" },
    { id: "4", name: "Modo 4: Adivina el País según el Mapa del Región" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-screen h-screen bg-gradient-to-b from-[#2c69da] via-[#4edaf9] to-[#2c69da] ">
      <Link
        to="/"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer fixed top-0 left-0 m-4"
      >
        Ir atras
      </Link>
      <h1 className="text-[#F3F3F3] font-normal text-4xl stroke-blue-700 stroke-2">
        WorldWise
      </h1>
      {modes.map((mode) => (
        <Link
          key={mode.id}
          to={`/gameplay/${mode.id}/${mode.name}`}
          className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
        >
          {mode.name}
        </Link>
      ))}
    </div>
  );
};

export default GameplaySelection;

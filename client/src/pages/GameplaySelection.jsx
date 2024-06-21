import React from "react";
import { Link } from "react-router-dom";

const GameplaySelection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-screen h-screen bg-gradient-to-b from-[#2c69da] via-[#4edaf9] to-[#2c69da] ">
      <h1 className="text-[#F3F3F3] font-normal text-4xl stroke-blue-700 stroke-2">
        WorldWise
      </h1>
      <Link
        to="/gameplay"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
      >
        Modo Capital
      </Link>
      <Link
        to="/gameplay"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
      >
        Modo Bandera
      </Link>
      <Link
        to="/gameplay"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
      >
        Modo Mapa
      </Link>
      <Link
        to="/gameplay"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
      >
        Modo Region
      </Link>
    </div>
  );
};

export default GameplaySelection;

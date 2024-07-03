import React from "react";
import { Link } from "react-router-dom";
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-screen h-screen bg-gradient-to-b from-[#2c69da] via-[#4edaf9] to-[#2c69da] ">
      <h1 className="font-extralight text-[#F3F3F3] text-6xl stroke-blue-700 stroke-2">
        AmeriQuest
      </h1>
      <img src="Animation.gif" alt="GIf" className="w-96" />
      <Link
        to="/gameplay_selection"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
      >
        Iniciar
      </Link>
    </div>
  );
};

export default Homepage;

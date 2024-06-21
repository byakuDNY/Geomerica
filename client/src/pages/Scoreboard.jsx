import React from "react";
import { Link } from "react-router-dom";

const Scoreboard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-screen h-screen bg-gradient-to-b from-[#2c69da] via-[#4edaf9] to-[#2c69da]">
      <div class="flex flex-col justify-center items-center bg-[#4edaf9] text-6xl rounded-lg border-4 border-[#2c69da] p-8 text-center">
        <div className="font-serif">Tu Puntaje:</div>
        <div className="text-8xl flex text-blue-800">
          4 <small className="text-xl mt-6"> /5</small>
        </div>
      </div>
      <Link
        to="/gameplay_selection"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
      >
        Jugar de nuevo
      </Link>
    </div>
  );
};

export default Scoreboard;

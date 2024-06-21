import React from "react";
import { useParams } from "react-router-dom";
import OptionsToSelect from "../components/OptionsToSelect";
import { Link } from "react-router-dom";

const Gameplay = () => {
  let { name } = useParams();

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-screen h-screen bg-gradient-to-b from-[#2c69da] via-[#4edaf9] to-[#2c69da] ">
      <Link
        to="/gameplay_selection"
        className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer fixed top-0 left-0 m-4"
      >
        Salir
      </Link>
      <h1 className="text-[#F3F3F3] font-normal text-4xl stroke-blue-700 stroke-2">
        {name}
      </h1>
      <OptionsToSelect />
    </div>
  );
};

export default Gameplay;

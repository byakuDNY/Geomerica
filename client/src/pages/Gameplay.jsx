import React from "react";
import { useParams } from "react-router-dom";
import OptionsToSelect from "../components/OptionsToSelect";

const Gameplay = () => {
  let { name } = useParams();

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-screen h-screen bg-gradient-to-b from-[#2c69da] via-[#4edaf9] to-[#2c69da] ">
      <h1 className="text-[#F3F3F3] font-normal text-4xl stroke-blue-700 stroke-2">
        {name}
      </h1>
      <OptionsToSelect />
    </div>
  );
};

export default Gameplay;

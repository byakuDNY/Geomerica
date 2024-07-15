import React from "react";
import OptionsToSelect from "../components/OptionsToSelect";
import { Link } from "react-router-dom";
import GameplayNav from "../components/GameplayNav";

const Gameplay = () => {
  return (
    <div>
      <GameplayNav />
      <div className="flex flex-col justify-center items-center gap-10 ">
        <OptionsToSelect />
      </div>
    </div>
  );
};

export default Gameplay;

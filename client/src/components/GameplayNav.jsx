import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const GameplayNav = () => {
  let { name } = useParams();

  return (
    <nav className="flex justify-between bg-[#2C4058] p-3">
      <div className="flex items-center gap-5 text-[#F3F3F3] px-4 py-2 text-2xl font-semibold ">
        <img src="/question-mark.png" alt="question-mark-logo" />
        {name}
      </div>
      <Link
        to={"/"}
        className="flex justify-center w-10 h-10 font-extrabold text-3xl text-white rounded-full hover:bg-[#252B41] hover:text-red-500"
      >
        &times;
      </Link>
    </nav>
  );
};

export default GameplayNav;

import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import BgMusic from "../components/BgMusic";
import homepage from "../assets/homepage.mp3";

const Homepage = () => {
  const modes = [
    { id: "bandera", name: "Modo 1 : Adivina la Bandera" },
    { id: "mapa", name: "Modo 2 : Quiz de Geolocalización" },
    { id: "glosario", name: "Glosario" },
    { id: "ayuda", name: "Ayuda" },
    { id: "herramienta-admin", name: "Heramienta de Admin" },
  ];

  return (
    <div className="bg-[#252B41] h-screen">
      <BgMusic bgMusic={homepage} />
      <header className="flex justify-between items-center bg-amber-500 p-5 pt-0.5 header-curved">
        <img className="p-0 m-0" src="Animation.gif" alt="" />
        <h1 className="font-extralight text-[#F3F3F3] text-6xl stroke-blue-700 stroke-2">
          Geomérica
        </h1>
        <Logout />
      </header>
      <div className="flex flex-col justify-center items-center gap-10 pt-16">
        {modes.map((mode) => (
          <Link
            key={mode.id}
            to={`/gameplay/${mode.id}/${mode.name}`}
            className="flex items-center gap-5 bg-[#2C4058] text-[#F3F3F3] rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#ffd15b] hover:text-[#252B41] hover:cursor-pointer w-2/5"
          >
            <img src="question-mark.png" alt="question-mark-logo" />
            {mode.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

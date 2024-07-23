import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import BgMusic from "../components/BgMusic";
import BgMucisHomePage from "../assets/bg-music-homepage.mp3";
import { useAuthContext } from "../AuthContext";
import loginBtn from "../assets/login-btn.png";
import toast from "react-hot-toast";
import CustomToast from "../components/CustomToast";

const Homepage = () => {
  const { authUser } = useAuthContext();

  const modes = [
    { id: "bandera", name: "Modo 1 : Adivina la Bandera" },
    { id: "mapa", name: "Modo 2 : Quiz de Geolocalización" },
  ];

  const otherModes = [
    { id: "glosario", name: "Glosario" },
    { id: "ayuda", name: "Ayuda" },
    ...(authUser?.username === "admin"
      ? [{ id: "herramienta-admin", name: "Herramienta de Admin" }]
      : []),
  ];

  if (!authUser) {
    toast.custom((t) => (
      <CustomToast message="Inicia sesión para guardar tu puntaje" id={t.id} />
    ));
  }

  return (
    <div className="bg-[#252B41] h-screen">
      <BgMusic bgMusic={BgMucisHomePage} />
      <header className="flex justify-between items-center bg-amber-500 p-5 pt-0.5 header-curved">
        <img className="w-20 sm:w-36" src="globe-animation.gif" alt="" />
        <h1 className="font-extralight text-[#F3F3F3] text-5xl sm:text-6xl stroke-blue-700 stroke-2">
          Geomérica
          <p className="text-xl text-center font-extrabold font-outline-2 pt-5 ">
            Usuario: {authUser?.username || "Guest"}
          </p>
        </h1>
        <div>
          {authUser ? (
            <Logout />
          ) : (
            <button className="hover:bg-gray-300 p-3 m-5 rounded-xl">
              <Link to="/login">
                <img
                  src={loginBtn}
                  alt="login-button"
                  className="w-6 sm:w-12"
                />
              </Link>
            </button>
          )}
        </div>
      </header>
      <div className="flex flex-col justify-center items-center gap-10 pt-16">
        {modes.map((mode) => (
          <Link
            key={mode.id}
            to={`/gameplay/${mode.id}/${mode.name}`}
            className="flex items-center gap-5 bg-[#2C4058] text-[#F3F3F3] rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#ffd15b] hover:text-[#252B41] hover:cursor-pointer w-4/5 sm:w-2/5"
          >
            <img src="question-mark-icon.png" alt="question-mark-icon" />
            {mode.name}
          </Link>
        ))}
        {otherModes.map((mode) => (
          <Link
            key={mode.id}
            to={`/${mode.id}`}
            className="flex items-center gap-5 bg-[#2C4058] text-[#F3F3F3] rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#ffd15b] hover:text-[#252B41] hover:cursor-pointer w-3/5 sm:w-2/5"
          >
            <img src="question-mark-icon.png" alt="question-mark-icon" />
            {mode.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BgImage from "../components/BgImage";
import { useAuthContext } from "../AuthContext";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VITE_BACKEND_URL } from "./Homepage";

const Scoreboard = () => {
  const location = useLocation();
  const { correctAnswers } = location.state;
  const { authUser } = useAuthContext();
  const { game_mode } = useParams();

  const evaluateRank = (correctAnswers) => {
    if (correctAnswers < 5) {
      return "¡Sigue intentando!";
    } else if (correctAnswers < 8) {
      return "¡Buen trabajo!";
    } else {
      return "¡Excelente!";
    }
  };

  useEffect(() => {
    saveScore();
  }, [correctAnswers]);

  const saveScore = async () => {
    try {
      if (!authUser) {
        toast("Inicia sesión para guardar tu puntaje");
        return;
      }

      const response = await fetch(`${VITE_BACKEND_URL}/api/ranking/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser.token}`,
        },
        body: JSON.stringify({
          game_mode,
          username: authUser.username,
          scores: correctAnswers,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success(`Puntaje guardado`);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error en la petición");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <BgImage />
      <div className="flex flex-col justify-center items-center bg-gray-200 w-4/5 sm:w-2/5 p-10 m-16">
        <img className="w-48" src="/trophy-icon.svg" alt="trophy-icon" />
        <h1 className="text-3xl text-gray-800 py-2 px-4 font-extrabold">
          {evaluateRank(correctAnswers)}
        </h1>
        <h2 className="text-white text-4xl font-extrabold py-2 px-4 font-outline-2">
          {correctAnswers} / 10
        </h2>
        <Link
          className="pt-5 underline hover:text-amber-600"
          to={`/ranking/${game_mode}`}
        >
          Ver El Ranking De{" "}
          {game_mode.charAt(0).toUpperCase() + game_mode.slice(1)}
        </Link>{" "}
      </div>
      <Link
        to="/"
        className="bg-amber-500 hover:bg-amber-600 text-white text-2xl font-extrabold py-2 px-4 rounded font-outline-2 focus:outline-white"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Scoreboard;

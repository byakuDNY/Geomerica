import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "./Homepage";

const Ranking = () => {
  const { game_mode } = useParams();
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    getRanking();
  }, [game_mode]);

  const getRanking = async () => {
    try {
      let response;
      if (game_mode === "bandera") {
        response = await fetch(`${VITE_BACKEND_URL}/api/ranking/flags`);
      } else if (game_mode === "mapa") {
        response = await fetch(`${VITE_BACKEND_URL}/api/ranking/maps`);
      } else {
        toast.error("ID Invalido");
        return;
      }
      const data = await response.json();
      if (response.ok) {
        const sortedData = data.sort((a, b) => b.scores - a.scores);
        setRanking(sortedData);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error en la petición");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#252b41] flex flex-col justify-center items-center">
      <div className="pt-5">
        <Link
          to="/"
          className="bg-amber-500 hover:bg-amber-600 text-white text-md sm:text-2xl font-extrabold py-2 px-4 rounded font-outline-2 focus:outline-white fixed top-0 right-0 m-5"
        >
          Volver al Inicio
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2 sm:gap-30">
        <img
          className="w-16 sm:w-48"
          src="/trophy-icon.svg"
          alt="trophy-icon.svg"
        />
        <h1 className="text-center text-4xl sm:text-6xl text-white">
          Clasificación:
          <p className=" font-extrabold font-outline-2">
            {game_mode.charAt(0).toUpperCase() + game_mode.slice(1)}
          </p>
        </h1>
        <img
          className="w-16 sm:w-48"
          src="/trophy-icon.svg"
          alt="trophy-icon.svg"
        />
      </div>

      <table className="table-auto mx-auto bg-transparent rounded-lg shadow-md">
        <thead className="text-gray-300 border-b">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Usuario</th>
            <th className="px-6 py-3">Puntuación</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((element, index) => (
            <tr key={index} className="border-b text-white">
              <td className="px-6 py-4 text-center">
                {index + 1 <= 3 ? (
                  <span
                    className={`inline-block w-6 h-6 text-center text-white rounded-full ${
                      index + 1 === 1
                        ? "bg-yellow-500"
                        : index + 1 === 2
                        ? "bg-gray-400"
                        : "bg-[#b3644b]"
                    }`}
                  >
                    {index + 1}
                  </span>
                ) : (
                  index + 1
                )}
              </td>
              <td className="px-6 py-4">{element.username}</td>
              <td className="px-6 py-4 text-right">{element.scores}/10</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;

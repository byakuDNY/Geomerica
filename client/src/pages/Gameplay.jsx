import React from "react";
import GameplayNav from "../components/GameplayNav";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import FlagsGameplay from "../components/FlagsGameplay";
import MapsGameplay from "../components/MapsGameplay";
import BgImage from "../components/BgImage";
import BgMusic from "../components/BgMusic";
import { VITE_BACKEND_URL } from "./Homepage";
import bgMusicGameplay from "../assets/bg-music-gameplay.mp3";

const Gameplay = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, [id]);

  const getCountries = async () => {
    setIsLoading(true);
    try {
      let response;
      if (id === "bandera") {
        response = await fetch(`${VITE_BACKEND_URL}/api/country/flags`);
      } else if (id === "mapa") {
        response = await fetch(`${VITE_BACKEND_URL}/api/country/maps`);
      } else {
        toast.error("ID Invalido");
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      toast.error("Error en la petición");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen">
      <BgImage />
      <BgMusic bgMusic={bgMusicGameplay} pos={"right-0 bottom-0"} />
      <GameplayNav />
      <div className="flex flex-col justify-center">
        {isLoading ? (
          <h2>Cargando...</h2>
        ) : id === "bandera" ? (
          <FlagsGameplay countries={countries} />
        ) : (
          <MapsGameplay countries={countries} />
        )}
      </div>
    </div>
  );
};

export default Gameplay;

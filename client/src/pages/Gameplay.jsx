import React from "react";
import GameplayNav from "../components/GameplayNav";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import FlagsGameplay from "../components/FlagsGameplay";
import MapsGameplay from "../components/MapsGameplay";

const Gameplay = () => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
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
        const data = await response.json();
        setCountries(data);
      } else if (id === "mapa") {
        response = await fetch(`${VITE_BACKEND_URL}/api/country/maps`);
        const data = await response.json();
        setCountries(data);
      } else {
        toast.error("ID Invalido");
        setIsLoading(false);
        return;
      }
      console.log("Countries:", countries);
    } catch (error) {
      toast.error("Error en la petición");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <GameplayNav />
      <div className="flex flex-col justify-center items-center gap-10 ">
        {/* {isLoading && <h2>Loading...</h2>} */}
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          countries.map((country) => <p>{country.pais}</p>)
        )}
        {id === "bandera" ? (
          <FlagsGameplay countries={countries} />
        ) : (
          <MapsGameplay countries={countries} />
        )}
      </div>
    </div>
  );
};

export default Gameplay;

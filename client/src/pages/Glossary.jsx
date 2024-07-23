import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "./Homepage";
import ModalGlossary from "../components/ModalGlossary";

const Glossary = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/country`);
      const data = await response.json();
      if (response.ok) {
        setCountries(data);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error en la petición");
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleCountryClick = (id) => {
    setSelectedCountryId(id);
    setIsModalOpen(true);
  };

  return (
    <div>
      {isLoading ? (
        <div className="h-screen bg-[#252B41] text-white flex justify-center items-center">
          Cargando...
        </div>
      ) : (
        <div className="bg-[#252b41] flex flex-col justify-center items-center">
          <div className="fixed right-0 top-0 p-5">
            <Link
              to={"/"}
              className="flex justify-center w-10 h-10 font-extrabold text-3xl text-white rounded-full bg-amber-500 hover:text-red-500 hover:bg-white"
            >
              &times;
            </Link>
          </div>
          <h1 className="text-center text-7xl text-white p-10">Glosario</h1>

          <table className="table-auto mx-auto bg-transparent rounded-lg shadow-md">
            <thead className="text-gray-300 border-b text-left">
              <tr>
                <th className="px-6 py-3">País</th>
                <th className="px-6 py-3">Capital</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((element, index) => (
                <tr key={index} className="border-b text-white">
                  <td className="px-6 py-4">{element.pais}</td>
                  <td className="px-6 py-4">{element.capital}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleCountryClick(element._id)}
                      className="inline-block px-6 py-4 hover:text-blue-500 underline"
                    >
                      Ver más
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isModalOpen && selectedCountryId && (
        <ModalGlossary
          id={selectedCountryId}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Glossary;

import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "./Homepage";
import { Link } from "react-router-dom";
import ModalAdmin from "../components/ModalAdmin";

const Admin = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const editModalRef = useRef(null); // Use a ref to access the modal

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

  const deleteCountry = async (id) => {
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/country/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        setCountries(countries.filter((country) => country._id !== id));
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error en la petición");
      console.error(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="h-screen bg-[#252B41] text-white flex justify-center items-center">
          Cargando...
        </div>
      ) : (
        <div className="bg-[#252B41] flex flex-col gap-20">
          <header className="bg-amber-500">
            <Link
              to={"/"}
              className="flex justify-center w-10 h-10 font-extrabold text-3xl text-white rounded-full hover:bg-[#252B41] hover:text-red-500"
            >
              &times;
            </Link>
            <h1 className="text-center text-4xl pb-9 font-extrabold text-white font-outline-2 ">
              Herramienta de Admin
            </h1>
          </header>
          <table className="text-3xl text-white font-extrabold font-outline-2 table-auto mx-auto bg-amber-500 rounded-t-lg shadow-md">
            <thead className="text-gray-300 border-b">
              <tr>
                <th className="px-6 py-3">Paises</th>
                <th className="px-6 py-3">Acciónes</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((element, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{element.pais}</td>
                  <td className="p-4 border-l">
                    <div className="flex gap-2">
                      <button
                        className="inline-block text-lg font-extrabold text-white px-2 py-1 bg-blue-500 rounded hover:bg-blue-600"
                        onClick={() => {
                          setSelectedCountryId(element._id);
                          editModalRef.current.showModal(); // Show modal using the ref
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteCountry(element._id)}
                        className="inline-block text-lg font-extrabold text-white px-2 py-1 bg-red-500 rounded hover:bg-red-600"
                      >
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ModalAdmin
            id={selectedCountryId}
            countries={countries}
            setCountries={setCountries}
            ref={editModalRef} // Pass the ref to the modal
          />
        </div>
      )}
    </div>
  );
};

export default Admin;

import React, { useState, useEffect, forwardRef } from "react";
import addBtn from "../assets/add-btn.png";
import toast from "react-hot-toast";
import { VITE_BACKEND_URL } from "../pages/Homepage";

const ModalAdmin = forwardRef(({ id, countries, setCountries }, ref) => {
  const [countryData, setCountryData] = useState({
    pais: "",
    capital: "",
    bandera: "",
    mapa: "",
    localizacion: "",
  });

  useEffect(() => {
    if (id) {
      const country = countries.find((c) => c._id === id);
      if (country) {
        setCountryData(country);
      }
    } else {
      setCountryData({
        pais: "",
        capital: "",
        bandera: "",
        mapa: "",
        localizacion: "",
      });
    }
  }, [id, countries]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    ref.current.close();
    try {
      const method = id ? "PUT" : "POST";
      const url = id
        ? `${VITE_BACKEND_URL}/api/country/${id}`
        : `${VITE_BACKEND_URL}/api/country`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(countryData),
      });

      const data = await response.json();
      if (response.ok) {
        if (id) {
          setCountries(countries.map((c) => (c._id === id ? data : c)));
          toast.success(`${data.pais} ha sido actualizado`);
        } else {
          setCountries([...countries, data]);
          toast.success(`${data.pais} ha sido creado`);
        }
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error en la petición");
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="fixed bottom-5 right-5"
        onClick={() => {
          ref.current.showModal();
          setCountryData({
            pais: "",
            capital: "",
            bandera: "",
            mapa: "",
            localizacion: "",
          });
        }}
      >
        <img src={addBtn} alt="add-button" className="w-20" />
      </button>
      <dialog
        ref={ref}
        className="p-6 rounded-lg shadow-lg w-full max-w-md mx-auto bg-white"
      >
        <h2 className="text-2xl font-bold mb-4">
          {id ? "Editar País" : "Crear País"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Pais</label>
            <input
              type="text"
              value={countryData.pais}
              onChange={(e) =>
                setCountryData({ ...countryData, pais: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Capital</label>
            <input
              type="text"
              value={countryData.capital}
              onChange={(e) =>
                setCountryData({ ...countryData, capital: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bandera</label>
            <input
              type="text"
              value={countryData.bandera}
              onChange={(e) =>
                setCountryData({ ...countryData, bandera: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            <img src={countryData.bandera} alt="" className="w-36 mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mapa</label>
            <input
              type="text"
              value={countryData.mapa}
              onChange={(e) =>
                setCountryData({ ...countryData, mapa: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            <img src={countryData.mapa} alt="" className="w-36 mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Localizacion</label>
            <input
              type="text"
              value={countryData.localizacion}
              onChange={(e) =>
                setCountryData({ ...countryData, localizacion: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            <img src={countryData.localizacion} alt="" className="w-36 mt-2" />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => ref.current.close()}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
});

export default ModalAdmin;

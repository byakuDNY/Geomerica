import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VITE_BACKEND_URL } from "../pages/Homepage";

const OptionsToSelect = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getOptions();
  }, [id]);

  const getOptions = async () => {
    setIsLoading(true);
    try {
      let response;
      if (id === "1") {
        response = await fetch(
          `${VITE_BACKEND_URL}/api/country/cinco-capitals`
        );
      } else if (id === "2") {
        response = await fetch(
          `${VITE_BACKEND_URL}/api/country/cinco-banderas`
        );
      } else if (id === "3") {
        response = await fetch(`${VITE_BACKEND_URL}/api/country/cinco-mapas`);
      } else if (id === "4") {
        response = await fetch(
          `${VITE_BACKEND_URL}/api/country/cinco-localizacion`
        );
      } else {
        throw new Error("Invalid id");
      }

      if (!response.ok) {
        // Handle non-200 HTTP status codes
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonError) {
        throw new Error(`Failed to parse JSON: ${text}`);
      }

      console.log(data);
      setOptions(data);
    } catch (error) {
      console.error(error);

      // Handle specific error messages
      if (error.message.includes("504")) {
        console.error("The request timed out. Please try again later.");
      } else {
        console.error("An error occurred:", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {options.length > 0 ? (
            options.map((option, index) =>
              id === "1" ? (
                <button
                  key={index}
                  className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
                >
                  {option}
                </button>
              ) : (
                <img
                  key={index}
                  src={option}
                  alt="map"
                  className="option-image"
                />
              )
            )
          ) : (
            <h2>No options available</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default OptionsToSelect;

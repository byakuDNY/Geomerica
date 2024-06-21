import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OptionsToSelect = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([
    "options1",
    "options2",
    "options3",
    "options4",
  ]);

  // useEffect(() => {
  //   getOptions();
  // }, [id]);

  // const getOptions = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(`http://localhost:5000/${id}`);
  //     const data = await response.json();
  //     setOptions(data.options || []);
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setIsLoading(false);
  // };

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {options.length > 0 ? (
            options.map((option) => (
              <button
                key={option.id}
                className="bg-transparent text-[#F3F3F3] border-2 rounded-lg px-4 py-2 text-2xl font-medium hover:bg-[#F3F3F3] hover:text-[#2c69da] hover:cursor-pointer"
              >
                {option}
              </button>
            ))
          ) : (
            <h2>No options available</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default OptionsToSelect;

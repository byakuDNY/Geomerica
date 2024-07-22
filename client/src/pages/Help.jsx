import React, { useState } from "react";
import { Link } from "react-router-dom";

const Help = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg  h-screen">
      <div className="fixed right-0 top-0 p-5">
        <Link
          to={"/"}
          className="flex justify-center w-10 h-10 font-extrabold text-3xl text-white rounded-full bg-amber-500 hover:text-red-500 hover:bg-white"
        >
          &times;
        </Link>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">
        PREGUNTAS FRECUENTES
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg">{item.question}</span>
              <span className="text-xl">
                {openQuestion === index ? "-" : "+"}
              </span>
            </div>
            {openQuestion === index && (
              <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
            )}
            <hr className="my-2 border-gray-600" />
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm mb-2">¿Tienes más preguntas?</p>
        <p className="text-xs mb-4">
          No te lo preguntes dos veces envíanos dudas o preguntas al siguiente
          correo:
        </p>
        <a
          href="mailto:contacto@gmail.com"
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          geomerica@gmail.com
        </a>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "¿Como puedo saber mi ranking?",
    answer:
      "Podrás ver tu ranking después de completar una partida. ¡Buenas suerte!",
  },
  {
    question: "¿Como prepararse para el quiz?",
    answer: "Se recomienda estudiar el glosario para prepararse adecuadamente.",
  },
  {
    question: "¿Porque crearme un usuario?",
    answer:
      "Crear un usuario te permitirá guardar tu progreso en el quiz y poder tener tu propio puesto en el ranking.",
  },
  {
    question: "¿Cuantas preguntas tiene el quiz?",
    answer: "El quiz consta de 10 preguntas.",
  },
];

export default Help;

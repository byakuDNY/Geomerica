import React from "react";
import BgImage from "../components/BgImage";
import BgMusic from "../components/BgMusic";
import sound from "../assets/sound.mp3";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthContext } from "../AuthContext";
import { VITE_BACKEND_URL } from "./Homepage";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { setAuthUser } = useAuthContext();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!inputs.username || !inputs.password || !inputs.confirmPassword) {
      toast.error("Por favor llena todos los campos");
      return;
    }

    if (inputs.password !== inputs.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (inputs.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.username,
          password: inputs.password,
          confirmPassword: inputs.confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        toast.success("Usuario registrado exitosamente");
        setInputs({ username: "", password: "", confirmPassword: "" });
        localStorage.setItem("token", JSON.stringify(data));
        setAuthUser(data);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Algo salió mal, intenta de nuevo");
    }
    setLoading(false);
  };

  return (
    <div>
      <BgImage />
      <BgMusic bgMusic={sound} />
      <div>
        <h1 className="text-6xl text-center p-10 font-extrabold text-white font-outline-2">
          Registro
        </h1>
        <div className="flex justify-center items-center flex-col">
          <form onSubmit={handleSignUp} className="w-1/3 p-4 mt-10">
            <div className="mb-6">
              <label
                className="block text-white font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="username"
              >
                Nombre de usuario
              </label>
              <div className="flex items-center text-gray-900 focus-within:text-gray-700">
                <img
                  src="user-regular.svg"
                  alt="user-icon"
                  className="absolute w-5 h-5"
                />
                <input
                  id="username"
                  type="text"
                  placeholder="Escribe su nombre de Usuario"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none "
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-white font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="flex items-center text-gray-900 focus-within:text-gray-700">
                <img
                  src="lock.svg"
                  alt="user-icon"
                  className="absolute w-6 h-6"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Escribe su contraseña"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-white font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
              <div className="flex items-center text-gray-900 focus-within:text-gray-700">
                <img
                  src="lock.svg"
                  alt="user-icon"
                  className="absolute w-6 h-6"
                />
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Escribe su contraseña"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-amber-500 hover:bg-amber-600 text-white text-2xl font-extrabold py-2 px-4 rounded font-outline-2 focus:outline-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Cargando..." : "CREAR CUENTA"}
              </button>
            </div>
          </form>
          <div className="pt-5">
            <Link
              className="text-white text-xl font-extrabold py-2 px-4 hover:text-gray-200 font-outline-2 focus:outline-white"
              to={"/"}
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

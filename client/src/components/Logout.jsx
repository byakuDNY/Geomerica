import React, { useContext } from "react";
import { useAuthContext } from "../AuthContext";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../pages/Homepage";

const Logout = () => {
  const { setAuthUser } = useAuthContext();

  const logout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        toast.success("Usuario deslogueado exitosamente");
        localStorage.removeItem("token");
        setAuthUser(null);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Algo salió mal");
    }
  };
  return (
    <div>
      <button
        onClick={logout}
        className="bg-[#252B41] hover:bg-amber-600 text-white text-2xl font-extrabold py-2 px-4 rounded font-outline-2 focus:outline-white"
      >
        Cerrar Sesíon
      </button>
    </div>
  );
};

export default Logout;

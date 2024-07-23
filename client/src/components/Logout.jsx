import React, { useContext } from "react";
import { useAuthContext } from "../AuthContext";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../pages/Homepage";
import logoutBtn from "../assets/logout-btn.png";

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
      toast.error("Error en la petición");
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={logout}
        className=" hover:bg-gray-300 p-3 m-5 rounded-xl"
      >
        <img className="w-6 sm:w-12" src={logoutBtn} alt="logout-btn" />
      </button>
    </div>
  );
};

export default Logout;

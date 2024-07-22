import React, { useContext } from "react";
import { useAuthContext } from "../AuthContext";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../pages/Homepage";
import logoutPNG from "../assets/logout.png";

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
        className=" hover:bg-gray-300 p-3 m-2 rounded-xl"
      >
        <img className="w-6 sm:w-12" src={logoutPNG} alt="" />
      </button>
    </div>
  );
};

export default Logout;

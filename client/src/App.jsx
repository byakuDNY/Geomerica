import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Gameplay from "./pages/Gameplay";
import Scoreboard from "./pages/Scoreboard";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./AuthContext";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        {/* Las rutas */}
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        ></Route>
        <Route path="gameplay/:id/:name" element={<Gameplay />}></Route>
        <Route path="scoreboard" element={<Scoreboard />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;

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
import Ranking from "./pages/Ranking";
import Glossary from "./pages/Glossary";
import Help from "./pages/Help";
import Admin from "./pages/Admin";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        {/* Las rutas */}
        <Route path="/" index element={<Homepage />}></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        ></Route>
        <Route path="/gameplay/:id/:name" element={<Gameplay />}></Route>
        <Route path="/scoreboard/:game_mode" element={<Scoreboard />}></Route>
        <Route path="/ranking/:game_mode" element={<Ranking />}></Route>
        <Route path="/glosario" element={<Glossary />}></Route>
        <Route path="/ayuda" element={<Help />}></Route>
        <Route
          path="/herramienta-admin"
          element={
            authUser?.username === "admin" ? <Admin /> : <Navigate to="/" />
          }
        ></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;

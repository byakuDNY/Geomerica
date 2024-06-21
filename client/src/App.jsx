import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GameplaySelection from "./pages/GameplaySelection";
import Gameplay from "./pages/Gameplay";
import Scoreboard from "./pages/Scoreboard";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Las rutas */}
        <Route index path="/" element={<Homepage />}></Route>
        <Route
          path="gameplay_selection"
          element={<GameplaySelection />}
        ></Route>
        <Route path="gameplay/:id/:name" element={<Gameplay />}></Route>
        <Route path="scoreboard" element={<Scoreboard />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

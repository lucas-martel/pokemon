import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as Screens from "../utils/Screens";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={Screens.routePath.main} element={<Screens.MainScreen />} />
      <Route path={Screens.routePath.favs} element={<Screens.FavoritesScreen />} />
      <Route path={Screens.routePath.pkInfo} element={<Screens.PokemonInfo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

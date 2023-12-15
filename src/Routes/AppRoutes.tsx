import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<p>incial</p>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes

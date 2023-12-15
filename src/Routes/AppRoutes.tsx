import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<p>incial</p>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

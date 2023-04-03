import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import QuotePage from "./container/QuotePage";
import HomePage from "./container/HomePage";
import ExcalidrawPage from "./container/ExcalidrawPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Navigate to={"/home"} />} />
        <Route path="home" element={<HomePage />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="excalidraw" element={<ExcalidrawPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

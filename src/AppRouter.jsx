import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import QuotePage from "./container/QuotePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        {/* <Route index element={<Navigate to={"quote"} />} /> */}
        <Route path="quote" element={<QuotePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

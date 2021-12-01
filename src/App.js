import React from "react";
import { Header, GlobalStyle } from "./components";
import { Home } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
export const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence>
        <Routes lacation={location} key={location.pathname}>
          <Route path="/" caseSensitive={false} element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

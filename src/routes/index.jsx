import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/index";
import Detail from "pages/Detail";
import Example from "pages/Example";
import NotFound from "pages/NotFound";
import Favorite from "pages/Favorite";
import { ThemeContext } from "utils/context";

function App() {
  const [isLight, setIsLight] = useState(true);
  // useMemo,agar nilainya tidak terus-terusan berganti/untuk nilai yang jarang diganti
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_movie" element={<Detail />} />
          <Route path="/sandbox" element={<Example />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route
            path="*"
            element={
              <NotFound>
                <div>404 Error Not Found</div>
              </NotFound>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

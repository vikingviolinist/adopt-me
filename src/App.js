import { useState, StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import ThemeContext from "./ThemeContext";
import { Details, SearchParams } from "./components";

const App = () => {
  const theme = useState("salmon");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import ComparePlayers from "./pages/ComparePlayers.jsx";
import GetTopPlayersForm from "./pages/GetTopPlayersForm.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const darkModeOff = () => {
    setDarkMode(false);
  };

  const darkModeOn = () => {
    setDarkMode(true);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={<Home darkModeOff={darkModeOff} darkModeOn={darkModeOn} />}
        />
        <Route path="/compare-two-players" element={<ComparePlayers />} />
        <Route path="/get-top-players" element={<GetTopPlayersForm />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

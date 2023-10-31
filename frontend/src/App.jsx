import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import ComparePlayers from "./pages/ComparePlayers.jsx";
import GetTopPlayers from "./pages/GetTopPlayers.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

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
        <Route path="/get-top-players" element={<GetTopPlayers darkMode={darkMode}/>} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

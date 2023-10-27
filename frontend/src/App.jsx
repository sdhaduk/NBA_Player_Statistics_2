import React, {useState} from 'react';
import Home from './pages/Home.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
  palette: {
    mode: darkMode ? "dark" : "light"
    }
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
   <Home darkModeOff = {darkModeOff} darkModeOn = {darkModeOn}/>
   </ThemeProvider>
  )
}

export default App;
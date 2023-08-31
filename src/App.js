//Styles
import "./App.css";
//NPM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {CSSTransition, TransitionGroup} from "react-transition-group"
//Pages
import MainPage from "./Pages/MainPage/MainPages";
import BabyBoomPage from "./Pages/BabyBoomPage/BabyBoomPage";
import CapitalPage from "./Pages/Capital/CapitalPage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";
import CookingShowPPage from "./Pages/CookingShowPage/CookingShowPage";
import SummerUfaPage from "./Pages/SummerUfa/SummerUfaPage";
import UfaIsAwarePage from "./Pages/UfaIsAware/UfaIsAwarePage";
import UfaOfChildhoodPage from "./Pages/UfaOfChildhood/UfaOfChildhoodPage";
//Components
import Navbar from "./Components/Navigation/Navbar/Navbar";
import Footer from "./Components/Navigation/Footer/Footer";
import { Component } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/src/Pages/BabyBoomPage/BabyBoomPage.jsx"
              element={<BabyBoomPage />}
            />
            <Route
              path="/src/Pages/Capital/CapitalPage.jsx"
              element={<CapitalPage />}
            />
            <Route
              path="/src/Pages/WeatherPage/WeatherPage.jsx"
              element={<WeatherPage />}
            />
            <Route
              path="/src/Pages/CookingShowPage/CookingShowPage.jsx"
              element={<CookingShowPPage />}
            />
            <Route
              path="/src/Pages/SummerUfa/SummerUfaPage.jsx"
              element={<SummerUfaPage />}
            />
            <Route 
            path="src/Pages/UfaIsAware/UfaIsAwarePage.jsx"
            element={<UfaIsAwarePage/>}
            />
            <Route
            path="src/Pages/UfaOfChildhood/UfaOfChildhoodPage.jsx"
            element={<UfaOfChildhoodPage/>}
            />
          </Routes>
          
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

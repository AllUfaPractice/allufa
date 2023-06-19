//Styles
import "./App.css";
//NPM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
//Pages
import MainPage from "./Pages/MainPage/MainPages";
import BabyBoomPage from "./Pages/BabyBoomPage/BabyBoomPage";
//Components
import Navbar from "./Components/Navigation/Navbar/Navbar";

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
              path="/src/Pages/MainPage/MainPage.jsx"
              element={<MainPage />}
            />
            <Route
              path="/src/Pages/BabyBoomPage/BabyBoomPage.jsx"
              element={<BabyBoomPage />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

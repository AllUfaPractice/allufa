//Styles
import "./App.css";
//NPM
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
import { Componentt } from "react";

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
  const routes = [
    { path: "/", Component: MainPage },
    {
      path: "/src/Pages/BabyBoomPage/BabyBoomPage.jsx",
      Componentt: BabyBoomPage,
    },
    { path: "/src/Pages/WeatherPage/WeatherPage.jsx", Component: CapitalPage },
    { path: "/src/Pages/Capital/CapitalPage.jsx", Component: WeatherPage },
    {
      path: "/src/Pages/CookingShowPage/CookingShowPage.jsx",
      Component: CookingShowPPage,
    },
    {
      path: "/src/Pages/SummerUfa/SummerUfaPage.jsx",
      Component: SummerUfaPage,
    },
    {
      path: "src/Pages/UfaIsAware/UfaIsAwarePage.jsx",
      Component: UfaIsAwarePage,
    },
    {
      path: "src/Pages/UfaOfChildhood/UfaOfChildhoodPage.jsx",
      Component: UfaOfChildhoodPage,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <NavLink to = "/src/Pages/BabyBoomPage/BabyBoomPage.jsx"
        className='asd'
        >adsadsadaad</NavLink>
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
            element={<UfaIsAwarePage />}
          />
          <Route
            path="src/Pages/UfaOfChildhood/UfaOfChildhoodPage.jsx"
            element={<UfaOfChildhoodPage />}
          />
          {routes.map(({ path, Componentt }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                  in={match != null}
                >
                  <Componentt />
                </CSSTransition>
              )}
            </Route>
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

{
  /* <div className="App">
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
element={<UfaIsAwarePage />}
/>
<Route
path="src/Pages/UfaOfChildhood/UfaOfChildhoodPage.jsx"
element={<UfaOfChildhoodPage />}
/>
</Routes> 
    </Routes>
    <Footer />
  </Router>
</ThemeProvider>
<Routes> */
}

//Styles
import './App.css';
//Pages
import MainPage from './Pages/MainPage/MainPages';
//NPM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/src/Pages/MainPage/MainPage"
            element={<MainPage />}
          />
        </Routes>
      </Router>
      
      {/* <MainInformation/>
      <Footer/> */}
    </div>
  );
}

export default App;



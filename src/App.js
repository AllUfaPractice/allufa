import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainInformation from './Information/MainInformation/Information';
import MainPage from './Pages/MainPage/MainPages';
import Footer from './Components/Navbar/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      {/* <MainInformation/>
      <Footer/> */}
    </div>
  );
}

export default App;

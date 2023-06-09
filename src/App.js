import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainInformation from './Information/MainInformation/Information';
import MainPage from './Pages/MainPage/MainPages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <MainInformation/>
    </div>
  );
}

export default App;

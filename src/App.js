import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import TourList from './Components/TourList/TourList';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
     <NavBar />
     <TourList />
    </div>
  );
}

export default App;

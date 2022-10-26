import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Vid_Recommendation from './Components/Vid_Recommendation';


function App() {
  return (
    <div className="App">
      {/* header section */}
      <Header />
      <div className='side_section'>
        {/* sidebar */}
      <Sidebar />
      <Vid_Recommendation />

      </div>
      
    </div>
  );
}

export default App;

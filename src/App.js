import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Recommendation from './Components/Recommendation';


function App() {
  return (
    <div className="App">
      {/* header section */}
      <Header />
      <div className='side_section'>
        {/* sidebar */}
      <Sidebar />
      <Recommendation />
      </div>
      
    </div>
  );
}

export default App;

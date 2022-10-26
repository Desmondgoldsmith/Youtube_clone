import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* header section */}
      <Header />
      <div className='side_section'>
        {/* sidebar */}
      <Sidebar />

      </div>
      
    </div>
  );
}

export default App;

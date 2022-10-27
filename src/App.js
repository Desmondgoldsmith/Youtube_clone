import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Recommendation from './Components/Recommendation';
import {BrowserRouter as  Router, Switch , Route} from "react-router-dom"

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
// npx i react-router-dom
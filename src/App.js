import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Recommendation from './Components/Recommendation';
import {BrowserRouter ,  Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<h1>Home</h1>} />
        <Route path = "/search" element = {<h1>Search</h1>} />
      </Routes>
     </BrowserRouter>


      {/* header section */}
      {/* <Header />
      <div className='side_section'> */}
        {/* sidebar */}
      {/* <Sidebar />
      <Recommendation /> */}
      {/* </div> */}
      
    </div>
  );
}

export default App;
//npm install react-router-dom@6
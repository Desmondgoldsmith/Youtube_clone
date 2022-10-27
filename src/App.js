import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Recommendation from './Components/Recommendation';
import {BrowserRouter ,  Routes , Route} from "react-router-dom"
import Searchpage from './Components/Searchpage';

function App() {
  return (
    <div className="App">  
     <BrowserRouter> 
            <Header />
            
      <Routes>
        <Route path = "/" element = {<>
          <div className='side_section'>
            <Sidebar />
            <Recommendation />
          </div>
        </>} />
        <Route path = "/search/:searchString" element = {
        <>
          <div className='side_section'>
            <Sidebar />
            <Searchpage />
          </div>
        </>
        } />
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
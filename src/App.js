import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
// import Video from './components/Video/Video';
import Homescreen from './screens/homescreen/Homescreen';
import './app.scss';

const App = () => {
    return(
        <>
          <Header />
          <div className='app__container'>
          <Sidebar />
          <Container fluid className="app_main">
            <Homescreen />
          </Container>
          </div>
         
         </>
    )
}

export default App;
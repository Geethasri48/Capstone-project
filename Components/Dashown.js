import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Nav from './Nav.js';
import Carinfo from './Carinfo';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='row' style={{background:"#F0FFFF"}}>
        <div className='col-md-2' ><Nav/></div>
        <div className='col-md-10' style={{height:"82.5vh",overflowY:"scroll",background:"#F0FFFF"}}>
        <Routes>

        <Route path='/' element={<Carinfo />} />
        
        </Routes>

        </div>
        </div>
        </BrowserRouter>
      </div>
  );
}

export default App;

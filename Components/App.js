import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Carinfo from './Carinfo';
import Booking from './Booking';
import Payment from './Payment';
import Record from './Record';
import Nav from './Nav.js';
import Feedback from './Feedback';
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
        <Route path='/Booking' element={<Booking />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Record' element={<Record />} />
        <Route path='/Feedback' element={<Feedback />} />
        </Routes>

        </div>
        </div>
        </BrowserRouter>
      </div>
  );
}

export default App;

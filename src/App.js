
import './App.css';
import ContactUs from './component/assets/ContactUs';

import {  Routes,Route } from 'react-router-dom';
import MainComponent from './component/MainComponent';
import  About  from './component/assets/About';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainComponent />}></Route>
      <Route path='/contact' element={<ContactUs />}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>      
    </>

  );
}

export default App;

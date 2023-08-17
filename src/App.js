// App.js
import './App.css';
import ContactUs from './component/assets/ContactUs';
import { Routes, Route } from 'react-router-dom';
import About from './component/assets/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Login from './component/Users/Login';
import Signup from './component/Users/Signup';
import HomeComponent from './component/HomeComponent';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

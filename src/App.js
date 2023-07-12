import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ColorModeSwitcher from "./ColorModeSwitcher";
import Header from "./components/Header.jsx"
import Home from './components/Home';
import Footer from './components/Footer.jsx'
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <ColorModeSwitcher float={'right'}></ColorModeSwitcher>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Scan from './pages/Scan';
import History from './pages/History';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5 d-flex flex-column min-vh-100">
        <Routes className="flex-fill">
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
    
  );
}
export default App;

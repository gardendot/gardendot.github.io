import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Terms from './pages/Terms';
import About from './pages/About';
import Shipping from './pages/Shipping';
import GrowYourPlant from './pages/GrowYourPlant';
import Game from './pages/Game'
import './styles/index.css';

// index.jsx or App.jsx
const params = new URLSearchParams(window.location.search);
const redirectPath = params.get('redirect');

if (redirectPath) {
  window.history.replaceState(null, '', redirectPath);
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BestForYou from './components/BestForYou';
import NearFromYou from './components/NearFromYou';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import MapComponent from './components/Map'; // Подключаем компонент карты
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-section">
        <SearchBar />
      </div>
      <BestForYou />
      <NearFromYou />
      {/* Вставляем карту перед формой обратной связи */}
      <MapComponent />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;

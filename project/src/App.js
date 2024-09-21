// App.js
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BestForYou from './components/BestForYou';
import NearFromYou from './components/NearFromYou';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
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
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;

// components/SearchBar.js
import React from 'react';
import '../css/SearchBar.css'; // Стили для SearchBar

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search address, or near you" className="search-input" />
      <div className="date-picker">
        <button className="date-btn">Date</button>
      </div>
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;

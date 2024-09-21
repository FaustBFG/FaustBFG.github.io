// components/BestForYou.js
import React from 'react';
import Card from './Card';
import '../css/BestForYou.css';

const data = [
  { title: "Audeju Office Space", image: "image1.jpg" },
  { title: "Terbatas Office Space", image: "image2.jpg" },
  { title: "Z-Towers Office Space", image: "image3.jpg" },
  { title: "Jauna Teika", image: "image4.jpg" },
  { title: "Jurkalne Tahnology Park", image: "image5.jpg" },
  { title: "Blaumana Office Space", image: "image6.jpg" },
];

const BestForYou = () => {
  return (
    <section className="best-for-you">
      <h2>Best for you</h2>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <button className="see-more-btn">See more</button>
    </section>
  );
};

export default BestForYou;

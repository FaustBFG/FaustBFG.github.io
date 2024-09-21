// components/NearFromYou.js
import React from 'react';
import Card from './Card';
import '../css/NearFromYou.css';

const data = [
  { title: "Z-Towers", image: "image1.jpg", distance: "1.5 km" },
  { title: "NOVIRA PLAZA", image: "image2.jpg", distance: "3.0 km" },
];

const NearFromYou = () => {
  return (
    <section className="near-from-you">
      <h2>Near from you</h2>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.title} image={item.image} distance={item.distance} />
        ))}
      </div>
      <button className="see-more-btn">See more</button>
    </section>
  );
};

export default NearFromYou;

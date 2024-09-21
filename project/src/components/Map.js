import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// Задаём массив маркеров с картинками и текстом
const markers = [
  {
    position: [56.9496, 24.1052],
    popupText: `
      <div>
        <h3>Z-Towers, Rīga, Latvia</h3>
        <img src="https://lh3.googleusercontent.com/p/AF1QipM80a5_7RUEgCvmRC88KH3_la2341FYxjsG0nb6=s680-w680-h510" alt="Z-Towers" width="200" />
        <p>A beautiful skyscraper in Rīga.</p>
      </div>
    `,
  },
  {
    position: [56.9475, 24.106],
    popupText: `
      <div>
        <h3>Freedom Monument, Rīga</h3>
        <img src="https://runawayjuno.com/wp-content/uploads/2012/09/Riga-Latvia-milda-freedom-monument-2294.jpg" alt="Freedom Monument" width="200" />
        <p>One of the most iconic landmarks in Latvia.</p>
      </div>
    `,
  },
];

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer center={[56.9496, 24.1052]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>
              {/* Используем dangerouslySetInnerHTML для рендеринга HTML */}
              <div dangerouslySetInnerHTML={{ __html: marker.popupText }} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

// components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

// Зададим координаты центра карты
const centerPosition = [56.9496, 24.1052]; // Координаты Риги, Латвия

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer center={centerPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={centerPosition}>
          <Popup>
            Z-Towers, Rīga, Latvia
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

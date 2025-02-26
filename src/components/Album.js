// src/components/Album.js
import React from "react";
import { useParams } from 'react-router-dom';
import { albums } from '../data';
import './Album.css';

export default function Album() {
  const { id } = useParams();
  const album = albums.find(a => a.id === parseInt(id));

  if (!album) {
    return (
      <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
        <h2 style={{ textAlign: "center", padding: "2rem" }}>Album not found</h2>
      </div>
    );
  }

  return (
    <div className="album-page">
      <h2 className="album-title">{album.title}</h2>
      <div className="album-div" ></div>
      <div className="album-photo-grid">
        {album.images.map((img, index) => (
          <img key={index} src={img} alt={`${album.title} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

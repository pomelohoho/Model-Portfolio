// src/components/Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import { albums } from '../data'; // your album data
import './Gallery.css';

export default function Gallery() {
  return (
    <div className="gallery-page">
      <h2 className="gallery-heading">GALLERY</h2>
      <p className="gallery-subtitle">
        How I love being the SWE that codes her own model portfolio ;{")"}
      </p>
      <p className="gallery-subtitle">
        Click to see the full collection 
      </p>
      <div className="grid-container">
        {albums.map(album => (
          <Link to={`/album/${album.id}`} key={album.id} className="album-card">
            <img src={album.thumbnail} alt={album.title} />
            <div className="album-overlay">
              <h3>{album.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

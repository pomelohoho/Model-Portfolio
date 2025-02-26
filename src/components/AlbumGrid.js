import React from "react";
import { Link } from 'react-router-dom';
import { albums } from '../data';
import "./AlbumGrid.css"; // We'll create this below

export default function AlbumGrid() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Fashion Portfolio</h1>
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

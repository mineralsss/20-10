// src/App.jsx

import React, { useState, useEffect } from 'react';
import Bouquet from './Bouquet';
import Card from './Card';
import AudioPlayer from './AudioPlayer';
import './index.css';

function App() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Tạo các cánh hoa rơi
    const newPetals = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5
    }));
    setPetals(newPetals);
  }, []);

  return (
    <>
      <AudioPlayer 
        src="/background-music.mp3" 
        songName="Nơi này có Anh"
        coverImage="/cover.jpg"
      />
      <div className="mobile-app">
        {/* Falling petals */}
        {petals.map(petal => (
          <div
            key={petal.id}
            className="falling-petal"
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`
            }}
          />
        ))}

        {/* Header */}
        <header className="mobile-header">
          <div className="date-badge">20 / 10</div>
          <h1 className="greeting-title">
            Chúc Mừng<br />
            <span className="highlight-name">Hương Giang</span>
          </h1>
          <p className="greeting-subtitle">
            Ngày Phụ Nữ Việt Nam 🌸
          </p>
        </header>

        {/* Bouquet Section - Single Bouquet */}
        <section className="bouquet-section">
          <div className="bouquet-gallery">
            <Bouquet />
          </div>
        </section>

        {/* Greeting Card */}
        <section className="card-section">
          <Card />
        </section>

        {/* Footer */}
        <footer className="mobile-footer">
          <div className="sparkle">✦</div>
          <p>Tuấn Anh dành tặng Giang</p>
          <div className="sparkle">✦</div>
        </footer>
      </div>
    </>
  );
}

export default App;

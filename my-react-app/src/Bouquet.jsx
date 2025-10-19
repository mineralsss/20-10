// src/Bouquet.jsx

import React from 'react';
import Hydrangea from './Hydrangea';
import './Bouquet.css';

const Bouquet = () => {
  // 3 cành hoa màu hồng
  const allFlowers = [
    { colors: ['#ffb6d9', '#ff8dc7', '#ff69b4', '#ffc4e1', '#ffe0f0'] },
    { colors: ['#ff69b4', '#ff1493', '#ff85c0', '#ffa6d4', '#ffc0e0'] },
    { colors: ['#ffc4e1', '#ffb6d9', '#ff99cc', '#ff8dc7', '#ffe0f0'] }
  ];

  // Sắp xếp các cành hoa với vị trí khác nhau
  const flowers = allFlowers.map((flower, index) => ({
    id: index + 1,
    colors: flower.colors,
    transform: 
      index === 0 ? 'translateX(-50px) rotate(-15deg) translateY(20px)' :
      index === 1 ? 'translateX(0px) rotate(0deg) translateY(0px)' :
      'translateX(50px) rotate(15deg) translateY(20px)',
    zIndex: index === 1 ? 12 : 10,
    scale: index === 1 ? 1 : 0.95
  }));

  return (
    <div className="bouquet-container">
      <div className="bouquet-stems-wrapper">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="bouquet-stem"
            style={{
              transform: `${flower.transform} scale(${flower.scale})`,
              zIndex: flower.zIndex
            }}
          >
            <Hydrangea colors={flower.colors} />
          </div>
        ))}
      </div>
      
      {/* Giấy gói bó hoa */}
      <div className="bouquet-wrap">
        <div className="wrap-ribbon"></div>
        <div className="ribbon-bow">
          <div className="bow-left"></div>
          <div className="bow-right"></div>
          <div className="bow-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Bouquet;

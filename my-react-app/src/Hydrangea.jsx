// src/Hydrangea.jsx

import React, { useMemo } from 'react';
import Floret from './Floret';
import './Hydrangea.css';

// Các tham số có thể tùy chỉnh
const FLORET_COUNT = 200; // Số lượng bông hoa nhỏ
const CLUSTER_SIZE = 250; // Kích thước của cụm hoa (pixels)

const Hydrangea = ({ colors }) => {
  // Bảng màu mặc định của hoa cẩm tú cầu
  const COLORS = colors || ['#d1e7ff', '#b3d7ff', '#94c6ff', '#a5b9f7', '#c6c6f7'];

  // useMemo để đảm bảo hoa không bị tính toán lại mỗi lần render
  const florets = useMemo(() => {
    const generatedFlorets = [];
    
    for (let i = 0; i < FLORET_COUNT; i++) {
      // Sử dụng tọa độ cực để tạo điểm ngẫu nhiên trong một hình tròn
      const angle = Math.random() * 2 * Math.PI;
      
      // Math.sqrt(Math.random()) giúp các điểm phân bố đều hơn trong hình tròn
      const radius = Math.sqrt(Math.random()) * (CLUSTER_SIZE / 2);
      
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      // Chuyển đổi tọa độ để tâm ở giữa container
      const top = (CLUSTER_SIZE / 2) + y - 10; // 10 là 1/2 kích thước floret
      const left = (CLUSTER_SIZE / 2) + x - 10;
      
      // Chọn một màu ngẫu nhiên từ bảng màu
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      // Kích thước và độ xoay ngẫu nhiên để trông tự nhiên hơn
      const size = 15 + Math.random() * 15;
      const rotation = Math.random() * 360;

      generatedFlorets.push({
        style: {
          top: `${top}px`,
          left: `${left}px`,
          width: `${size}px`,
          height: `${size}px`,
          color: color,
          transform: `rotate(${rotation}deg) scale(${0.8 + Math.random() * 0.4})`,
        },
      });
    }
    
    return generatedFlorets;
  }, [colors]);

  return (
    <div className="hydrangea-cluster" style={{ width: CLUSTER_SIZE, height: CLUSTER_SIZE }}>
      {florets.map((floret, index) => (
        <Floret key={index} style={floret.style} />
      ))}
      <div className="stem"></div>
    </div>
  );
};

export default Hydrangea;

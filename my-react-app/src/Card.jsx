// src/Card.jsx

import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="greeting-card">
      <div className="card-decoration-top">
        <div className="decoration-flower">🌸</div>
        <div className="decoration-flower">🌺</div>
        <div className="decoration-flower">🌸</div>
      </div>
      
      <div className="card-header">
        <h2 className="card-title">Gửi Hương Giang</h2>
        <div className="card-date">20 • 10 • 2025</div>
      </div>

      <div className="card-content">
        <p className="card-message">
          Anh biết đóa hoa anh làm có đẹp mấy thì cũng không thể nào đẹp bằng 
          <span className="highlight-text"> bông hoa đang đọc những dòng này được</span>.
        </p>
        
        <p className="card-message">
          Anh làm ra trang web này để chúc em ngày 20/10 này và 20/10 của 
          <span className="highlight-text"> rất rất nhiều năm nữa</span> luôn 
          <span className="highlight-text"> xinh đẹp và tỏa sáng.</span>
        </p>

        <p className="card-message">
          Mong rằng cuộc sống của em luôn tràn ngập niềm vui, hạnh phúc và thành công 
          trong mọi điều em làm! 💝
        </p>
      </div>

      <div className="card-signature">
        <div className="signature-line"></div>
        <p className="signature-text">Với tất cả tình cảm, xin tặng em đóa hoa không tàn</p>
      </div>

      <div className="card-decoration-bottom">
        <div className="decoration-heart">💕</div>
      </div>
    </div>
  );
};

export default Card;

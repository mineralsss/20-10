// src/Floret.jsx

import React from 'react';
import './Floret.css';

// Mỗi Floret bao gồm 4 "cánh hoa"
const Floret = ({ style }) => {
  return (
    <div className="floret" style={style}>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
    </div>
  );
};

export default Floret;

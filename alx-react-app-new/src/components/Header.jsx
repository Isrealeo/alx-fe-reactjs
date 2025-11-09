// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      borderBottom: '3px solid #ccc'
    }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;

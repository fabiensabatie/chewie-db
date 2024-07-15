import React from 'react';

export function Menu() {
  return (
    <div style={{ position: 'absolute', top: 0, width: '100%', padding: '10px 0', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('Home clicked!')}>Home</button>
      <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('Portfolio clicked!')}>Portfolio</button>
      <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('Contact clicked!')}>Contact</button>
      <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('About Us clicked!')}>About Us</button>
    </div>
  );
}
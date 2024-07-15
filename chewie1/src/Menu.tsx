import React from 'react';

export function Menu() {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ borderBottom: '1px solid white', paddingBottom: '10px' }}>Menu</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}><button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('Home clicked!')}>Home</button></li>
        <li style={{ margin: '10px 0' }}><button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('Portfolio clicked!')}>Portfolio</button></li>
        <li style={{ margin: '10px 0' }}><button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('Contact clicked!')}>Contact</button></li>
        <li style={{ margin: '10px 0' }}><button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }} onClick={() => alert('About Us clicked!')}>About Us</button></li>
      </ul>
    </div>
  );
}
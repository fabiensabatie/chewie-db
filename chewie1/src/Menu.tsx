import React from 'react';

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'color 0.3s ease'
};

const buttonHoverStyle = {
  color: 'lightgray'
};

export function Menu({ addElement }) {
  return (
    <div style={{ position: 'absolute', top: 0, width: '100%', padding: '10px 0', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <button style={{...buttonStyle}} onMouseEnter={e => e.target.style.color = buttonHoverStyle.color} onMouseLeave={e => e.target.style.color = buttonStyle.color} onClick={() => addElement('Box')}>Box</button>
      <button style={{...buttonStyle}} onMouseEnter={e => e.target.style.color = buttonHoverStyle.color} onMouseLeave={e => e.target.style.color = buttonStyle.color} onClick={() => addElement('Sphere')}>Sphere</button>
      <button style={{...buttonStyle}} onMouseEnter={e => e.target.style.color = buttonHoverStyle.color} onMouseLeave={e => e.target.style.color = buttonStyle.color} onClick={() => addElement('Torus')}>Torus</button>
    </div>
  );
}
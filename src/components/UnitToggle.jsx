import React from 'react';

function UnitToggle({ unit, toggleUnit }) {
  
  // Define the styles for the container and button
  const containerStyle = {
    display: 'flex',        // Use flexbox for alignment
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center',   // Center the content vertically (if you want it center of the page vertically add height: '100vh')
    height: '10vh',        // Take full viewport height (remove this if you don't want vertical centering)
  };

  const buttonStyle = {
    padding: '10px 10px',   // Padding inside the button
    fontSize: '1rem',       // Text size
    backgroundColor: '#f4e6dce3', // Background color
    color: 'black',         // Text color
    border: '1px solid #ccc',         // No border
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',    // Rounded corners
    cursor: 'pointer',      // Cursor to pointer to indicate it's clickable
    outline: 'none',        // No outline, generally it's better for accessibility to keep the outline
  };


  return (
    <div style={containerStyle}>
      <button onClick={() => toggleUnit()} style={buttonStyle}>{unit === 'C' ? 'Switch to °F' : 'Switch to °C'}</button>
    </div>
  );
}

export default UnitToggle;

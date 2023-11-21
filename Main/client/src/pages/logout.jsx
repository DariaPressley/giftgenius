import React from 'react';
import Auth from '../utils/auth';

const Logout = () => {
  const handleLogout = () => {
    Auth.logout();
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'flex-start', // Align items to the top
    height: '100vh', // Make the container take the full viewport height
  };

  const buttonStyle = {
    fontSize: '20px',
    padding: '10px 5px',
    width: '100px',
  };

  return (
    <div style={containerStyle}>
      <h2>Logout Page</h2>
      <p>Come back soon!</p>
      <button style={buttonStyle} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

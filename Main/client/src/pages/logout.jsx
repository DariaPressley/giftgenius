import React from 'react';
import Auth from '../utils/auth';

const Logout = () => {
  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;


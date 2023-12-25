// Sidebar.js

import { Link } from '@mui/material';
import React from 'react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={closeSidebar}>Close</button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

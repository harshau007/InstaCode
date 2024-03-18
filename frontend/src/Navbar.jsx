// Navbar.jsx
import React from 'react';

function Navbar({ onCreateClick }) {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div className="text-white font-bold">My App</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onCreateClick}
      >
        Create
      </button>
    </nav>
  );
}

export default Navbar;
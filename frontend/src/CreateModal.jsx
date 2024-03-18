// CreateModal.jsx
import React, { useState } from 'react';

function CreateModal({ onSubmit, onClose }) {
  const [newData, setNewData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newData);
    setNewData('');
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Create New Data</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newData}
              onChange={(e) => setNewData(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
              placeholder="Enter new data"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
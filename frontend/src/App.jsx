// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import CreateModal from './CreateModal';
import axios from 'axios';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  const url = 'http://localhost:3000/docker';

  useEffect(() => {
    // Fetch data from the backend on component mount
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/docker')
    let test = [];
    let testId = [];
    for (let i = 0; i < res.data.length; i++) {
        let str = res.data[i].Names[0].slice(1)
        let newId = res.data[i].Id.slice(0, 10);
        test.push(str)
        testId.push(newId);
    }
    setData(test)
    setId(testId);
  };

  const handleCreateData = async (newData) => {
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const data = await response.json();
      setData([...data, data]);
      setShowModal(false);
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  return (
    <div className="app">
      <Navbar onCreateClick={() => setShowModal(true)} />
      <Dashboard data={data} />
      {showModal && <CreateModal onSubmit={handleCreateData} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
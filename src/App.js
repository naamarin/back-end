// App.js
import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs/Tabs';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([]);

  // Fetch all tabs from the server
  const fetchTabs = async () => {
    const response = await fetch('http://localhost:8081/tabs');
    const data = await response.json();
    setTabs(data);
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  // Add a new tab
  const addTab = async () => {
    const newTab = { text: 'New Tab', color: 'lightgray' };
    const response = await fetch('http://localhost:8081/tabs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTab),
    });
    const addedTab = await response.json();
    setTabs([...tabs, addedTab]);
  };

  return (
    <div className="App">
      <button onClick={addTab} className="add-tab-button">Add Tab</button>
      <Tabs tabs={tabs} setTabs={setTabs} />
    </div>
  );
}

export default App;
